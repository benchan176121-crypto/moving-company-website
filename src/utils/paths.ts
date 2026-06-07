export function assetPath(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const baseWithSlash = base.endsWith("/") ? base : `${base}/`;
  return `${baseWithSlash}${path.replace(/^\/+/, "")}`;
}
