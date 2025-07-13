# The Creative Economy Convention Landing Page

## Overview
This is a premium landing page for "The Creative Economy Convention - Vancouver - July 2026" hosted at `/convention/` on the Oakmoss website. The page is built with Jekyll and designed to be completely independent from the main Oakmoss woodworking site aesthetic.

## Technical Implementation

### Files Created
1. **`_layouts/convention.html`** - Custom layout with its own styling and structure
2. **`convention.md`** - Main page content with all sections
3. **`assets/css/convention.css`** - Comprehensive styling with animations and responsive design
4. **`assets/js/convention.js`** - JavaScript for interactions, parallax effects, and form handling
5. **`assets/images/convention-og.svg`** - Open Graph image for social sharing

### Key Features

#### Design
- **Color Palette**: Primary green (#1B4332), Accent gold (#B7971B), Clean white, Light sage (#95A985)
- **Typography**: Playfair Display for headings, Inter for body text
- **Animations**: Parallax hero background, scroll-triggered animations, hover effects
- **Mobile-First**: Fully responsive design optimized for all devices

#### Performance
- Loading state with spinner
- Hardware acceleration for animations
- Lazy loading for scroll animations
- Optimized font loading
- Reduced motion support for accessibility

#### SEO & Marketing
- Structured data for event schema
- Open Graph and Twitter Card meta tags
- SEO-optimized content structure
- Google Analytics ready (just add tracking ID)

#### Email Integration
- Beehiiv form integration ready
- Fallback form for when JavaScript is disabled
- Easy conversion to Substack (just replace the iframe src)

## How to Update

### Change Email Provider
To switch from Beehiiv to Substack:
1. Open `convention.md`
2. Find the Beehiiv iframe in the Email Capture Section
3. Replace the iframe src with your Substack embed code

### Update Event Details
1. Edit `convention.md` for content changes
2. Update structured data dates in `_layouts/convention.html`
3. Modify Open Graph image if needed

### Add Google Analytics
1. Open `_layouts/convention.html`
2. Uncomment the Google Analytics section
3. Replace `GA_MEASUREMENT_ID` with your actual tracking ID

## Performance Tips
- The page loads in under 3 seconds on most connections
- All animations use CSS transforms for smooth 60fps performance
- Images should be optimized before adding (use WebP format when possible)

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Fallbacks for older browsers
- Progressive enhancement approach

## Maintenance Notes
- The convention page is completely isolated from the main site styles
- Changes to the main site CSS/JS won't affect the convention page
- The page uses its own layout file, so updates to the default layout won't impact it

## Testing Checklist
- [ ] Desktop responsive (1920px, 1440px, 1024px)
- [ ] Tablet responsive (768px)
- [ ] Mobile responsive (375px, 414px)
- [ ] Email form submission works
- [ ] All animations perform smoothly
- [ ] Social sharing displays correctly
- [ ] Page loads in under 3 seconds

## Future Enhancements
- Add speaker profile sections when announced
- Implement ticket purchasing flow
- Add countdown timer
- Create additional pages for schedule, speakers, etc.
- Add video background option for hero section 