# GoDaddy Domain Setup Guide

This guide will help you connect your Fann's Cleaning website to your GoDaddy domain.

## Option 1: Deploy to Vercel (Recommended) ⭐

Vercel is the company behind Next.js and offers the best integration with free hosting.

### Step 1: Deploy to Vercel

1. **Create a Vercel account**
   - Go to https://vercel.com
   - Sign up with GitHub (recommended) or email

2. **Import your project**
   - Click "Add New Project"
   - Import this Git repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site is live!**
   - Vercel will give you a URL like `fanns-cleaning.vercel.app`

### Step 2: Connect Your GoDaddy Domain

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain (e.g., `fanscleaning.com`)
   - Vercel will show you DNS records to configure

2. **In GoDaddy:**
   - Log into your GoDaddy account
   - Go to "My Products" → "Domains"
   - Click "DNS" next to your domain

3. **Configure DNS Records:**

   For apex domain (e.g., `fanscleaning.com`):
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP)
   - TTL: 600 seconds

   For www subdomain:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: 600 seconds

4. **Verify in Vercel:**
   - Return to Vercel dashboard
   - Click "Verify" next to your domain
   - DNS changes can take 24-48 hours (usually faster)

---

## Option 2: Deploy to Netlify

Netlify is another excellent free hosting platform for Next.js.

### Step 1: Deploy to Netlify

1. **Create a Netlify account**
   - Go to https://netlify.com
   - Sign up with GitHub or email

2. **Import your project**
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Deploy**
   - Click "Deploy site"
   - You'll get a URL like `fanns-cleaning.netlify.app`

### Step 2: Connect Your GoDaddy Domain

1. **In Netlify Dashboard:**
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain name

2. **In GoDaddy (same as Vercel):**
   - Go to DNS settings
   - Add these records:

   For apex domain:
   - Type: `A`
   - Name: `@`
   - Value: `75.2.60.5` (Netlify's load balancer)
   - TTL: 600 seconds

   For www:
   - Type: `CNAME`
   - Name: `www`
   - Value: `[your-site].netlify.app`
   - TTL: 600 seconds

---

## Option 3: GoDaddy Web Hosting

If you want to use GoDaddy's hosting directly:

### Requirements:
- GoDaddy Web Hosting plan (cPanel or similar)
- Your site needs to be exported as static files

### Steps:

1. **Export your Next.js site as static:**

   Update `next.config.ts`:
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }

   module.exports = nextConfig
   ```

2. **Build your site:**
   ```bash
   npm run build
   ```
   This creates an `out` folder with static files.

3. **Upload to GoDaddy:**
   - Log into GoDaddy cPanel
   - Open File Manager
   - Navigate to `public_html`
   - Upload all files from the `out` folder
   - Your domain will automatically point to these files

**Note:** This option doesn't support server-side features, but your current site is fully client-side, so it will work fine.

---

## Recommended Approach

**I recommend Option 1 (Vercel)** because:
- ✅ Free hosting
- ✅ Automatic deployments from Git
- ✅ Best Next.js performance
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Easy to update (just push to Git)

---

## Quick Start Commands

If you haven't deployed yet:

```bash
# Test your site locally
npm run dev

# Build for production
npm run build

# Start production server locally
npm run start
```

---

## DNS Propagation

After updating DNS records:
- Changes can take 5 minutes to 48 hours
- Usually complete within 1-2 hours
- Check status at: https://dnschecker.org

---

## SSL Certificate

Both Vercel and Netlify provide free SSL certificates automatically. Your site will be accessible via HTTPS.

---

## Need Help?

If you encounter issues:
1. Check DNS propagation: https://dnschecker.org
2. Verify DNS records in GoDaddy match exactly
3. Wait 24-48 hours for DNS to fully propagate
4. Contact Vercel/Netlify support (excellent free support)

---

## Current Domain Placeholder

Don't forget to update the phone number in the website:
- Current: `(281) 555-1234` (appears to be a placeholder)
- Update in: `app/page.js` (lines 26, 27, 45, 88, 223, 224)
