'use client';

import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getPublishedBlogPosts } from '@/lib/blogService';
import { BlogPost } from '@/types/blog';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const posts = await getPublishedBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchBlogPosts();
  }, []);

  // Get unique categories from blog posts
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  if (loading) {
    return <div className={styles.emptyState}>Loading blog posts...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            className={styles.headerLogo}
          />
          <h1 className={styles.pageTitle}>Blog & Insights</h1>
          <p className={styles.pageSubtitle}>
            Exploring the intersection of agricultural research, technology innovation,
            and sustainable development through articles, tutorials, and thought pieces.
          </p>
        </div>
      </header>

      <section className={styles.filterSection}>
        <div className={styles.filterButtons}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterBtn} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Posts' : category}
            </button>
          ))}
        </div>
        <p className={styles.postCount}>
          {filteredPosts.length} {filteredPosts.length === 1 ? 'Post' : 'Posts'}
        </p>
      </section>

      <section className={styles.postsGrid}>
        {filteredPosts.map(post => (
          <article key={post.id} className={styles.postCard}>
            <div className={styles.postMeta}>
              <span className={styles.postDate}>
                <Calendar size={16} />
                {post.date}
              </span>
              <span className={styles.postCategory}>
                <Tag size={16} />
                {post.category}
              </span>
            </div>
            
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            
            <div className={styles.postFooter}>
              <div className={styles.authorInfo}>
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <Link 
                href={`/blog/${post.id}`}
                className={styles.readMoreBtn}
              >
                Read More
                <ExternalLink size={16} />
              </Link>
            </div>
          </article>
        ))}

        {filteredPosts.length === 0 && (
          <div className={styles.emptyState}>
            <p>No blog posts found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}