# Blog Feature Setup Instructions

## Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Give your project a name (e.g., "personal-website")
4. You can disable Google Analytics if you don't need it

### 2. Enable Firestore Database

1. In your Firebase project, go to "Build" → "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode" (you can adjust rules later)
4. Select a location closest to your users

### 3. Enable Authentication

1. Go to "Build" → "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Add new provider" → "Email/Password" → Enable → Save

### 4. Create Admin User

1. In Authentication section, go to "Users" tab
2. Click "Add user"
3. Enter your email and password
4. This will be your admin account for managing blog posts

### 5. Get Firebase Configuration

1. Go to Project Settings (gear icon) → "General" tab
2. Scroll down to "Your apps" section
3. Click the web icon (</>) to add a web app
4. Register your app with a nickname
5. Copy the `firebaseConfig` object

### 6. Configure Environment Variables

Update the `.env.local` file in your project root with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_ADMIN_EMAIL=your_admin_email@example.com
```

### 7. Configure Firestore Security Rules

In Firestore Database → Rules tab, add these rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Blog posts - read for everyone, write for authenticated users only
    match /blog_posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Using the Blog Feature

### Accessing the Admin Dashboard

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000/admin/blog`
3. Log in with the email and password you created in Firebase Authentication

### Creating Blog Posts

1. Log into the admin dashboard
2. Fill in the form:
   - **Title**: The blog post title
   - **Category**: Select from predefined categories (Research, Software, Innovation, etc.)
   - **Excerpt**: A brief summary shown on the blog cards
   - **Content**: The full blog post content
   - **Published**: Check this box to make the post visible to the public
3. Click "Create Post"

### Managing Posts

- **Edit**: Click the edit icon on any post to modify it
- **Delete**: Click the delete icon to remove a post
- **Draft/Published**: Toggle the published checkbox to control visibility

### Viewing Blog Posts

- Public blog posts appear on the homepage in the "Blog & Insights" section
- Click any blog card to read the full post
- Only published posts are visible to visitors

## Features

✅ **Firebase Integration**: Secure cloud database for blog posts
✅ **Admin Dashboard**: Easy-to-use interface for managing content
✅ **Authentication**: Protected admin access with email/password
✅ **Draft/Publish**: Control which posts are visible to the public
✅ **Categories**: Organize posts by topic
✅ **Real-time Updates**: Posts appear immediately after publishing
✅ **Responsive Design**: Works on all devices
✅ **Beautiful UI**: Matches your "Code & Cultivate" theme

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   └── blog/
│   │       ├── page.tsx          # Admin dashboard
│   │       └── page.module.css   # Admin styles
│   ├── blog/
│   │   └── [id]/
│   │       ├── page.tsx          # Individual blog post page
│   │       └── page.module.css   # Blog post styles
├── components/
│   ├── BlogSection.tsx            # Blog section for homepage
│   └── BlogSection.module.css     # Blog section styles
├── lib/
│   ├── firebase.ts                # Firebase configuration
│   └── blogService.ts             # Blog CRUD operations
└── types/
    └── blog.ts                    # TypeScript interfaces
```

## Customization

### Adding New Categories

Edit `src/app/admin/blog/page.tsx` and add options to the category select:

```tsx
<select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
  <option value="Research">Research</option>
  <option value="Software">Software</option>
  <option value="YourNewCategory">Your New Category</option>
</select>
```

### Changing Number of Posts on Homepage

Edit `src/components/BlogSection.tsx` line 18:

```tsx
setPosts(publishedPosts.slice(0, 3)); // Change 3 to desired number
```

## Troubleshooting

**Can't log in**: Verify your email/password in Firebase Console → Authentication
**Posts not showing**: Check if posts are marked as "Published" in the admin dashboard
**Firebase errors**: Verify your `.env.local` credentials are correct
**Permission denied**: Check your Firestore security rules

## Production Deployment

1. Add `.env.local` variables to your hosting platform (Vercel, Netlify, etc.)
2. Ensure Firebase rules are properly configured
3. Test the admin dashboard in production
4. Create your first blog post!

Happy blogging! 🚀
