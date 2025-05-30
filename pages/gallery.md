---
layout: page
title: "Gallery"
subtitle: "Wood Art Collection"
permalink: /gallery/
description: "Explore a collection of handcrafted wood art and furniture by Jesse James Boyes, featuring custom tables, sculptures, and wooden accessories."
custom_js: ['gallery.js']
body_class: 'newsletter-dark-theme'
---

<div class="gallery-intro text-center mb-3">
  <p class="lead">Explore a collection of past works showcasing the beauty and craftsmanship of handmade wood art.</p>
</div>

<div class="gallery-links mb-3">
  <div class="container text-center">
    <a href="/wallets/" class="cta-button mr-2">Explore Wood Wallets</a>
    <a href="/table-gallery/" class="button">The Solar Rays Table Story</a>
  </div>
</div>

<section class="gallery-container">
  <div class="gallery-grid">
    {% assign gallery_images = "ecologytime2.jpg,ecologytime1.jpg,gallery1.jpeg,gallery2.jpeg,gallery3.jpeg,gallery4.jpeg,gallery5.jpeg,gallery6.jpeg,gallery7.jpeg,gallery8.jpeg,gallery9.jpeg,gallery10.jpeg,gallery11.jpeg,gallery12.jpeg,gallery13.jpeg,gallery14.jpeg,gallery15.jpeg,gallery16.jpeg,gallery17.jpeg,gallery18.jpeg,gallery19.jpeg,gallery20.jpeg" | split: "," %}
    
    {% assign gallery_titles = "Ecology of Time II,Ecology of Time I,Cherry Table,Cherry Table Detail,Cherry Table Craftsmanship,Cherry Table Joinery,Cherry Table Grain,Cherry Table Finish,Cherry Table Profile,Cherry Table Underside,Cherry Table Complete,Wood Wallet,Wood Art Sculpture,Wood Carving Detail,Wood Carving Art,Wood Carving Craft,Wood Carving Design,Wood Carving Form,Wood Carving Texture,Wood Carving Profile,Wood Carving Complete,Wood Carving Finish" | split: "," %}
    
    {% for image in gallery_images %}
      {% assign index = forloop.index0 %}
      {% assign title = gallery_titles[index] | default: "Wood Art by Jesse James Boyes" %}
      <div class="gallery-item">
        <img src="/assets/images/gallery/{{ image }}" 
             alt="{{ title }}" 
             title="{{ title }}"
             loading="lazy"
             onclick="openLightbox(this.src, '{{ title }}')">
        <div class="gallery-overlay">
          <div class="gallery-title">{{ title }}</div>
        </div>
      </div>
    {% endfor %}
  </div>
</section>

<!-- Lightbox -->
<div id="lightbox" class="lightbox" style="display: none;">
  <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
  <button class="lightbox-btn lightbox-prev" onclick="changeImage(-1)" aria-label="Previous image">&#10094;</button>
  <div class="lightbox-content">
    <img src="" alt="" id="lightbox-image">
    <div class="lightbox-caption" id="lightbox-caption"></div>
  </div>
  <button class="lightbox-btn lightbox-next" onclick="changeImage(1)" aria-label="Next image">&#10095;</button>
</div>

<style>
/* Dark Mode Gallery Styles */
body.newsletter-dark-theme {
  background-color: #1a1a1a !important;
  color: #e0e0e0 !important;
}

body.newsletter-dark-theme .main-content {
  background: #1a1a1a;
}

body.newsletter-dark-theme .page-header {
  background: #1a1a1a;
}

body.newsletter-dark-theme .page-title,
body.newsletter-dark-theme .page-subtitle {
  color: #faf8f5 !important;
}

/* Gallery Links */
.gallery-links {
  text-align: center;
  margin: 3rem 0;
}

.gallery-links .cta-button,
.gallery-links .button {
  display: inline-block;
  background: linear-gradient(135deg, #7a8471, #8b5a3c);
  color: #faf8f5;
  padding: 1rem 2rem;
  margin: 0.5rem;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.gallery-links .cta-button:hover,
.gallery-links .button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  color: #faf8f5;
}

/* Gallery Container */
.gallery-container {
  background: #1a1a1a;
  padding: 2rem 0;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
}

.gallery-item {
  position: relative;
  background: #2a2a2a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  border: 1px solid #444;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
  border-color: #7a8471;
}

.gallery-item img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.3s ease;
  filter: brightness(0.9) contrast(1.1);
}

.gallery-item:hover img {
  transform: scale(1.05);
  filter: brightness(1) contrast(1.2);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  padding: 2rem 1.5rem 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-title {
  color: #faf8f5;
  font-weight: 600;
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

/* Introduction */
.gallery-intro p.lead {
  color: #d0d0d0;
  font-size: 1.3rem;
  line-height: 1.7;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  text-align: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
}

.lightbox-caption {
  color: #faf8f5;
  margin-top: 1.5rem;
  font-size: 1.3rem;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #faf8f5;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 2001;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease;
}

.lightbox-close:hover {
  opacity: 0.7;
}

.lightbox-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(122, 132, 113, 0.8);
  color: #faf8f5;
  border: none;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.lightbox-btn:hover {
  background: rgba(122, 132, 113, 1);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-prev {
  left: 20px;
}

.lightbox-next {
  right: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
  
  .gallery-item img {
    height: 250px;
  }
  
  .gallery-links .cta-button,
  .gallery-links .button {
    display: block;
    margin: 1rem auto;
    max-width: 280px;
  }
  
  .lightbox-btn {
    padding: 0.8rem 1rem;
    font-size: 1.5rem;
  }
  
  .lightbox-close {
    font-size: 2rem;
    top: 15px;
    right: 20px;
  }
}

@media (max-width: 480px) {
  .gallery-item img {
    height: 220px;
  }
  
  .gallery-title {
    font-size: 1.1rem;
  }
  
  .lightbox-caption {
    font-size: 1.1rem;
  }
  
  .lightbox-btn {
    padding: 0.6rem 0.8rem;
    font-size: 1.2rem;
  }
}
</style> 