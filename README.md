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

`npm run dev` 直接读取 `docs/` 并在内存中启动开发服务，不依赖 `docs/.vitepress/dist`。`npm run preview` 用于预览生产构建，因此需要先执行 `npm run build`。

`docs/.vitepress/dist` 是临时构建产物，不提交到 Git；它只会在 GitHub Actions 的线上构建阶段生成。

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
3. 推送到 `main` 分支，Actions 会自动构建并部署。workflow 会通过 `configure-pages` 自动识别站点根路径，无需手动修改 `VITEPRESS_BASE`。
4. 部署完成后，在仓库 Settings → Pages 中查看公网访问地址。

当前仓库预计使用的公网地址为：`https://liu-junchen.github.io/knowledge-base/`。如果仓库可见性和 Pages 设置允许公开访问，任何拥有该地址的人都可以访问知识库。

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
