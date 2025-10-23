# 🚀 Quick Start - Get Authentication Working in 5 Minutes

## Option 1: GitHub Only (Fastest - 2 minutes)

### Step 1: Create GitHub OAuth App
1. Go to: https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in:
   ```
   Application name: My Booking App
   Homepage URL: http://localhost:3003
   Callback URL: http://localhost:3003/api/auth/callback/github
   ```
4. Click "Register application"
5. Click "Generate a new client secret"
6. Copy your **Client ID** and **Client Secret**

### Step 2: Create .env.local
Create a file named `.env.local` in your project root:

```env
NEXTAUTH_URL=http://localhost:3003
NEXTAUTH_SECRET=abc123secretkey456  

GITHUB_ID=paste-your-client-id-here
GITHUB_SECRET=paste-your-client-secret-here
```

### Step 3: Restart Server
```bash
npm run dev
```

### Step 4: Test It!
1. Go to http://localhost:3003
2. Click "Login"
3. Click "Continue with Github"
4. It works! 🎉

---

## Option 2: All Providers (10 minutes)

Follow the detailed guide in `AUTHENTICATION_SETUP.md`

---

## Generate Better Secret (Optional)

Instead of `abc123secretkey456`, use:

**Windows PowerShell:**
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Mac/Linux:**
```bash
openssl rand -base64 32
```

---

## ⚠️ Common Issues

### "Error: No OAuth providers configured"
- Make sure `.env.local` exists
- Check that GITHUB_ID and GITHUB_SECRET are set
- Restart the dev server

### "Callback URL mismatch"
- In GitHub/Google OAuth app, callback must be exactly:
  - GitHub: `http://localhost:3003/api/auth/callback/github`
  - Google: `http://localhost:3003/api/auth/callback/google`
- No trailing slash!

### "Session not found"
- Clear browser cookies
- Hard refresh (Ctrl+Shift+R)

---

## ✅ You're Done!

Your authentication is now fully functional. Users can sign in with GitHub (or other providers if you set them up).

**Next:** Check `AUTH_IMPLEMENTATION_SUMMARY.md` to see everything that's been set up!
