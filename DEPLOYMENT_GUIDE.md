# 🚀 Oakmoss Website GitHub Deployment Guide

## Overview
This guide will help you deploy your completely rebuilt Jekyll website to GitHub Pages. Your new website includes:

- ✅ **8 Complete Pages** - All with dark mode theme
- ✅ **Professional Design** - Modern, responsive, and fast
- ✅ **Gallery System** - Main gallery + specialized wallet/table galleries
- ✅ **Performance Optimized** - Single CSS file, lazy loading, SEO ready

---

## 🔧 **Option 1: Automated Deployment (Recommended)**

### Quick Start with Script:

```bash
# Run the automated deployment script
./deploy-to-github.sh
```

This script will:
1. Create a backup of your current state
2. Remove all old website files automatically
3. Move Jekyll files to the root directory
4. Initialize Git and commit everything
5. Provide GitHub setup instructions

---

## 🛠️ **Option 2: Manual Deployment**

### Step 1: Clean Up Old Files

**Remove these old website directories:**
```bash
rm -rf about anarchy blog contact css events gallery images interviews js partners partners_files privacy-policy tablegallery taoistthreads unblockedcarver wallets wayfinder old-site-backup jesseboyes
```

**Remove these old files:**
```bash
rm -f template.html .swp index.html .DS_Store
```

### Step 2: Move Jekyll Files to Root

```bash
# Copy Jekyll files to root directory
cp -r jekyll-site/* .

# Copy hidden files (like .gitignore)
cp jekyll-site/.gitignore . 2>/dev/null || true

# Remove the jekyll-site directory
rm -rf jekyll-site
```

### Step 3: Initialize Git Repository

```bash
# Initialize Git (if not already done)
git init
git branch -M main

# Add all files
git add .

# Commit with descriptive message
git commit -m "Deploy Jekyll website with dark mode galleries

- Complete Jekyll rebuild with 8 pages
- Professional dark mode theme across all galleries  
- Mobile-responsive design
- Performance optimized with single CSS file
- SEO ready with proper meta tags
- Ready for production deployment"
```

---

## 🌐 **GitHub Setup**

### Step 1: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. **Repository name:** `oakmoss-website` (or your preference)
3. **Visibility:** Public (required for free GitHub Pages)
4. **Important:** DON'T check any initialization options
5. Click "Create repository"

### Step 2: Connect Local Repository to GitHub

```bash
# Add GitHub as remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/oakmoss-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. **Source:** Deploy from a branch
5. **Branch:** main
6. **Folder:** / (root)
7. Click **Save**

🎉 **Your website will be live at:** `https://YOUR_USERNAME.github.io/oakmoss-website`

---

## 🌍 **Custom Domain Setup (Optional)**

### If you want to use oakmosswoodcraft.com:

1. **Update CNAME file in your repository:**
   ```bash
   echo "oakmosswoodcraft.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS with your domain provider:**
   - Add a CNAME record pointing `www` to `YOUR_USERNAME.github.io`
   - Add A records for the apex domain pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Enable HTTPS in GitHub Pages settings**

---

## 📁 **Final Repository Structure**

After deployment, your repository should look like:

```
oakmoss-website/
├── _config.yml          # Jekyll configuration
├── Gemfile              # Ruby dependencies
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _data/               # Site data
├── _sass/               # Stylesheet components
├── assets/              # CSS, JS, images
├── pages/               # Markdown pages
├── index.html           # Homepage
├── .gitignore           # Git ignore rules
├── CNAME                # Custom domain (if using)
├── README.md            # Documentation
├── robots.txt           # SEO robots file
└── sitemap.xml          # SEO sitemap
```

---

## 🔍 **Verification Checklist**

After deployment, verify these pages work:

- [ ] **Home:** `your-site.com/`
- [ ] **About:** `your-site.com/about/`
- [ ] **Gallery:** `your-site.com/gallery/`
- [ ] **Contact:** `your-site.com/contact/`
- [ ] **Events:** `your-site.com/events/`
- [ ] **Partners:** `your-site.com/partners/`
- [ ] **Wallets:** `your-site.com/wallets/`
- [ ] **Table Gallery:** `your-site.com/table-gallery/`
- [ ] **Newsletter:** `your-site.com/unblockedcarver/`

---

## 🛠️ **Troubleshooting**

### Common Issues:

**1. GitHub Pages not building:**
- Check the **Actions** tab for build errors
- Ensure `_config.yml` is valid YAML
- Make sure all required gems are in `Gemfile`

**2. Images not loading:**
- Verify images are in `/assets/images/`
- Check that image paths start with `/assets/images/`
- Ensure image files are committed to Git

**3. CSS not applying:**
- Check that `assets/css/main.scss` exists
- Verify SASS files are in `_sass/` directory
- Clear browser cache

**4. Custom domain not working:**
- Verify CNAME file contains only the domain name
- Check DNS settings with your domain provider
- Wait up to 24 hours for DNS propagation

**5. Site looks different than local:**
- Ensure all local changes are committed and pushed
- GitHub Pages may take a few minutes to update
- Check that `_config.yml` baseurl settings are correct

---

## 📞 **Support**

If you encounter issues:

1. Check the **GitHub Pages documentation**: [https://docs.github.com/en/pages](https://docs.github.com/en/pages)
2. Review Jekyll documentation: [https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)
3. Check repository Actions tab for build logs

---

## 🎉 **Success!**

Once deployed, your professional Jekyll website will be:

- ⚡ **Fast loading** with optimized assets
- 📱 **Mobile responsive** on all devices
- 🎨 **Professional dark mode** galleries
- 🔍 **SEO optimized** for search engines
- ♿ **Accessible** with proper navigation
- 🛡️ **Secure** with HTTPS via GitHub Pages

**Your Oakmoss Woodcraft website is ready for the world!** 🌍 