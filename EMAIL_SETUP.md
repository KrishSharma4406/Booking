# 📧 Email Setup Guide for Password Reset

## ✅ What's Been Set Up:

1. ✅ Nodemailer installed
2. ✅ Email utility functions created (`lib/email.js`)
3. ✅ Forgot password API route (`/api/auth/forgot-password`)
4. ✅ Reset password API route (`/api/auth/reset-password`)
5. ✅ Reset password page (`/reset-password`)
6. ✅ Beautiful HTML email template

## 🔧 Gmail Setup (Recommended):

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account: https://myaccount.google.com/
2. Click **Security** in the left sidebar
3. Under "Signing in to Google", enable **2-Step Verification**
4. Follow the prompts to set it up

### Step 2: Generate App Password
1. After enabling 2FA, go back to **Security**
2. Under "Signing in to Google", click **App passwords**
3. If you don't see "App passwords", make sure 2FA is enabled
4. Select app: Choose **Mail**
5. Select device: Choose **Other (Custom name)**
6. Enter name: `Booking App` or `Password Reset`
7. Click **Generate**
8. **IMPORTANT**: Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)

### Step 3: Update `.env.local`
Replace these values in your `.env.local` file:

```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
EMAIL_FROM_NAME=Booking App
```

**Example:**
```env
EMAIL_USER=krishsharma4406@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
EMAIL_FROM_NAME=Booking App
```

## 🚀 How It Works:

### User Flow:
1. User clicks "Forgot Password" on login page
2. User enters their email address
3. System generates a secure reset token
4. Email is sent with reset link (valid for 1 hour)
5. User clicks link in email
6. User enters new password
7. Password is updated and user can login

### Email Template Features:
- ✅ Professional gradient design
- ✅ Clickable reset button
- ✅ Manual link copy option
- ✅ 1-hour expiration notice
- ✅ Security reminder
- ✅ Mobile-responsive

## 🧪 Testing:

### Test Forgot Password:
1. Go to: http://localhost:3001/Forgotpwd
2. Enter email: `test@example.com` (or your test user)
3. Check your email inbox
4. Click the reset link
5. Enter new password
6. Login with new password

### Test Endpoints:
```bash
# Forgot password
POST http://localhost:3001/api/auth/forgot-password
Body: { "email": "test@example.com" }

# Reset password
POST http://localhost:3001/api/auth/reset-password
Body: { "token": "token-from-email", "password": "newpassword123" }
```

## ⚠️ Important Notes:

### Security:
- ✅ Reset tokens expire after 1 hour
- ✅ Tokens are one-time use (deleted after reset)
- ✅ Passwords are hashed with bcrypt
- ✅ Email existence is not revealed (security best practice)

### Production Considerations:
- 🔄 Replace in-memory token storage with database (Redis/PostgreSQL)
- 🔄 Add rate limiting to prevent abuse
- 🔄 Use professional email service (SendGrid, AWS SES, Mailgun)
- 🔄 Add email verification on signup
- 🔄 Log password reset attempts

## 📧 Alternative Email Services:

### SendGrid (Recommended for Production):
```bash
npm install @sendgrid/mail
```

### AWS SES:
```bash
npm install @aws-sdk/client-ses
```

### Resend (Modern Alternative):
```bash
npm install resend
```

## 🐛 Troubleshooting:

### Error: "Invalid login credentials"
- Make sure you're using an **App Password**, not your regular Gmail password
- Ensure 2FA is enabled on your Google account

### Error: "SMTP connection failed"
- Check your EMAIL_USER is correct
- Verify EMAIL_PASSWORD has no extra spaces
- Make sure your Gmail allows "Less secure app access" (not needed with App Password)

### Emails not arriving:
- Check spam/junk folder
- Verify EMAIL_USER matches the sender email
- Test with `verifyEmailConfig()` function

### Token expired errors:
- Tokens expire after 1 hour
- Request a new reset link

## ✅ Your Password Reset is Ready!

After setting up Gmail App Password, restart your server:
```bash
npm run dev
```

Then test it out! 🎉
