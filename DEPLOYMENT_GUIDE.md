# 🚀 Production Deployment Guide

## Pre-Deployment Checklist

### ✅ Code Quality
- [x] All components built and tested
- [x] Build errors fixed (Link components vs anchor tags)
- [x] ESLint warnings (pre-existing, non-critical)
- [x] No new bugs introduced in Phase 1, 2, 3

### ✅ Website Completeness
- [x] 8 pages enhanced with new components
- [x] 12 new reusable components created
- [x] 30+ new sections added
- [x] Multiple CTAs on every page
- [x] Comprehensive content hierarchy
- [x] Mobile responsive design

### ⚠️ Environment Variables Required

Create a `.env.local` file with these variables (ask your backend team):

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
NEXT_PUBLIC_SANITY_API_VERSION=2025-03-03

# Email
NEXT_PUBLIC_CONTACT_EMAIL=your_email@company.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Other
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Deployment Steps

### Step 1: Set Up Environment Variables
```bash
# Create .env.local with values from your backend team
cp .env.example .env.local  # if available
# Edit .env.local with your actual values
```

### Step 2: Run Final Build
```bash
npm run build
```
✅ Should complete with only ESLint warnings (non-critical)

### Step 3: Test Production Build Locally
```bash
npm run start
# Visit http://localhost:3000 and test all pages
```

### Step 4: Deploy to Your Platform

**For Vercel (Recommended - easiest):**
```bash
# Push to GitHub
git add .
git commit -m "Deploy website redesign to production"
git push origin main

# Vercel auto-deploys from main branch
# Set environment variables in Vercel dashboard
# Settings → Environment Variables
```

**For Other Platforms (AWS, Heroku, etc.):**
1. Set environment variables in platform dashboard
2. Deploy from main branch
3. Run build: `npm run build`
4. Start server: `npm run start`

---

## Post-Deployment Checklist

### 🔍 Verification (Test in Production)

- [ ] Homepage loads in <3 seconds
- [ ] All new components visible:
  - [ ] Industry Coverage on Home
  - [ ] Process Flow on Home
  - [ ] FAQ on Home
  - [ ] Service Details on Services page
  - [ ] Case Studies on Services & Clientele
  - [ ] Leadership Team on About
  - [ ] Origin Story on About
  - [ ] Fleet Overview on Gallery
  - [ ] Impact Metrics on CSR
  - [ ] Sustainability Goals on Sustainability
- [ ] All links working (test CTAs)
- [ ] Contact form submits successfully
- [ ] Images load properly
- [ ] Mobile responsive (test on iPhone, Android)
- [ ] Forms validation works
- [ ] No console errors

### 📊 Analytics Setup

- [ ] Google Analytics connected (if NEXT_PUBLIC_GA_ID set)
- [ ] Track page views
- [ ] Track CTA clicks
- [ ] Track form submissions
- [ ] Set up conversion goals

### 🔒 Security

- [ ] SSL certificate active (https)
- [ ] Security headers configured
- [ ] CORS properly set
- [ ] API endpoints protected
- [ ] Environment variables not exposed

### ⚡ Performance

- [ ] Lighthouse score >90
- [ ] First Contentful Paint <2.5s
- [ ] Largest Contentful Paint <4s
- [ ] Cumulative Layout Shift <0.1
- [ ] Time to Interactive <3.5s

### 📱 SEO & Metadata

- [ ] Meta titles optimized
- [ ] Meta descriptions present
- [ ] Open Graph tags correct
- [ ] Sitemap.xml generated
- [ ] robots.txt configured
- [ ] Canonical URLs correct

---

## Monitoring & Maintenance

### Daily (First Week)
- Monitor server error logs
- Check contact form submissions
- Monitor page load times
- Check user feedback

### Weekly (First Month)
- Review analytics
- Check broken links (use tools like Screaming Frog)
- Monitor performance metrics
- Fix any reported bugs

### Monthly
- Review user behavior analytics
- Check Core Web Vitals
- Update content as needed
- Backup database

---

## Rollback Plan (If Issues)

If major issues found after deployment:

```bash
# Revert to previous version
git revert HEAD
git push origin main
# Vercel will auto-redeploy previous version
```

Or manually:
```bash
# Deploy specific commit
git checkout <commit_hash>
git push origin main --force-with-lease
```

---

## Support & Troubleshooting

### Common Issues

**"Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"**
- Solution: Add environment variables to platform dashboard
- All NEXT_PUBLIC_* variables must be set

**"Build fails randomly"**
- Clear build cache: Delete .next folder
- Rebuild: `npm run build`

**"Pages slow to load"**
- Check Core Web Vitals in Lighthouse
- Optimize images (use WebP format)
- Check database queries (Sanity)
- Enable caching headers

**"Contact form not working"**
- Check environment variables
- Verify Turnstile CAPTCHA token
- Check email configuration
- Review server logs

---

## Performance Optimization (Post-Launch)

### Images
- [ ] Use Next.js Image component (already done)
- [ ] Implement lazy loading
- [ ] Use WebP format with fallbacks
- [ ] Compress images

### Code Splitting
- [ ] Review bundle size: `npm run build -- --analyze`
- [ ] Tree shake unused dependencies
- [ ] Split large components into lazy-loaded chunks

### Caching
- [ ] Set cache headers in deployment
- [ ] Implement service worker (PWA)
- [ ] Use CDN for static assets

---

## Success Metrics (Target)

After launch, aim for:
- **Page Load Speed:** <2.5s (First Paint)
- **Mobile Score:** >90 (Lighthouse)
- **Uptime:** >99.9%
- **Error Rate:** <0.1%
- **Contact Form Conversion:** >2%
- **Bounce Rate:** <50%

---

## Contact & Questions

If deployment issues occur:
1. Check this guide first
2. Review deployment logs in platform dashboard
3. Check environment variables are set correctly
4. Review application error logs

---

**Deployment Status: ✅ READY FOR PRODUCTION**

Last Updated: April 15, 2026
