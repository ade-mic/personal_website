'use client';

import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { 
  getAllBlogPosts, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost 
} from '@/lib/blogService';
import { BlogPost } from '@/types/blog';
import styles from './page.module.css';
import { Trash2, Edit, Plus, LogOut, Eye, EyeOff } from 'lucide-react';

export default function BlogAdminPage() {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Research');
  const [published, setPublished] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchPosts();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const allPosts = await getAllBlogPosts();
    setPosts(allPosts);
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
    } catch (error: any) {
      alert('Login failed: ' + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !excerpt || !content) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);

    const postData = {
      title,
      excerpt,
      content,
      category,
      published,
      date: new Date().toISOString(),
      author: 'Ademola Aina',
    };

    if (editingPost?.id) {
      // Update existing post
      const result = await updateBlogPost(editingPost.id, postData);
      if (result.success) {
        alert('Post updated successfully!');
        resetForm();
        fetchPosts();
      } else {
        alert('Failed to update post');
      }
    } else {
      // Create new post
      const result = await createBlogPost(postData);
      if (result.success) {
        alert('Post created successfully!');
        resetForm();
        fetchPosts();
      } else {
        alert('Failed to create post');
      }
    }

    setLoading(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setCategory(post.category);
    setPublished(post.published);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    setLoading(true);
    const result = await deleteBlogPost(id);
    if (result.success) {
      alert('Post deleted successfully!');
      fetchPosts();
    } else {
      alert('Failed to delete post');
    }
    setLoading(false);
  };

  const resetForm = () => {
    setTitle('');
    setExcerpt('');
    setContent('');
    setCategory('Research');
    setPublished(false);
    setEditingPost(null);
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h1 className={styles.loginTitle}>Blog Admin Login</h1>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      <header className={styles.adminHeader}>
        <h1>Blog Admin Dashboard</h1>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          <LogOut size={18} />
          Logout
        </button>
      </header>

      <div className={styles.adminContent}>
        {/* Blog Post Form */}
        <section className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2>{isEditing ? 'Edit Post' : 'Create New Post'}</h2>
            {isEditing && (
              <button onClick={resetForm} className={styles.cancelBtn}>
                Cancel Edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className={styles.postForm}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Title *</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className={styles.input}
                placeholder="Enter post title"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={styles.select}
              >
                <option value="Research">Research</option>
                <option value="Software">Software</option>
                <option value="Innovation">Innovation</option>
                <option value="Agriculture">Agriculture</option>
                <option value="AI/ML">AI/ML</option>
                <option value="Tutorial">Tutorial</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="excerpt">Excerpt *</label>
              <textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                required
                className={styles.textarea}
                rows={3}
                placeholder="Brief description (shown on blog cards)"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="content">Content *</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className={styles.textarea}
                rows={15}
                placeholder="Full blog post content (supports markdown)"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxText}>
                  {published ? <Eye size={18} /> : <EyeOff size={18} />}
                  {published ? 'Published (visible to public)' : 'Draft (not visible to public)'}
                </span>
              </label>
            </div>

            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? 'Saving...' : (isEditing ? 'Update Post' : 'Create Post')}
            </button>
          </form>
        </section>

        {/* Blog Posts List */}
        <section className={styles.postsSection}>
          <h2>All Blog Posts ({posts.length})</h2>
          
          {loading && <p>Loading...</p>}
          
          {!loading && posts.length === 0 && (
            <p className={styles.emptyState}>No blog posts yet. Create your first post above!</p>
          )}

          <div className={styles.postsList}>
            {posts.map((post) => (
              <div key={post.id} className={styles.postItem}>
                <div className={styles.postInfo}>
                  <div className={styles.postMeta}>
                    <span className={`${styles.statusBadge} ${post.published ? styles.published : styles.draft}`}>
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                    <span className={styles.categoryBadge}>{post.category}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <p className={styles.postDate}>
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div className={styles.postActions}>
                  <button 
                    onClick={() => handleEdit(post)}
                    className={styles.editBtn}
                    title="Edit post"
                  >
                    <Edit size={18} />
                  </button>
                  <button 
                    onClick={() => handleDelete(post.id)}
                    className={styles.deleteBtn}
                    title="Delete post"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
