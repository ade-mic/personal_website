'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getBlogPost } from '@/lib/blogService';
import { BlogPost } from '@/types/blog';
import styles from './page.module.css';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (params.id) {
        const fetchedPost = await getBlogPost(params.id as string);
        if (fetchedPost && fetchedPost.published) {
          setPost(fetchedPost);
        }
        setLoading(false);
      }
    }
    fetchPost();
  }, [params.id]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist or hasn't been published yet.</p>
          <Link href="/#blog" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <Link href="/#blog" className={styles.backLink}>
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>
              <Tag size={16} />
              {post.category}
            </span>
            <span className={styles.date}>
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <div className={styles.author}>By {post.author}</div>
        </header>

        <div className={styles.content}>
          {post.content.split('\n').map((paragraph, index) => (
            paragraph.trim() && <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
