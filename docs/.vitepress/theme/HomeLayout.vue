<script setup>
import { data as posts } from './posts.data.ts'
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<template>
  <div class="home">
    <!-- 导航 -->
    <nav class="home-nav">
      <div class="nav-inner">
        <span class="nav-logo">莉莉丝不是大佬的博客</span>
        <div class="nav-links">
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

    <!-- Hero -->
    <header class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">Hi, I'm 莉莉丝</h1>
        <p class="hero-desc">一个不是大佬的前端开发者，记录技术与思考</p>
        <div class="hero-links">
          <a href="/blog" class="hero-btn primary">阅读文章</a>
        </div>
      </div>
    </header>

    <!-- Recent Posts -->
    <section class="recent-posts">
      <div class="section-inner">
        <h2 class="section-title">最新文章</h2>
        <div class="post-grid">
          <a
            v-for="post in posts.slice(0, 6)"
            :key="post.url"
            :href="post.url"
            class="post-card"
          >
            <span class="post-tag">{{ post.frontmatter.tag }}</span>
            <h3 class="post-card-title">{{ post.title }}</h3>
            <p class="post-card-excerpt">{{ post.frontmatter.description || '' }}</p>
            <time class="post-date">{{ post.date }}</time>
          </a>
        </div>
        <div class="more-link">
          <a href="/blog">查看全部 &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="home-footer">
      <span>© 2025 莉莉丝不是大佬</span>
      <span class="footer-sep">·</span>
      <span>Powered by VitePress</span>
    </footer>
  </div>
</template>

<style scoped>
.home-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--blog-bg-nav);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
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

.hero {
  padding: 80px 24px 64px;
  text-align: center;
}

.hero-inner {
  max-width: 600px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.6rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--blog-text-1);
  margin: 0 0 10px;
  line-height: 1.2;
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--blog-text-3);
  margin: 0 0 28px;
  line-height: 1.6;
}

.hero-links {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  padding: 9px 24px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  border: 1px solid var(--blog-btn-border);
  color: var(--blog-btn-color);
  background: var(--blog-btn-bg);
}

.hero-btn:hover {
  border-color: var(--blog-btn-hover-border);
  color: var(--blog-btn-hover-color);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.hero-btn.primary {
  background: var(--blog-brand);
  color: var(--blog-bg);
  border-color: var(--blog-brand);
}

.hero-btn.primary:hover {
  background: var(--blog-brand-hover);
  border-color: var(--blog-brand-hover);
}

.section-inner {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--blog-text-1);
  margin: 0 0 24px;
  letter-spacing: -0.01em;
}

.recent-posts {
  padding: 48px 0 64px;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 14px;
}

.post-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--blog-border);
  background: var(--blog-bg);
  text-decoration: none;
  transition: all 0.2s;
}

.post-card:hover {
  border-color: var(--blog-border-hover);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.post-tag {
  display: inline-block;
  width: fit-content;
  padding: 1px 8px;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 500;
  background: var(--blog-tag-bg);
  color: var(--blog-tag-color);
}

.post-card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--blog-text-1);
  margin: 0;
  line-height: 1.5;
}

.post-card-excerpt {
  font-size: 0.82rem;
  color: var(--blog-text-3);
  margin: 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-date {
  font-size: 0.78rem;
  color: var(--blog-text-4);
}

.more-link {
  text-align: center;
  margin-top: 32px;
}

.more-link a {
  color: var(--blog-text-3);
  font-size: 0.88rem;
  text-decoration: none;
  transition: color 0.2s;
}

.more-link a:hover {
  color: var(--blog-brand);
}

.home-footer {
  text-align: center;
  padding: 24px;
  font-size: 0.78rem;
  color: var(--blog-text-4);
}

.footer-sep {
  margin: 0 8px;
}

@media (max-width: 640px) {
  .hero {
    padding: 56px 20px 48px;
  }
  .hero-title {
    font-size: 1.8rem;
  }
  .hero-desc {
    font-size: 1rem;
  }
  .post-grid {
    grid-template-columns: 1fr;
  }
}
</style>
