<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import HomeLayout from './HomeLayout.vue'
import BlogList from './BlogList.vue'
import { useData, useRoute } from 'vitepress'
import { computed, watch, onMounted } from 'vue'

const { frontmatter, isDark } = useData()
const route = useRoute()

const isHome = computed(() => route.path === '/')
const isBlogArticle = computed(() => route.path.startsWith('/blog/') && frontmatter.value.title && !frontmatter.value.blogList)
const isBlogList = computed(() => frontmatter.value.blogList)

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}

// 确保 html.dark class 同步
function syncDarkClass(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
}
onMounted(() => syncDarkClass(isDark.value))
watch(isDark, syncDarkClass)
</script>

<template>
  <HomeLayout v-if="isHome" />

  <div v-else class="site">
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo">莉莉丝不是大佬的博客</a>
        <div class="nav-links">
          <a href="/">首页</a>
          <a href="/blog">文章</a>
          <a href="https://github.com/lilianhua" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <button class="theme-toggle" @click="isDark = !isDark" :title="isDark ? '切换到亮色' : '切换到暗色'">
            <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <article v-if="isBlogArticle" class="article">
      <header class="article-header">
        <a href="/blog" class="back-link">&larr; 返回文章列表</a>
        <h1 class="article-title">{{ frontmatter.title }}</h1>
        <div class="article-meta">
          <time v-if="frontmatter.date">{{ formatDate(frontmatter.date) }}</time>
          <span v-if="frontmatter.tag" class="article-tag">{{ frontmatter.tag }}</span>
        </div>
      </header>
      <div class="article-body">
        <Content />
      </div>
    </article>

    <main v-else-if="isBlogList" class="site-content">
      <BlogList />
    </main>

    <main v-else class="site-content">
      <Content />
    </main>

    <footer class="site-footer">
      <span>© 2025 莉莉丝不是大佬</span>
      <span class="footer-sep">·</span>
      <span>Powered by VitePress</span>
    </footer>
  </div>
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--blog-bg-nav);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--blog-border);
}

.nav-inner {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--blog-text-1);
  text-decoration: none;
  letter-spacing: -0.01em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-links a {
  font-size: 0.88rem;
  color: var(--blog-text-3);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--blog-text-1);
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--blog-text-3);
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: all 0.2s;
}

.theme-toggle:hover {
  color: var(--blog-text-1);
  background: var(--blog-border);
}

.article {
  max-width: 740px;
  margin: 0 auto;
  padding: 0 24px 80px;
}

.article-header {
  padding-top: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--blog-border);
  padding-bottom: 28px;
}

.back-link {
  display: inline-block;
  font-size: 0.82rem;
  color: var(--blog-text-3);
  text-decoration: none;
  margin-bottom: 24px;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--blog-brand);
}

.article-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--blog-text-1);
  margin: 0 0 14px;
  letter-spacing: -0.03em;
  line-height: 1.3;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.82rem;
  color: var(--blog-text-3);
}

.article-tag {
  display: inline-block;
  padding: 1px 8px;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 500;
  background: var(--blog-tag-bg);
  color: var(--blog-tag-color);
}

.site-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px 60px;
  min-height: calc(100vh - 56px - 52px);
}

.site-footer {
  text-align: center;
  padding: 16px 24px;
  font-size: 0.8rem;
  color: var(--blog-text-4);
  border-top: 1px solid var(--blog-border);
}

.footer-sep {
  margin: 0 8px;
}

@media (max-width: 640px) {
  .nav-logo {
    font-size: 0.85rem;
  }
  .nav-links {
    gap: 14px;
  }
  .nav-links a {
    font-size: 0.82rem;
  }
  .article {
    padding: 0 20px 60px;
  }
  .article-title {
    font-size: 1.6rem;
  }
  .site-content {
    padding: 28px 20px 48px;
  }
}
</style>
