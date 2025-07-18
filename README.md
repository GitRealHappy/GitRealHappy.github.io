# GitRealHappy.github.io

## Oakmoss Woodcraft Website

Jekyll-based website for Oakmoss Woodcraft featuring The Unblocked Carver newsletter, gallery, woodworking content, and The Creative Economy Convention landing page.

### 🌟 **The Creative Economy Convention**
A premium landing page for the Creative Economy Convention in Vancouver, May 2026. Features:
- Independent styling and layout from the main site
- Email capture with Beehiiv integration
- SEO optimized with structured data
- Mobile-first responsive design
- Located at `/convention/`

For convention page maintenance, see `CONVENTION_README.md`.

## Newsletter Issue Workflow

### Adding a New Newsletter Issue

Follow this step-by-step process when adding a new newsletter issue:

#### 1. **Create Newsletter Issue File**
- Create new file: `_newsletter/issue-X.md` (where X is the issue number)
- Add proper frontmatter:
```yaml
---
layout: newsletter-issue
title: "Your Issue Title"
issue_number: X
date: YYYY-MM-DD
read_time: "X min read"
tags: ["Tag1", "Tag2"]
featured_image: "/assets/images/path-to-image.jpg"
excerpt: "Brief excerpt for social media and index page."
---
```

#### 2. **Add Issue to Newsletter Index**
- Edit `pages/unblockedcarver.md`
- Add new issue card at the **top** of the issues grid:
```html
<!-- Issue #X -->
<a href="/unblockedcarver/issue-X/" class="issue-card">
  <div class="issue-image">
    <img src="/assets/images/path-to-image.jpg" alt="Issue Title" loading="lazy">
  </div>
  <div class="issue-content">
    <div class="issue-number">#X</div>
    <h3 class="issue-title">Your Issue Title</h3>
    <div class="issue-meta">
      <span class="date">Month Day, Year</span>
      <span class="read-time">X min read</span>
    </div>
    <div class="issue-tags">
      <span class="tag">Tag1</span>
      <span class="tag">Tag2</span>
    </div>
    <p class="issue-excerpt">Brief excerpt...</p>
    <span class="read-more">Read Full Issue</span>
  </div>
</a>
```

#### 3. **Update Newsletter Navigation**
- Edit `_layouts/newsletter-issue.html`
- Update the navigation condition to include the new issue:
```liquid
{% if prev_issue <= X %}
  <a href="/unblockedcarver/issue-{{ prev_issue }}/" class="nav-link next">Issue #{{ prev_issue }} →</a>
{% endif %}
```

#### 4. **Test and Deploy**
- Add files to git: `git add _newsletter/issue-X.md assets/images/path-to-image.jpg pages/unblockedcarver.md _layouts/newsletter-issue.html`
- Build site: `bundle exec jekyll build`
- Test locally: `bundle exec jekyll serve --host 0.0.0.0 --port 4000`
- Verify:
  - Newsletter index page loads: `http://localhost:4000/unblockedcarver/`
  - Issue page loads: `http://localhost:4000/unblockedcarver/issue-X/`
  - Featured image accessible: `http://localhost:4000/assets/images/path-to-image.jpg`
- Commit: `git commit -m "Add newsletter issue-X: Title"`
- Push: `git push origin main`

### Creating a Redirect Page with Social Media Image

Use this workflow when you want to create a shareable URL that redirects to external content (like Substack) but uses your own image for social media sharing:

#### 1. **Create Redirect Page**
- Create new file: `pages/redirect-name.md`
- Add redirect frontmatter:
```yaml
---
layout: default
title: "Page Title for Social Media"
permalink: /redirect-name/
description: "Description for social media sharing"
featured_image: "/assets/images/path-to-image.jpg"
redirect_to: "https://external-url.com/full-path"
sitemap: false
---

<script>
  // Immediate redirect
  window.location.replace("{{ page.redirect_to }}");
</script>

<meta http-equiv="refresh" content="0; url={{ page.redirect_to }}">

<div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
  <h1>Redirecting...</h1>
  <p>You are being redirected to the full article.</p>
  <p>If you are not redirected automatically, <a href="{{ page.redirect_to }}">click here</a>.</p>
</div>
```

#### 2. **Test and Deploy**
- Add files: `git add pages/redirect-name.md assets/images/path-to-image.jpg`
- Build and test as above
- Verify:
  - Page loads: `http://localhost:4000/redirect-name/`
  - Image loads: `http://localhost:4000/assets/images/path-to-image.jpg`
  - Check social media meta tags: `curl -s http://localhost:4000/redirect-name/ | grep -E "og:image"`
  - Redirect functionality works
- Commit and push

### Social Media Integration

Both workflows automatically handle social media sharing through:
- **Open Graph tags**: Facebook, LinkedIn, Discord
- **Twitter Cards**: Twitter/X
- **Featured images**: Pulled from `featured_image` frontmatter
- **SEO-friendly**: Proper meta descriptions and titles

### File Structure
```
_newsletter/
├── issue-1.md
├── issue-2.md
└── issue-X.md

assets/images/
├── unblocked-letters/
│   ├── icecream.png
│   └── egostrength.jpg
└── other-images/

pages/
├── unblockedcarver.md  # Newsletter index
└── redirect-name.md    # Redirect pages
```

### Quick Reference Commands
```bash
# Add files to git
git add _newsletter/issue-X.md assets/images/path-to-image.jpg pages/unblockedcarver.md

# Build site
bundle exec jekyll build

# Test locally
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# Commit and push
git commit -m "Add newsletter issue-X: Title"
git push origin main
```
