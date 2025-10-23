# Authentication Setup Guide

This project uses **NextAuth.js** for authentication with multiple providers.

## 🚀 Supported Login Methods

- ✅ **Google** - Sign in with Google account
- ✅ **Facebook** - Sign in with Facebook account
- ✅ **Twitter** - Sign in with Twitter/X account
- ✅ **GitHub** - Sign in with GitHub account
- 🔄 **Email/Password** - Coming soon

## 📝 Setup Instructions

### 1. Generate NextAuth Secret

Run this command to generate a secret key:

```bash
openssl rand -base64 32
```

Or use this online: https://generate-secret.vercel.app/32

### 2. Create `.env.local` file

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### 3. Configure OAuth Providers

#### **GitHub OAuth**

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: Your app name
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copy **Client ID** and **Client Secret** to `.env.local`

#### **Google OAuth**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure OAuth consent screen
6. Create OAuth Client ID:
   - **Application type**: Web application
   - **Authorized redirect URIs**: `http://localhost:3000/api/auth/callback/google`
7. Copy **Client ID** and **Client Secret** to `.env.local`

#### **Facebook OAuth**

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add "Facebook Login" product
4. Go to Settings → Basic
5. Add OAuth Redirect URIs: `http://localhost:3000/api/auth/callback/facebook`
6. Copy **App ID** and **App Secret** to `.env.local`

#### **Twitter OAuth 2.0**

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new project and app
3. Go to app settings → User authentication settings
4. Enable OAuth 2.0
5. Add callback URL: `http://localhost:3000/api/auth/callback/twitter`
6. Copy **Client ID** and **Client Secret** to `.env.local`

### 4. Update Environment Variables

Edit `.env.local` with your credentials:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret

GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

FACEBOOK_ID=your-facebook-app-id
FACEBOOK_SECRET=your-facebook-app-secret

TWITTER_ID=your-twitter-client-id
TWITTER_SECRET=your-twitter-client-secret
```

### 5. Restart Development Server

```bash
npm run dev
```

## 🎯 How It Works

1. User clicks any social login button on `/Login` page
2. NextAuth redirects to the provider's login page
3. User authorizes the app
4. Provider redirects back to your app
5. NextAuth creates a session
6. User is logged in and redirected to homepage

## 🔒 Session Management

- Sessions are stored in cookies
- User info is available via `useSession()` hook
- Sign out with `signOut()` function

## 📱 Usage in Components

```javascript
'use client'
import { useSession, signOut } from 'next-auth/react'

export default function Component() {
  const { data: session, status } = useSession()
  
  if (status === 'loading') return <div>Loading...</div>
  
  if (session) {
    return (
      <>
        <p>Welcome {session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    )
  }
  
  return <a href="/Login">Sign In</a>
}
```

## 🚨 Important Notes

- **Never commit `.env.local`** to git (it's in .gitignore)
- Use different credentials for production
- Update callback URLs for production domain
- Test each provider before deployment

## 📚 Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [NextAuth Providers](https://next-auth.js.org/providers/)
