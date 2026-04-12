import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/**/*.md', {
  transform(rawData) {
    return rawData
      .filter(({ frontmatter, url }) => {
        // 过滤掉没有 title 的（如 index.md 列表页）
        if (!frontmatter.title) return false
        // 过滤掉草稿文章
        if (frontmatter.draft) return false
        // 过滤掉 blog/index.md 列表页本身
        if (url.endsWith('/blog/')) return false
        return true
      })
      .map(({ url, frontmatter }) => ({
        url,
        title: frontmatter.title,
        date: frontmatter.date,
        frontmatter,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  },
})
