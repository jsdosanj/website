import { getLiveStats, relativeFromNow } from '@/data/live';

/**
 * Real, live numbers from the owner's actual public artifacts — GitHub, PyPI,
 * HuggingFace (see data/live.ts). Every field is optional and simply omitted if
 * that source didn't answer; nothing here is ever fabricated, and if no source
 * answers at all the panel is replaced by an honest one-liner rather than a
 * table of em dashes.
 */
export default async function LabStatus() {
  const stats = await getLiveStats();

  const rows = [
    {
      name: 'gurmukhifix',
      kind: 'PyPI package',
      version: stats.packages.gurmukhifix?.version,
      pushedAt: stats.repos.gurmukhifix?.pushedAt,
      stars: stats.repos.gurmukhifix?.stars,
    },
    {
      name: 'cairn-sync',
      kind: 'PyPI package',
      version: stats.packages['cairn-sync']?.version,
      pushedAt: stats.repos.cairn?.pushedAt,
      stars: stats.repos.cairn?.stars,
    },
  ];
  const datasetDownloads = stats.datasets.SikhLibrary?.downloads;
  const live = rows.filter((r) => r.version || r.pushedAt);

  if (live.length === 0 && typeof datasetDownloads !== 'number') {
    return (
      <p className="max-w-2xl mx-auto text-center type-subhead text-ink-500">
        Live release data is temporarily unavailable — see the source links on each card below.
      </p>
    );
  }

  return (
    <div className="card max-w-2xl mx-auto overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-navy-800/10 bg-paper-200/60">
        <p className="font-display type-subhead font-semibold text-navy-900">Live from the lab</p>
        <span className="chip chip-active">fetched live</span>
      </div>

      {/* Four columns of monospace do not fit a phone at 200% text, and the
          card clips its overflow — so the table gets its own scroll container,
          the same treatment the case-study tables use. */}
      {live.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <caption className="sr-only">Published packages, with version and last activity</caption>
            <thead>
              <tr className="type-label text-ink-400">
                <th scope="col" className="font-medium px-5 py-2">Package</th>
                <th scope="col" className="font-medium px-5 py-2">Version</th>
                <th scope="col" className="font-medium px-5 py-2">Last push</th>
                <th scope="col" className="font-medium px-5 py-2 text-right">Stars</th>
              </tr>
            </thead>
            <tbody>
              {live.map((r) => (
                <tr key={r.name} className="border-t border-navy-800/[0.08]">
                  <td className="px-5 py-3">
                    <span className="type-mono font-medium text-navy-900">{r.name}</span>
                    <span className="block type-caption-2 text-ink-500">{r.kind}</span>
                  </td>
                  <td className="px-5 py-3 type-mono text-ink-700">{r.version ? `v${r.version}` : '—'}</td>
                  <td className="px-5 py-3 type-mono text-ink-700">
                    {r.pushedAt ? relativeFromNow(r.pushedAt) : '—'}
                  </td>
                  <td className="px-5 py-3 type-mono text-ink-700 text-right tabular-nums">
                    {typeof r.stars === 'number' ? r.stars : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {typeof datasetDownloads === 'number' && (
        <p className="px-5 py-3.5 border-t border-navy-800/[0.08] type-subhead text-ink-600">
          <span className="mono font-semibold text-navy-900 tabular-nums">
            {datasetDownloads.toLocaleString('en-US')}
          </span>{' '}
          downloads of the Sikh Library dataset on HuggingFace.
        </p>
      )}

      <p className="px-5 py-3 border-t border-navy-800/[0.08] type-caption-2 text-ink-500">
        Fetched from GitHub, PyPI, and HuggingFace on the server and refreshed every few hours —
        not hand-maintained.
      </p>
    </div>
  );
}
