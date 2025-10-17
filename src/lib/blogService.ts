import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query, 
  where, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';
import { BlogPost } from '@/types/blog';

const BLOG_COLLECTION = 'blog_posts';

// Create a new blog post
export async function createBlogPost(post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    const now = Date.now();
    const docRef = await addDoc(collection(db, BLOG_COLLECTION), {
      ...post,
      createdAt: now,
      updatedAt: now,
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error creating blog post:', error);
    return { success: false, error };
  }
}

// Update an existing blog post
export async function updateBlogPost(id: string, updates: Partial<BlogPost>) {
  try {
    const docRef = doc(db, BLOG_COLLECTION, id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Date.now(),
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating blog post:', error);
    return { success: false, error };
  }
}

// Delete a blog post
export async function deleteBlogPost(id: string) {
  try {
    await deleteDoc(doc(db, BLOG_COLLECTION, id));
    return { success: true };
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return { success: false, error };
  }
}

// Get all published blog posts
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, BLOG_COLLECTION),
      where('published', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BlogPost));
  } catch (error) {
    console.error('Error getting published blog posts:', error);
    return [];
  }
}

// Get all blog posts (including unpublished)
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, BLOG_COLLECTION),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BlogPost));
  } catch (error) {
    console.error('Error getting all blog posts:', error);
    return [];
  }
}

// Get a single blog post by ID
export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const docRef = doc(db, BLOG_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as BlogPost;
    }
    return null;
  } catch (error) {
    console.error('Error getting blog post:', error);
    return null;
  }
}

// Get blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    const q = query(
      collection(db, BLOG_COLLECTION),
      where('published', '==', true),
      where('category', '==', category),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as BlogPost));
  } catch (error) {
    console.error('Error getting blog posts by category:', error);
    return [];
  }
}
