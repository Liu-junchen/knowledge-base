import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vitepress'

type SidebarItem = {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

// VitePress bundles this config before loading it. process.cwd() remains the
// project directory and works consistently on Windows and POSIX systems.
const docsRoot = path.resolve(process.cwd(), 'docs')
const ignoredNames = new Set(['.vitepress', 'node_modules'])
const topLevelOrder = new Map([
  ['learning-path', 0],
  ['frontend', 1],
  ['nodejs', 2],
  ['architecture', 3],
  ['iot', 4],
  ['ai', 5],
  ['blog', 6],
  ['projects', 7]
])
const topLevelTitles = new Map([
  ['learning-path', '技术学习路线'],
  ['frontend', '前端'],
  ['nodejs', 'Node.js 服务端'],
  ['architecture', '软件架构'],
  ['iot', '物联网'],
  ['ai', '人工智能'],
  ['blog', '博客'],
  ['projects', '项目']
])

function stripOrderPrefix(value: string): string {
  return value.replace(/^\d+[-_ ]*/, '')
}

function titleFromName(value: string): string {
  const withoutExtension = value.replace(/\.md$/i, '')
  const readable = stripOrderPrefix(withoutExtension).replace(/[-_]+/g, ' ').trim()
  return readable.replace(/\b\w/g, (letter) => letter.toUpperCase()) || 'Untitled'
}

function titleFromMarkdown(filePath: string): string | undefined {
  const content = fs.readFileSync(filePath, 'utf8')
  const frontmatter = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/)
  const title = frontmatter?.[1].match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1]
  return title?.trim() || undefined
}

function displayName(fileOrDirectory: string, filePath?: string): string {
  if (filePath) return titleFromMarkdown(filePath) || titleFromName(fileOrDirectory)
  return titleFromName(fileOrDirectory)
}

function naturalSort(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
}

function toUrl(relativePath: string): string {
  const normalized = relativePath.split(path.sep).join('/')
  return `/${normalized.replace(/\.md$/i, '').replace(/\/index$/i, '/')}`
}

function buildItems(directory: string, relativeDirectory = ''): SidebarItem[] {
  const entries = fs.readdirSync(directory, { withFileTypes: true })
    .filter((entry) => !ignoredNames.has(entry.name) && !entry.name.startsWith('.'))
    .sort((a, b) => {
      if (relativeDirectory === '') {
        const orderA = topLevelOrder.get(a.name) ?? Number.MAX_SAFE_INTEGER
        const orderB = topLevelOrder.get(b.name) ?? Number.MAX_SAFE_INTEGER
        if (orderA !== orderB) return orderA - orderB
      }
      return naturalSort(a.name, b.name)
    })

  return entries.flatMap((entry) => {
    const absolutePath = path.join(directory, entry.name)
    const relativePath = path.join(relativeDirectory, entry.name)

    if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      if (entry.name.toLowerCase() === 'index.md') return []
      return [{ text: displayName(entry.name, absolutePath), link: toUrl(relativePath) }]
    }

    if (!entry.isDirectory()) return []
    const indexPath = path.join(absolutePath, 'index.md')
    const hasIndex = fs.existsSync(indexPath)
    const children = buildItems(absolutePath, relativePath)
    if (!hasIndex && children.length === 0) return []

    return [{
      text: hasIndex
        ? (relativeDirectory === ''
            ? topLevelTitles.get(entry.name) || displayName(entry.name, indexPath)
            : displayName(entry.name, indexPath))
        : displayName(entry.name),
      ...(hasIndex ? { link: toUrl(path.join(relativePath, 'index.md')) } : {}),
      ...(children.length ? { items: children } : {}),
      ...(children.length ? { collapsed: false } : {})
    }]
  })
}

const sidebar = buildItems(docsRoot)
const base = process.env.VITEPRESS_BASE || '/'

export default defineConfig({
  title: '阿白的个人知识库',
  description: '一个长期维护的个人技术知识库与 Digital Garden',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    // 知识边界已经由自动 Sidebar 表达，顶部不再重复展示分类入口。
    nav: [],
    sidebar,
    search: { provider: 'local' },
    outline: 'deep',
    docFooter: {
      prev: false,
      next: false
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Liu-junchen/knowledge-base' }],
    footer: {
      message: 'Markdown First · 持续积累，长期维护',
      copyright: 'Copyright © 2026 阿白'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
