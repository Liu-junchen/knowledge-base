# 阿白的个人知识库

这是一个基于 VitePress 的个人技术知识库（Digital Garden）。Markdown 是唯一的数据源，目录结构会自动生成侧边栏。

## 启动

```bash
npm install
npm run dev
```

常用命令：

```bash
npm run build
npm run preview
```

## 新增知识

直接在 `docs/` 下创建 Markdown 文件，例如：

```text
docs/nodejs/01-testing/03-mock.md
```

可以写 frontmatter：

```md
---
title: Mock
---
```

也可以只写普通 Markdown。文件名开头的 `01-`、`02-` 用于排序，展示时会自动去掉；有 `title` 时优先使用 `title`。

不需要修改 sidebar、nav 或 TypeScript 配置。

## 发布到 GitHub Pages

1. 将仓库推送到 GitHub。
2. 在仓库 Settings → Pages → Build and deployment 中选择 **GitHub Actions**。
3. 修改 `.github/workflows/deploy.yml` 中的 `VITEPRESS_BASE`：如果仓库地址是 `https://用户名.github.io/仓库名/`，填写 `/仓库名/`；如果使用用户站点仓库 `用户名.github.io`，保持 `/`。
4. 推送到 `main` 分支，Actions 会自动构建并部署。

未来配置自定义域名时，在 GitHub Pages 设置中填写域名，并在 DNS 中添加 GitHub 要求的记录；如需把域名配置纳入版本控制，可在 `docs/public/` 中添加 `CNAME` 文件。

## 目录说明

- `docs/`：日常主要维护的 Markdown 知识内容。
- `docs/.vitepress/config.ts`：站点系统配置和自动 Sidebar 实现，通常不需要修改。
- `docs/.vitepress/theme/`：主题样式入口，通常不需要修改。
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署配置，通常不需要修改。
- `package.json`：开发命令和依赖配置。

## 日常发布

```bash
git add .
git commit -m "docs: add nodejs unit testing"
git push
```
