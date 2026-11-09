# 立洪環球貿易有限公司

英文珠宝贸易展示网站，包含黄金饰品、钻石、高级珠宝图库、品牌礼盒、工艺示意和询盘草稿。

## 本地预览

需要 Node.js 22 或以上。

```sh
npm ci
npm run dev
```

打开 http://127.0.0.1:3048/。运行 `npm run build` 生成静态网站。

## GitHub 与 Vercel

1. 解压 ZIP，将内容上传到 GitHub 仓库根目录，让 `package.json` 与 `app/` 同级。
2. 在 Vercel 导入仓库，框架选择 Next.js，使用默认构建设置。
3. 在 Vercel 绑定 `lihongjewelry.com`。网站已使用 `https://lihongjewelry.com` 作为 canonical 和 sitemap 的默认域名，生产部署允许抓取。如果以后更改主域名，可通过 `SITE_URL` 覆盖。
4. 询盘邮箱默认为 `contact@lihongjewelry.com`。更新联系方式时，在 Vercel 设置 `CONTACT_EMAIL`、`CONTACT_PHONE` 或 `CONTACT_WHATSAPP`，然后重新部署。电话用国际格式，WhatsApp 用国家或地区区号加号码。

确认正式电话号码后，设置 `CONTACT_PHONE` 即可替换目前仅显示的香港预留号。邮箱收信由邮箱服务商配置，网站可打开访客的邮件应用。

图库内容和款式参考编号在 `lib/collections.ts`。买家可从单款进入询盘，自动带入分类与参考编号，再打开邮件草稿、复制或下载。礼盒和工艺图片在 `app/craft-and-packaging/page.tsx` 中引用。查看 [图像制作记录](docs/IMAGERY.md)。
