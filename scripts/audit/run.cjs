#!/usr/bin/env node
// Runs the whole design audit against a production server it starts itself.
//
// Each check is a separate process so one crash can't silently skip the rest,
// and so an individual check can be run on its own while iterating:
//
//   node scripts/audit/contrast.cjs          # all pages
//   node scripts/audit/contrast.cjs /work    # one page
//
// Use `npm run audit` for the full pass — it does the clean build first,
// which matters: see the note in lib.cjs.
const { spawn, spawnSync } = require('node:child_process');
const net = require('node:net');
const path = require('node:path');

// Not 3000/4321: those are the ports a dev server is most likely already
// sitting on, and a server left over from an earlier session is the single
// worst failure mode here — see assertStyled below.
const PORT = process.env.AUDIT_PORT || '4399';
const BASE = `http://localhost:${PORT}`;

const CHECKS = [
  ['contrast', 'WCAG contrast, layout overflow, JS errors'],
  ['hit-targets', '44pt minimum control size'],
  ['text-scaling', '200% text with layout untouched'],
  ['motion', 'reduced motion, focus ring, press states'],
];

/**
 * Refuse to audit a page with no stylesheet.
 *
 * This is the guard that matters most. `next build` over an existing .next —
 * or, worse, a server left running from a previous build — serves prerendered
 * HTML whose <link> points at a CSS chunk hash that no longer exists. The page
 * then renders with NO styles at all, and every check passes vacuously:
 * contrast finds only black on white, nothing overflows because nothing is
 * laid out, and the focus ring and every press state read as missing. Three
 * separate rounds of "failures" here were this and nothing else.
 *
 * So: fetch the page, find its stylesheets, fetch each one, and require that
 * they exist and carry a utility we know the build emits.
 */
async function assertStyled() {
  const html = await (await fetch(BASE + '/')).text();
  const hrefs = [...new Set([...html.matchAll(/href="(\/_next\/static\/css\/[^"\\]+)"/g)].map((m) => m[1]))];
  if (!hrefs.length) throw new Error('the page links no stylesheet at all');
  for (const href of hrefs) {
    const res = await fetch(BASE + href);
    if (!res.ok) {
      throw new Error(
        `${href} → ${res.status}. The running server is serving HTML from a ` +
          'different build than its assets. Stop any other next server and re-run.'
      );
    }
    const css = await res.text();
    if (!css.includes('display:flex')) throw new Error(`${href} loaded but looks empty`);
  }
  return hrefs;
}

async function waitForServer(timeoutMs = 60_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(BASE + '/');
      if (res.ok) return true;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

/** Is anything already listening on the audit port? */
function portBusy() {
  return new Promise((resolve) => {
    const probe = net
      .createServer()
      .once('error', () => resolve(true))
      .once('listening', () => probe.close(() => resolve(false)))
      .listen(PORT, '127.0.0.1');
  });
}

(async () => {
  // A server left over from an earlier run keeps the port and goes on serving
  // the PREVIOUS build's HTML, whose CSS chunk this build has replaced. That
  // produced three separate rounds of phantom audit failures, so it is now a
  // hard stop rather than something to discover downstream.
  if (await portBusy()) {
    console.error(
      `port ${PORT} is already in use. Something else — most likely a leftover ` +
        `\`next start\` — is holding it, and it would serve a different build ` +
        `than the one just produced. Stop it, or set AUDIT_PORT.`
    );
    process.exit(1);
  }

  // Spawn `next` directly rather than through npx, and in its own process
  // group: `npx next start` puts two wrapper processes between us and
  // next-server, and a SIGTERM to the wrapper leaves next-server orphaned and
  // still bound to the port.
  //
  // stdio is fully ignored, NOT inherited. A GitHub Actions step does not
  // finish until every file descriptor it handed out is closed, so a detached
  // server holding the step's stderr hangs the job indefinitely even after the
  // command itself returns — which is exactly what it did, for fifteen minutes,
  // on a run that passes in seconds locally. unref() detaches it from this
  // process's event loop for the same reason.
  const server = spawn(path.join('node_modules', '.bin', 'next'), ['start', '--port', PORT], {
    stdio: 'ignore',
    env: process.env,
    detached: true,
  });
  server.unref();

  let stopped = false;
  const stop = () => {
    if (stopped) return;
    stopped = true;
    // Negative pid = the whole process group, so nothing survives us.
    try { process.kill(-server.pid, 'SIGTERM'); } catch {}
  };

  /** Give the server a moment to actually die before this process exits. */
  const stopAndWait = async () => {
    stop();
    for (let i = 0; i < 20; i++) {
      try {
        process.kill(server.pid, 0); // throws once the process is gone
      } catch {
        return;
      }
      await new Promise((r) => setTimeout(r, 100));
    }
    try { process.kill(-server.pid, 'SIGKILL'); } catch {}
  };
  process.on('exit', stop);
  process.on('SIGINT', () => { stop(); process.exit(130); });
  process.on('SIGTERM', () => { stop(); process.exit(143); });

  if (!(await waitForServer())) {
    console.error(`server never came up on ${BASE}`);
    await stopAndWait();
    process.exit(1);
  }

  try {
    const sheets = await assertStyled();
    console.log(`preflight: ${BASE} serving ${sheets.length} stylesheet(s), all resolvable`);
  } catch (err) {
    console.error(`\npreflight FAILED: ${err.message}\n`);
    await stopAndWait();
    process.exit(1);
  }

  let failed = 0;
  for (const [name, blurb] of CHECKS) {
    console.log(`\n${'─'.repeat(72)}\n${name}  —  ${blurb}\n${'─'.repeat(72)}`);
    const r = spawnSync(process.execPath, [path.join(__dirname, `${name}.cjs`)], {
      stdio: 'inherit',
      env: { ...process.env, AUDIT_BASE: BASE },
    });
    if (r.status !== 0) failed++;
  }

  await stopAndWait();
  console.log(`\n${failed ? `${failed} check(s) reported failures` : 'all checks clean'}`);
  process.exit(failed ? 1 : 0);
})();
