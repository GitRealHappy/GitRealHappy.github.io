---
layout: page
title: The Solar Rays Coffee Table
permalink: /table-gallery/
custom_js: ['gallery.js']
body_class: 'table-gallery-page'
---

<section class="table-intro">
    <p>A table that transforms a living area into a serene sanctuary. The Solar Rays coffee table is handcarved from the wood of a cherry tree and designed through a contemplative relationship between the artist and medium.</p>
    <p>I crafted this table over the course of an entire year. This one of a kind table honors the unique grain of cherry wood, capturing the essence of sunlight within its spiraling design. Some summer days I brought the tabletop to a nearby park to work on the carving, contemplating photosynthesis.</p>
    <p>Inspired by the philosophy of "wu wei", or effortless action, the top was carved without machines or measurements, using only a pencil and carving knives. Going with the Tao.</p>
</section>

<section class="table-gallery-container">
    <div class="table-gallery-grid">
        <div class="gallery-item">
            <img src="/assets/images/gallery/gallery1.jpeg" alt="Cherry Sun Table - Full View" onclick="openLightbox(this.src);">
        </div>
        <div class="gallery-item">
            <img src="/assets/images/gallery/gallery2.jpeg" alt="Cherry Sun Table - Side Angle" onclick="openLightbox(this.src);">
        </div>
        <div class="gallery-item">
            <img src="/assets/images/gallery/gallery3.jpeg" alt="Cherry Sun Table - Close-up Detail" onclick="openLightbox(this.src);">
        </div>
        <div class="gallery-item">
            <img src="/assets/images/gallery/gallery4.jpeg" alt="Cherry Sun Table - Detailed Top View" onclick="openLightbox(this.src);">
        </div>
        <div class="gallery-item">
            <img src="/assets/images/gallery/gallery5.jpeg" alt="Cherry Sun Table - Living Room Setting" onclick="openLightbox(this.src);">
        </div>
        <div class="gallery-item">
            <img src="/assets/images/gallery/gallery6.jpeg" alt="Cherry Sun Table - Artistic Perspective" onclick="openLightbox(this.src);">
        </div>
        <div class="gallery-item">
            <img src="/assets/images/gallery/gallery7.jpeg" alt="Cherry Sun Table - Natural Light" onclick="openLightbox(this.src);">
        </div>
    </div>
</section>

<section class="closing-section">
    <div class="cta-container">
        <a href="mailto:jesse@thelivinginternet.com?subject=Solar%20Rays%20Coffee%20Table%20Inquiry&body=I%20am%20interested%20in%20learning%20more%20about%20the%20Solar%20Rays%20Coffee%20Table." class="inquire-btn">
            Inquire About This Table
        </a>
        <p class="cta-note">Serious inquiries only</p>
    </div>
    <p class="price-info">Priced at $7,500 USD, the Solar Rays coffee table is an investment in quality and artistry to be cherished for generations.</p>
</section>

<!-- Lightbox Modal -->
<div id="lightbox" style="display: none;">
    <span class="close" onclick="closeLightbox()">&times;</span>
    <button id="prevBtn" onclick="changeImage(-1)">&#10094;</button>
    <img id="lightbox-image" src="" alt="Lightbox image">
    <button id="nextBtn" onclick="changeImage(1)">&#10095;</button>
</div>

<style>
/* Table Gallery Page Styles */
.table-gallery-page {
  background-color: #0d0d0d;
}

.table-gallery-page .main-content {
  background: #0d0d0d;
}

.table-gallery-page .page-header {
  background: #0d0d0d;
  padding: 2rem 1rem;
}

.table-gallery-page .page-header .page-title {
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  color: #fafafa;
}

@media (min-width: 768px) {
  .table-gallery-page .page-header {
    padding: 3rem 2rem;
  }
  .table-gallery-page .page-header .page-title {
    font-size: 2rem;
    letter-spacing: 0.1em;
  }
}

/* Table Introduction */
.table-intro {
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.table-intro p {
  margin: 0 0 1.5rem;
  line-height: 1.7;
  font-size: 1rem;
  color: #a0a0a0;
  text-align: center;
}

@media (min-width: 768px) {
  .table-intro {
    padding: 3rem 2rem;
  }
  .table-intro p {
    font-size: 1.1rem;
  }
}

/* Gallery Container */
.table-gallery-container {
  padding: 1rem 0.5rem 2rem;
  background: #0d0d0d;
}

.table-gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 480px) {
  .table-gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 0 0.5rem;
  }
}

@media (min-width: 768px) {
  .table-gallery-container {
    padding: 2rem 1rem 3rem;
  }
  .table-gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

.table-gallery-grid .gallery-item {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
}

.table-gallery-grid .gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: brightness(0.9);
}

.table-gallery-grid .gallery-item:hover img {
  transform: scale(1.03);
  filter: brightness(1);
}

/* Closing Section */
.closing-section {
  padding: 2rem 1rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-container {
  margin-bottom: 2rem;
}

.inquire-btn {
  display: inline-block;
  background: transparent;
  color: #a0a0a0;
  border: 1px solid #303030;
  padding: 0.875rem 1.5rem;
  font-size: 0.85rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
}

.inquire-btn:hover {
  background: #1a1a1a;
  color: #ffffff;
  border-color: #404040;
}

@media (min-width: 768px) {
  .inquire-btn {
    padding: 1rem 2rem;
    font-size: 0.9rem;
    letter-spacing: 0.1em;
  }
}

.cta-note {
  margin-top: 0.75rem;
  font-style: italic;
  color: #505050;
  font-size: 0.85rem;
}

.price-info {
  color: #606060;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .closing-section {
    padding: 3rem 2rem;
  }
  .price-info {
    font-size: 1rem;
  }
}

/* Lightbox Styles */
#lightbox {
  display: none;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  align-items: center;
  justify-content: center;
}

#lightbox.active {
  display: flex;
}

#lightbox-image {
  max-width: 95%;
  max-height: 85%;
  object-fit: contain;
}

@media (min-width: 768px) {
  #lightbox-image {
    max-width: 90%;
    max-height: 90%;
  }
}

.close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #606060;
  font-size: 1.75rem;
  cursor: pointer;
  z-index: 2001;
  transition: color 0.2s ease;
  padding: 0.5rem;
}

.close:hover {
  color: #ffffff;
}

@media (min-width: 768px) {
  .close {
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
  }
}

#prevBtn, #nextBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  color: #a0a0a0;
  border: none;
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

#prevBtn:hover, #nextBtn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

#prevBtn {
  left: 0.5rem;
}

#nextBtn {
  right: 0.5rem;
}

@media (min-width: 768px) {
  #prevBtn, #nextBtn {
    font-size: 1.5rem;
    padding: 1rem 1.25rem;
  }
  #prevBtn {
    left: 2rem;
  }
  #nextBtn {
    right: 2rem;
  }
}
</style>
