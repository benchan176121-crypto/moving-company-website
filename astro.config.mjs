import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const base = process.env.ASTRO_BASE ?? (process.env.GITHUB_ACTIONS && repoName ? `/${repoName}` : "/");

export default defineConfig({
  site: process.env.SITE_URL ?? "https://hkmoving99.com",
  base
});
