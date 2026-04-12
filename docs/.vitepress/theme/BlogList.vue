<script setup lang="ts">
import { data as posts } from './posts.data.ts'
</script>

<template>
  <div class="blog-page">
    <header class="blog-header">
      <h1 class="blog-page-title">全部文章</h1>
      <p class="blog-page-desc">共 {{ posts.length }} 篇</p>
    </header>

    <ul class="post-list">
      <li v-for="post in posts" :key="post.url" class="post-item">
        <a :href="post.url" class="post-item-link">
          <div class="post-item-main">
            <h2 class="post-item-title">{{ post.title }}</h2>
            <p class="post-item-excerpt">{{ post.frontmatter.description || '' }}</p>
          </div>
          <div class="post-item-meta">
            <span class="post-item-tag">{{ post.frontmatter.tag }}</span>
            <time class="post-item-date">{{ post.date }}</time>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.blog-page {
  max-width: 720px;
  margin: 0 auto;
  padding-top: 24px;
}

.blog-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--blog-border);
}

.blog-page-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--blog-text-1);
  margin: 0 0 6px;
  letter-spacing: -0.02em;
}

.blog-page-desc {
  font-size: 0.9rem;
  color: var(--blog-text-3);
  margin: 0;
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  border-bottom: 1px solid var(--blog-border);
}

.post-item:last-child {
  border-bottom: none;
}

.post-item-link {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0;
  text-decoration: none;
  transition: opacity 0.15s;
}

.post-item-link:hover {
  opacity: 0.75;
}

.post-item-main {
  flex: 1;
  min-width: 0;
}

.post-item-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--blog-text-1);
  margin: 0 0 4px;
  line-height: 1.5;
}

.post-item-excerpt {
  font-size: 0.85rem;
  color: var(--blog-text-3);
  margin: 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.post-item-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
  padding-top: 2px;
}

.post-item-tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 4px;
  background: var(--blog-tag-bg);
  color: var(--blog-tag-color);
  white-space: nowrap;
}

.post-item-date {
  font-size: 0.8rem;
  color: var(--blog-text-4);
  white-space: nowrap;
}

@media (max-width: 640px) {
  .post-item-link {
    flex-direction: column;
    gap: 8px;
  }
  .post-item-meta {
    flex-direction: row;
    align-items: center;
  }
}
</style>
