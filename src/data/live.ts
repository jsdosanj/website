// Build-time fetchers for real, publicly-verifiable numbers from this
// site owner's actual public artifacts — GitHub, PyPI, HuggingFace. This is
// a static site with no server runtime, so these run once per build and the
// result is baked into the HTML. Every fetch is short-timeout and
// try/caught: a network hiccup during build must never fail the build, and
// a missing stat is simply omitted rather than shown as a fabricated or
// stale-looking placeholder.
const TIMEOUT_MS = 5000;

async function fetchJson<T>(url: string, headers?: Record<string, string>): Promise<T | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { headers, signal: controller.signal });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export type RepoStats = { stars: number; pushedAt: string } | null;
export type PackageStats = { version: string } | null;
export type DatasetStats = { downloads: number } | null;

export type LiveStats = {
  repos: Record<string, RepoStats>;
  packages: Record<string, PackageStats>;
  datasets: Record<string, DatasetStats>;
};

async function fetchRepo(fullName: string): Promise<RepoStats> {
  const data = await fetchJson<{ stargazers_count?: number; pushed_at?: string }>(
    `https://api.github.com/repos/${fullName}`,
    { 'User-Agent': 'dosanjh-labs-site-build', Accept: 'application/vnd.github+json' }
  );
  if (!data || typeof data.stargazers_count !== 'number' || !data.pushed_at) return null;
  return { stars: data.stargazers_count, pushedAt: data.pushed_at };
}

async function fetchPackage(name: string): Promise<PackageStats> {
  const data = await fetchJson<{ info?: { version?: string } }>(`https://pypi.org/pypi/${name}/json`);
  if (!data?.info?.version) return null;
  return { version: data.info.version };
}

async function fetchDataset(id: string): Promise<DatasetStats> {
  const data = await fetchJson<{ downloads?: number }>(`https://huggingface.co/api/datasets/${id}`);
  if (typeof data?.downloads !== 'number') return null;
  return { downloads: data.downloads };
}

let cached: Promise<LiveStats> | null = null;

/** Memoized across the whole build — every caller shares one round of fetches. */
export function getLiveStats(): Promise<LiveStats> {
  if (!cached) {
    cached = (async () => {
      const [gurmukhifixRepo, cairnRepo, gurmukhifixPkg, cairnPkg, sikhLibrary] = await Promise.all([
        fetchRepo('jsdosanj/gurmukhifix'),
        fetchRepo('jsdosanj/cairn'),
        fetchPackage('gurmukhifix'),
        fetchPackage('cairn-sync'),
        fetchDataset('jsdosanj/SikhLibrary'),
      ]);
      return {
        repos: { gurmukhifix: gurmukhifixRepo, cairn: cairnRepo },
        packages: { gurmukhifix: gurmukhifixPkg, 'cairn-sync': cairnPkg },
        datasets: { SikhLibrary: sikhLibrary },
      };
    })();
  }
  return cached;
}

export function relativeFromNow(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return iso;
  const days = Math.max(0, Math.floor((Date.now() - then) / 86_400_000));
  if (days === 0) return 'today';
  if (days === 1) return '1d ago';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}
