#!/bin/bash

# Oakmoss Website GitHub Deployment Script
# This script cleans up old files and prepares the Jekyll site for GitHub Pages

echo "🚀 Starting Oakmoss Website GitHub Deployment..."

# Step 1: Backup current state (optional)
echo "📦 Creating backup of current state..."
tar -czf oakmoss-backup-$(date +%Y%m%d_%H%M%S).tar.gz .

# Step 2: Remove old website files and folders
echo "🧹 Cleaning up old website files..."

# Remove old directories
rm -rf about anarchy blog contact css events gallery images interviews js partners partners_files privacy-policy tablegallery taoistthreads unblockedcarver wallets wayfinder old-site-backup jesseboyes

# Remove old files
rm -f template.html .swp index.html

# Remove system files
rm -f .DS_Store

echo "✅ Old files cleaned up!"

# Step 3: Move Jekyll files to root
echo "🔧 Moving Jekyll files to root directory..."

# Copy Jekyll files to root
cp -r jekyll-site/* .
cp jekyll-site/.* . 2>/dev/null || true

# Remove the jekyll-site directory
rm -rf jekyll-site

echo "✅ Jekyll files moved to root!"

# Step 4: Initialize Git (if not already done)
if [ ! -d ".git" ]; then
    echo "📂 Initializing Git repository..."
    git init
    git branch -M main
else
    echo "📂 Git repository already exists"
fi

# Step 5: Add files to Git
echo "📝 Adding files to Git..."
git add .
git commit -m "Deploy Jekyll website with dark mode galleries

- Complete Jekyll rebuild with 8 pages
- Professional dark mode theme across all galleries  
- Mobile-responsive design
- Performance optimized with single CSS file
- SEO ready with proper meta tags
- Ready for production deployment"

echo "✅ Files committed to Git!"

# Step 6: Instructions for GitHub
echo "
🎉 Cleanup and Git setup complete!

Next steps to deploy to GitHub:

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: oakmoss-website (or your preferred name)
   - Set to Public
   - DON'T initialize with README, .gitignore, or license

2. Connect your local repository to GitHub:
   git remote add origin https://github.com/YOUR_USERNAME/oakmoss-website.git
   git push -u origin main

3. Enable GitHub Pages:
   - Go to your repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

4. (Optional) Set up custom domain:
   - In your repository, edit the CNAME file
   - Add your domain: oakmosswoodcraft.com
   - Configure DNS with your domain provider

Your website will be live at:
https://YOUR_USERNAME.github.io/oakmoss-website

🚀 Ready for launch!
"

echo "📋 Deployment preparation complete!" 