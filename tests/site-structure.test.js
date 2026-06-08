const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(filePath) {
  return fs.readFileSync(path.join(root, filePath), "utf8");
}

function exists(filePath) {
  return fs.existsSync(path.join(root, filePath));
}

const requiredFiles = [
  "astro.config.mjs",
  "postcss.config.cjs",
  "tailwind.config.mjs",
  "tsconfig.json",
  ".github/workflows/deploy-github-pages.yml",
  "public/favicon.svg",
  "public/CNAME",
  "public/robots.txt",
  "public/sitemap.xml",
  "src/pages/index.astro",
  "src/styles/global.css",
  "src/data/site.ts",
  "src/data/services.ts",
  "src/data/pricing.ts",
  "src/data/faq.ts",
  "src/data/checklist.ts",
  "README.md",
  "DEPLOY_GITHUB_PAGES.md",
  "DOMAIN_SETUP.md",
  "TODO_FOR_BOSS.md",
];

for (const filePath of requiredFiles) {
  assert.ok(exists(filePath), `${filePath} should exist`);
}

const requiredImages = [
  "hero-moving-truck.png",
  "service-home-moving.png",
  "service-office-moving.png",
  "service-packing.png",
  "service-storage.png",
  "packing-box.png",
  "packing-bubble-wrap.png",
  "packing-tape.png",
  "booking-whatsapp.png",
  "quote-confirm-details.png",
  "quote-initial-estimate.png",
  "service-village-hoisting.png",
  "footer-cta-bg.png",
];

for (const fileName of requiredImages) {
  assert.ok(exists(`public/images/${fileName}`), `public/images/${fileName} should exist`);
}

const packageJson = JSON.parse(read("package.json"));
assert.equal(packageJson.scripts.dev, "astro dev", "dev script should run Astro");
assert.equal(packageJson.scripts.build, "astro build", "build script should run Astro");
assert.equal(packageJson.scripts.preview, "astro preview", "preview script should run Astro");
assert.equal(packageJson.scripts.test, "node tests/site-structure.test.js", "test script should run structure test");
assert.ok(packageJson.dependencies.astro, "Astro dependency should be declared");
assert.ok(packageJson.dependencies.tailwindcss, "Tailwind dependency should be declared");
assert.ok(packageJson.dependencies.postcss, "PostCSS dependency should be declared");
assert.ok(packageJson.dependencies.autoprefixer, "Autoprefixer dependency should be declared");

const workflow = read(".github/workflows/deploy-github-pages.yml");
for (const snippet of [
  "on:",
  "branches: [main]",
  "actions/configure-pages",
  "actions/upload-pages-artifact",
  "actions/deploy-pages",
  "npm ci",
  "npm run build",
  "path: ./dist",
]) {
  assert.ok(workflow.includes(snippet), `workflow should include ${snippet}`);
}
assert.ok(!workflow.includes("NETLIFY"), "workflow should not use Netlify secrets");
assert.ok(!workflow.includes("VERCEL"), "workflow should not use Vercel secrets");
assert.ok(!workflow.includes("CLOUDFLARE"), "workflow should not use Cloudflare secrets");

const siteData = read("src/data/site.ts");
for (const snippet of [
  "快靚正搬屋公司 / 貨運公司",
  "93577729",
  "我喺Google上面見到你,查詢搬屋報價。",
  "https://wa.me/85293577729?text=",
  "tel:93577729",
  "快靚正搬屋公司｜香港搬屋、搬運、傢俬拆裝、存倉服務",
  "快靚正搬屋公司提供香港住宅搬屋、村屋吊運、寫字樓搬遷、傢俬拆裝、包裝物料、棄置傢俬及存倉服務。",
  "https://hkmoving99.com/",
  "香港搬屋",
  "村屋吊運",
  "快靚正搬屋公司搬屋貨車及香港搬運服務",
  "村屋吊運 / 大型傢俬上落",
  "MovingCompany",
  "WebSite",
  "FAQPage",
  "ContactPoint",
]) {
  assert.ok(siteData.includes(snippet), `site data should include ${snippet}`);
}

const page = read("src/pages/index.astro");
for (const snippet of [
  "Header",
  "Hero",
  "服務快捷入口",
  "關於我們",
  "搬屋服務已包括",
  "包裝物料",
  "WhatsApp / 網上報價流程",
  "收費參考",
  "存倉服務",
  "棄置傢俬服務",
  "搬屋 Checklist",
  "FAQ",
  "FloatingActions",
  "application/ld+json",
  "structuredData",
  "og:site_name",
  "og:image:alt",
  "twitter:title",
  "twitter:description",
  "twitter:image",
]) {
  assert.ok(page.includes(snippet), `index.astro should include ${snippet}`);
}
assert.ok(
  page.indexOf("<QuickServices />") < page.indexOf("<QuoteProcess />"),
  "quote process should appear after quick services"
);
assert.ok(
  page.indexOf("<FaqSection />") < page.indexOf("<About />"),
  "about section should appear after FAQ"
);

const servicesData = read("src/data/services.ts");
assert.ok(servicesData.indexOf('title: "村屋吊運"') < servicesData.indexOf('title: "住宅搬屋"'), "village hoisting should be the first quick service");
for (const snippet of [
  'title: "村屋吊運"',
  'image: "/images/service-village-hoisting.png"',
  "村屋吊運、大型傢俬上落",
  'title: "WhatsApp 傳相"',
  'image: "/images/booking-whatsapp.png"',
  'title: "確認資料"',
  'image: "/images/quote-confirm-details.png"',
  'title: "初步報價"',
  'image: "/images/quote-initial-estimate.png"',
]) {
  assert.ok(servicesData.includes(snippet), `quote process should include ${snippet}`);
}
assert.ok(!servicesData.includes("serviceGalleryImages"), "services data should not include removed service gallery data");
assert.ok(!exists("src/components/ServiceGallery.astro"), "removed service gallery component should not exist");
assert.ok(!page.includes("ServiceGallery"), "index.astro should not import or render ServiceGallery");
assert.ok(!page.includes("服務圖片總覽"), "index.astro should not include service gallery label");

const aboutComponent = read("src/components/About.astro");
for (const snippet of ["老闆角度重點", "網站唔只靚，最緊要幫你接查詢"]) {
  assert.ok(!aboutComponent.includes(snippet), `About.astro should not include ${snippet}`);
}

for (const filePath of [
  "src/components/QuickServices.astro",
  "src/components/PackingGrid.astro",
  "src/components/QuoteProcess.astro",
  "src/components/StorageSection.astro",
]) {
  const content = read(filePath);
  assert.ok(content.includes("object-contain"), `${filePath} should show content images in full proportion`);
  assert.ok(!content.includes("object-cover"), `${filePath} should not crop content images`);
}

const quickServicesComponent = read("src/components/QuickServices.astro");
assert.ok(quickServicesComponent.includes("md:col-span-2"), "featured quick service should be wider on tablet");
assert.ok(quickServicesComponent.includes("lg:col-span-2"), "featured quick service should be wider on desktop");

for (const filePath of ["README.md", "DEPLOY_GITHUB_PAGES.md", "DOMAIN_SETUP.md", "TODO_FOR_BOSS.md"]) {
  const content = read(filePath);
  assert.ok(content.includes("GitHub Pages"), `${filePath} should explain GitHub Pages`);
  assert.ok(content.includes("廣東話") || content.includes("老闆") || content.includes("快靚正"), `${filePath} should be written for the boss`);
}

const domainDoc = read("DOMAIN_SETUP.md");
for (const snippet of [
  "public/CNAME",
  "CNAME",
  "<github-username>.github.io",
  "A record",
  ".com.hk",
  ".hk",
  ".com",
  "https://<github-username>.github.io/<repo-name>/",
]) {
  assert.ok(domainDoc.includes(snippet), `DOMAIN_SETUP.md should include ${snippet}`);
}

const cname = read("public/CNAME").trim();
assert.equal(cname, "hkmoving99.com", "CNAME should use the formal custom domain");

const robots = read("public/robots.txt");
for (const snippet of [
  "User-agent: *",
  "Allow: /",
  "Sitemap: https://hkmoving99.com/sitemap.xml",
]) {
  assert.ok(robots.includes(snippet), `robots.txt should include ${snippet}`);
}

const sitemap = read("public/sitemap.xml");
for (const snippet of [
  "<urlset",
  "<loc>https://hkmoving99.com/</loc>",
  "<changefreq>weekly</changefreq>",
  "<priority>1.0</priority>",
]) {
  assert.ok(sitemap.includes(snippet), `sitemap.xml should include ${snippet}`);
}

const astroConfig = read("astro.config.mjs");
assert.ok(
  astroConfig.includes("https://hkmoving99.com"),
  "Astro config should default to the live GitHub Pages URL"
);
