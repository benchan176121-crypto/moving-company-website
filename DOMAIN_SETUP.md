# 自訂域名設定教學

呢份用廣東話講清楚點樣將 GitHub Pages 網站接去自己 domain。

## 先改 CNAME

專案入面有：

```txt
public/CNAME
```

目前內容係 placeholder：

```txt
www.your-domain.com
```

到你有正式 domain，就改成例如：

```txt
www.fastmoving.com.hk
```

## 情況 A：我買咗 domain

去你買 domain 嘅公司，例如 GoDaddy、Namecheap、阿里雲、騰訊雲、Cloudflare Registrar，搵 DNS 設定。

如果你用 `www` 做主網站，建議設定：

```txt
Type: CNAME
Name: www
Value: <github-username>.github.io
```

例子：

```txt
CNAME：www → ben123.github.io
```

然後 GitHub repo 入面：

1. 去 `Settings`。
2. 入 `Pages`。
3. Custom domain 填你嘅網址，例如 `www.fastmoving.com.hk`。
4. 等 GitHub 檢查 DNS。
5. 勾選 `Enforce HTTPS`。

### 如果你想用 root domain

Root domain 即係：

```txt
your-domain.com
```

唔係：

```txt
www.your-domain.com
```

Root domain 通常要設定 A record 指向 GitHub Pages 官方 IP。GitHub 官方 IP 可能會更新，所以正式設定前最好睇 GitHub Pages 官方文件。

老闆建議：第一階段先用 `www` 作為主網站，最簡單、最少錯。

## 情況 B：我未買 domain

搬屋公司正式網站可以考慮：

- `.com.hk`：香港公司感覺最正式，適合做正規公司形象
- `.hk`：短身、本地感強，容易記
- `.com`：國際化、最常見，但好名可能已經俾人註冊

正式公司網站優先考慮：

```txt
www.公司英文名.com.hk
```

或者：

```txt
www.公司英文名.hk
```

揀 domain 時，英文名最好短、易串、易讀。例如公司英文名未定，可以先諗 3 至 5 個選擇再查有冇人註冊。

## 情況 C：只用免費網址

如果暫時唔買 domain，可以先用 GitHub Pages 免費網址：

```txt
https://<github-username>.github.io/<repo-name>/
```

例如：

```txt
https://ben123.github.io/moving-company-website/
```

呢個適合做測試版、畀朋友或客戶預覽。等網站內容確認好，再買正式 domain。

## GitHub Pages base path 提醒

免費網址通常有 repo name，例如 `/moving-company-website/`。呢個專案已經自動處理 GitHub Actions 入面嘅 repo base path。

如果日後改用正式 custom domain，而且網站係放喺 domain root，例如 `https://www.fastmoving.com.hk/`，可以叫 Codex 幫你檢查 `astro.config.mjs` 同 workflow，將 `ASTRO_BASE` 設成 `/`。
