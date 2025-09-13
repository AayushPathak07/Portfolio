# Cloudflare Pages Deployment Guide

This comprehensive guide will walk you through deploying Aayush Pathak's portfolio website to Cloudflare Pages with the custom domain `aayushpathak.com`.

## 📋 Prerequisites

Before starting the deployment process, ensure you have:

- [x] A Cloudflare account (free tier is sufficient)
- [x] Domain ownership of `aayushpathak.com`
- [x] Git repository containing the portfolio code
- [x] Basic understanding of DNS configuration

## 🚀 Deployment Methods

### Method 1: Git Integration (Recommended)

This method automatically rebuilds and deploys your site whenever you push changes to your repository.

#### Step 1: Prepare Your Repository

1. **Push your code to a Git platform:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Ensure your repository structure is correct:**
   ```
   your-repo/
   ├── src/
   ├── public/
   ├── package.json
   ├── vite.config.ts
   ├── tailwind.config.js
   └── index.html
   ```

#### Step 2: Connect to Cloudflare Pages

1. **Log in to Cloudflare Dashboard:**
   - Visit [https://dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign in with your account credentials

2. **Create a new Pages project:**
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"
   - Choose "Connect to Git"

3. **Authorize Git integration:**
   - Select your Git provider (GitHub, GitLab, etc.)
   - Authorize Cloudflare to access your repositories
   - Select the portfolio repository

#### Step 3: Configure Build Settings

Set up the following build configuration:

```yaml
Build Settings:
  Framework preset: Vite
  Build command: npm run build
  Build output directory: dist
  Root directory: / (leave empty if repo root)
  
Environment Variables:
  NODE_VERSION: 18
  NPM_VERSION: 9
  VITE_SITE_URL: https://aayushpathak.com
```

#### Step 4: Deploy

1. **Review settings and deploy:**
   - Click "Save and Deploy"
   - Monitor the build process in real-time
   - First deployment typically takes 2-5 minutes

2. **Verify deployment:**
   - Once complete, you'll receive a `*.pages.dev` URL
   - Test all functionality on the temporary URL

### Method 2: Direct Upload

Use this method for quick deployments or if you prefer manual control.

#### Step 1: Build Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Verify the build
npm run preview
```

#### Step 2: Upload to Cloudflare

1. **Navigate to Pages dashboard:**
   - Go to Cloudflare Pages
   - Click "Upload assets"

2. **Upload build files:**
   - Upload contents of the `dist/` folder
   - Do not upload the `dist` folder itself, only its contents

3. **Configure project settings:**
   - Set project name: `aayush-pathak-portfolio`
   - Configure environment if needed

## 🌐 Custom Domain Configuration

### Step 1: Add Domain to Cloudflare

1. **Add site to Cloudflare:**
   - Go to "Websites" in Cloudflare dashboard
   - Click "Add site"
   - Enter `aayushpathak.com`
   - Choose a plan (Free plan is sufficient)

2. **Update nameservers:**
   - Cloudflare will provide nameserver addresses
   - Update nameservers at your domain registrar
   - Wait for DNS propagation (up to 24 hours)

### Step 2: Configure Pages Custom Domain

1. **Add custom domain:**
   - Go to your Pages project
   - Navigate to "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter `aayushpathak.com`

2. **DNS Configuration:**
   Cloudflare will automatically create the necessary DNS records:
   ```
   Type: CNAME
   Name: aayushpathak.com
   Target: your-project.pages.dev
   ```

3. **SSL Certificate:**
   - SSL certificate is automatically provisioned
   - Usually takes 5-15 minutes to activate
   - Supports both `aayushpathak.com` and `www.aayushpathak.com`

## ⚙️ Advanced Configuration

### Environment Variables

Set these in your Pages project settings:

```bash
# Production environment
NODE_VERSION=18
NPM_VERSION=9
VITE_SITE_URL=https://aayushpathak.com
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # If using Google Analytics
```

### Build Optimization

#### Cache Configuration

Create `_headers` file in your `public` directory:

```
/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/sw.js
  Cache-Control: public, max-age=0, must-revalidate

/manifest.json
  Cache-Control: public, max-age=86400
```

#### Redirects Configuration

Create `_redirects` file in your `public` directory:

```
# Redirect www to non-www
https://www.aayushpathak.com/* https://aayushpathak.com/:splat 301!

# SPA fallback
/*    /index.html   200

# Optional: Redirect old URLs
/portfolio/*  /projects/:splat  301
/contact-me   /contact          301
```

### Performance Optimization

#### Build Configuration

Update your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});
```

## 🔍 SEO and Analytics Setup

### Google Analytics Integration

1. **Create GA4 property:**
   - Visit [Google Analytics](https://analytics.google.com)
   - Create property for `aayushpathak.com`
   - Get Measurement ID

2. **Add tracking code:**
   Update your `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Search Console Setup

1. **Add property to Google Search Console:**
   - Visit [Google Search Console](https://search.google.com/search-console)
   - Add `aayushpathak.com` as property
   - Verify ownership via DNS or HTML file

2. **Submit sitemap:**
   Create `public/sitemap.xml`:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://aayushpathak.com/</loc>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <!-- Add other pages -->
   </urlset>
   ```

## 🔧 Troubleshooting

### Common Issues

#### Build Failures

**Error: Node.js version mismatch**
```bash
# Solution: Set environment variable
NODE_VERSION=18
```

**Error: Out of memory**
```bash
# Solution: Increase build memory
NODE_OPTIONS=--max-old-space-size=4096
```

#### DNS Issues

**Domain not propagating:**
1. Use [DNS Checker](https://dnschecker.org) to verify propagation
2. Clear browser DNS cache
3. Wait up to 24 hours for full propagation

**SSL certificate not provisioning:**
1. Ensure DNS is properly configured
2. Remove and re-add custom domain
3. Wait 15-30 minutes for certificate generation

#### Performance Issues

**Slow loading times:**
1. Optimize images (use WebP format)
2. Enable image lazy loading
3. Minimize JavaScript bundles
4. Use Cloudflare's optimization features

### Debug Mode

Enable debug logging in your build:

```bash
# Add to package.json scripts
"build:debug": "cross-env DEBUG=vite:* vite build"
```

## 📊 Monitoring and Maintenance

### Analytics and Performance

1. **Monitor Core Web Vitals:**
   - Use Google PageSpeed Insights
   - Monitor Cloudflare Analytics
   - Set up alerts for performance degradation

2. **Regular maintenance:**
   - Update dependencies monthly
   - Monitor build times and success rates
   - Review and update content regularly

### Security Best Practices

1. **Keep dependencies updated:**
   ```bash
   npm audit
   npm update
   ```

2. **Configure security headers:**
   Add to `_headers` file:
   ```
   /*
     X-Frame-Options: DENY
     X-Content-Type-Options: nosniff
     Referrer-Policy: strict-origin-when-cross-origin
     Permissions-Policy: camera=(), microphone=(), location=()
   ```

## 📞 Support Resources

### Cloudflare Resources
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Community Forums](https://community.cloudflare.com/)
- [Status Page](https://www.cloudflarestatus.com/)

### Development Resources
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

### Getting Help

1. **Cloudflare Support:**
   - Free plan: Community support only
   - Pro plan and above: Ticket support

2. **Repository Issues:**
   - Create issue in project repository
   - Provide build logs and error messages

---

**🎉 Congratulations!** Your portfolio website should now be live at `https://aayushpathak.com` with automatic deployments, SSL certificates, and optimal performance through Cloudflare's global network.