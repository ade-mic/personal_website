'use client';

import { useState, useEffect } from 'react';
import { getPublishedBlogPosts } from '@/lib/blogService';
import { BlogPost } from '@/types/blog';
import styles from './BlogSection.module.css';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const publishedPosts = await getPublishedBlogPosts();
      setPosts(publishedPosts.slice(0, 3)); // Get only the 3 most recent posts
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className={styles.section} id="blog">
        <h2 className={styles.sectionTitle}>Blog & Insights</h2>
        <p className={styles.blogIntro}>
          Thoughts on software engineering, research, and the intersection of technology and agriculture
        </p>
        <div className={styles.loadingContainer}>
          <p>Loading posts...</p>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className={styles.section} id="blog">
        <h2 className={styles.sectionTitle}>Blog & Insights</h2>
        <p className={styles.blogIntro}>
          Thoughts on software engineering, research, and the intersection of technology and agriculture
        </p>
        <div className={styles.blogGrid}>
          <div className={styles.blogCard}>
            <div className={styles.blogMeta}>
              <span className={styles.blogDate}>Coming Soon</span>
              <span className={styles.blogCategory}>Research</span>
            </div>
            <h3 className={styles.blogTitle}>
              From Lab to Field: Applying FEM to Real-World Agriculture
            </h3>
            <p className={styles.blogExcerpt}>
              Exploring how finite element modeling can transform postharvest management and reduce food waste...
            </p>
          </div>

          <div className={styles.blogCard}>
            <div className={styles.blogMeta}>
              <span className={styles.blogDate}>Coming Soon</span>
              <span className={styles.blogCategory}>Software</span>
            </div>
            <h3 className={styles.blogTitle}>
              Building AI Solutions: Lessons from myInterviewerAI
            </h3>
            <p className={styles.blogExcerpt}>
              Key technical decisions and architectural patterns for creating production-ready AI applications...
            </p>
          </div>

          <div className={styles.blogCard}>
            <div className={styles.blogMeta}>
              <span className={styles.blogDate}>Coming Soon</span>
              <span className={styles.blogCategory}>Innovation</span>
            </div>
            <h3 className={styles.blogTitle}>
              Bridging Academia and Industry: A Developer's Journey
            </h3>
            <p className={styles.blogExcerpt}>
              Navigating the worlds of PhD research and full-stack development simultaneously...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="blog">
      <h2 className={styles.sectionTitle}>Blog & Insights</h2>
      <p className={styles.blogIntro}>
        Thoughts on software engineering, research, and the intersection of technology and agriculture
      </p>
      <div className={styles.blogGrid}>
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className={styles.blogCard}>
            <div className={styles.blogMeta}>
              <span className={styles.blogDate}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </span>
              <span className={styles.blogCategory}>{post.category}</span>
            </div>
            <h3 className={styles.blogTitle}>{post.title}</h3>
            <p className={styles.blogExcerpt}>{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <div className={styles.viewAllContainer}>
        <Link href="/blog" className={styles.viewAllBtn}>
          View All Blog Posts
          <ArrowRight className={styles.arrowIcon} />
        </Link>
      </div>
    </section>
  );
}
