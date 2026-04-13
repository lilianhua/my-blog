import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/my-blog/',
  title: '莉莉丝不是大佬的博客',
  description: '记录技术与思考',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'author', content: 'lilianhua' }],
  ],

  cleanUrls: true,
  lastUpdated: false,

  themeConfig: {
    sidebar: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lilianhua' },
    ],
    search: {
      provider: 'local',
    },
  },
})
