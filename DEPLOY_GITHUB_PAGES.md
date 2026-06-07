# GitHub Pages 部署教學

呢份係畀老闆睇嘅部署流程，用廣東話講清楚點樣由零上線。

## 1. 點樣開 GitHub repo

1. 登入 GitHub。
2. 右上角撳 `+`，揀 `New repository`。
3. Repository name 可以用英文，例如 `moving-company-website`。
4. 建議先揀 `Private` 或 `Public` 都可以；GitHub Pages 公開網站最後會公開見到。
5. 建立 repo。

## 2. 點樣 push code

如果你用 Codex 或工程師處理，通常會做：

```bash
git init
git add .
git commit -m "Create Astro GitHub Pages moving company website"
git branch -M main
git remote add origin https://github.com/<github-username>/<repo-name>.git
git push -u origin main
```

如果本機已經係 GitHub repo，就只需要：

```bash
git add .
git commit -m "Update website"
git push
```

## 3. 點樣開啟 GitHub Pages

1. 入 GitHub repo。
2. 撳 `Settings`。
3. 左邊揀 `Pages`。
4. `Build and deployment` 入面，Source 揀 `GitHub Actions`。
5. 儲存。

## 4. Source 點揀 GitHub Actions

因為我哋已經建立咗：

```txt
.github/workflows/deploy-github-pages.yml
```

GitHub 會自動跟呢個 workflow 去 build 同部署。

## 5. Build command 係咩

Build command 係：

```bash
npm run build
```

實際上 GitHub Actions 會先跑：

```bash
npm ci
npm test
npm run build
```

## 6. Output folder 係咩

Astro build 完會輸出去：

```txt
dist
```

GitHub Pages workflow 會 upload `./dist`。

## 7. 點樣睇部署成功網址

1. 入 repo 的 `Actions`。
2. 睇最新一次 `Deploy to GitHub Pages`。
3. 如果見到綠色 tick，即係部署成功。
4. 入 `Settings` → `Pages`，GitHub 會顯示網站網址。

免費測試網址格式通常係：

```txt
https://<github-username>.github.io/<repo-name>/
```

## 8. 點樣 rollback

最快 rollback 方法：

1. 入 GitHub repo。
2. 找返之前正常嘅 commit。
3. 用 GitHub 網頁或者工程師幫你 revert。
4. Revert 後 push 去 `main`。
5. GitHub Actions 會自動重新部署舊版本。

老闆角度：如果改完網站出事，唔使驚，GitHub 可以退返之前版本。
