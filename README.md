# 快靚正搬屋公司 GitHub Pages 網站

呢個係「快靚正搬屋公司 / 貨運公司」一頁式 Landing Page，適合先用 GitHub Pages 免費上線，之後再接正式域名。

## 使用技術

- Astro static site
- Tailwind CSS
- TypeScript
- GitHub Pages
- GitHub Actions 自動部署

## 如何本地測試

```bash
npm install
npm run dev
```

打開終端顯示嘅本地網址，通常係 `http://localhost:4321/`。

正式 build 前可以跑：

```bash
npm test
npm run build
```

## 如何修改文字

主要內容集中喺：

- `src/data/site.ts`：公司名、電話、WhatsApp、SEO、導航
- `src/data/services.ts`：服務、包裝物料、報價流程、存倉、棄置
- `src/data/pricing.ts`：收費參考
- `src/data/faq.ts`：常見問題
- `src/data/checklist.ts`：搬屋 Checklist

老闆最常改嘅電話同 WhatsApp，主要改 `src/data/site.ts` 就得。

## 如何更換圖片

圖片放喺 `public/images/`。你日後有真相，只要用同一個檔名覆蓋就可以：

- `hero-moving-truck.png`
- `service-home-moving.png`
- `service-office-moving.png`
- `service-packing.png`
- `service-storage.png`
- `packing-box.png`
- `packing-bubble-wrap.png`
- `packing-tape.png`
- `booking-whatsapp.png`
- `footer-cta-bg.png`

## 如何部署

1. 將成個專案 push 去 GitHub repo。
2. 去 GitHub repo 的 `Settings`。
3. 入 `Pages`。
4. Source 揀 `GitHub Actions`。
5. 每次 push 去 `main` branch，GitHub Actions 會自動 build 同部署。

詳細步驟睇 `DEPLOY_GITHUB_PAGES.md`。

## 常見問題

### 免費網址會係咩？

如果 repo 叫 `moving-company`，免費測試網址會似：

```txt
https://<github-username>.github.io/moving-company/
```

### 可以接自己域名嗎？

可以。先睇 `DOMAIN_SETUP.md`。正式用 domain 前，叫 Codex 幫你新增 `public/CNAME`，內容填你自己 domain，例如 `www.fastmoving.com.hk`。

### 點解唔用 backend？

第一階段最重要係快、穩、平。搬屋公司網站主要係展示服務同導 WhatsApp 查詢，靜態網站已經足夠。
