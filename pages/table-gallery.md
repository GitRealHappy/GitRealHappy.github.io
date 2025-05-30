---
layout: page
title: The Solar Rays Coffee Table - Oakmoss Woodcraft
permalink: /table-gallery/
custom_js: ['gallery.js']
body_class: 'newsletter-dark-theme'
---

<section class="table-intro">
    <h1>The Solar Rays Coffee Table</h1>
    <p>A table that transforms a living area into a serene sanctuary. The Solar Rays coffee table is handcarved from the wood of a cherry tree and designed through a contemplative relationship between the artist and medium.</p>
    <p>I crafted this table over the course of an entire year. This one of a kind table honors the unique grain of cherry wood, capturing the essence of sunlight within its spiraling design. Some summer days I brought the tabletop to a nearby park to work on the carving, contemplating photosynthesis.</p>
    <p>Inspired by the philosophy of "wu wei"—effortless action—the top was carved without machines or measurements, using only a pencil and carving knives. Going with the Tao. If you value unique, handcrafted furniture that adds subtle sophistication to your living space, the Solar Rays coffee table is the perfect addition. It's not just a timeless piece of furniture, it's a work of art that invites tranquility and appreciation for nature's transient-yet-eternal beauty.</p>
    <p>I wrote a newsletter about the process of carving the tabletop. You can read it <a href="/unblockedcarver/issue-2/">here</a>.</p>
</section>

<section class="gallery-container">
    <div class="gallery-grid">
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
        <a href="mailto:jesse.boyes@oakmosswoodcraft.com?subject=Solar%20Rays%20Coffee%20Table%20Inquiry&body=I%20am%20interested%20in%20learning%20more%20about%20the%20Solar%20Rays%20Coffee%20Table.">
            <button class="cta-button">Inquire About This Table</button>
        </a>
        <p class="cta-note"><i>Serious inquiries only</i></p>
    </div>
    <p>Priced at $7,500 USD, the Solar Rays coffee table is an investment in quality and artistry to be cherished for generations. Experience its elegance firsthand by contacting us at <a href="tel:778-241-5956">778-241-5956</a>. We welcome discerning buyers who appreciate the blend of craftsmanship and natural beauty that the Solar Rays table embodies.</p>
</section>

<!-- Lightbox Modal -->
<div id="lightbox" style="display: none;">
    <span class="close" onclick="closeLightbox()">&times;</span>
    <button id="prevBtn" onclick="changeImage(-1)">&#10094;</button>
    <img id="lightbox-image" src="" alt="Lightbox image">
    <button id="nextBtn" onclick="changeImage(1)">&#10095;</button>
    <div id="lightbox-caption"></div>
</div>

<style>
/* Dark Mode Table Gallery Styles */
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

/* Dark Table Introduction */
.table-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2c3e34, #7a8471);
  margin: 3rem 2rem;
  border: 2px solid #444;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.table-intro h1 {
  font-size: 2.8rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #faf8f5;
  display: none; /* Hide redundant title */
}

.table-intro p {
  max-width: 800px;
  width: 100%;
  margin: 1.5rem 0;
  line-height: 1.7;
  font-size: 1.2rem;
  color: #e0e0e0;
  text-align: center;
}

.table-intro a {
  color: #e6c89e;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid #e6c89e;
  transition: all 0.3s ease;
  padding-bottom: 2px;
}

.table-intro a:hover {
  color: #f4d799;
  border-bottom-color: #f4d799;
  text-decoration: none;
}

/* Dark Gallery Container */
.gallery-container {
  padding: 4rem 2rem;
  background: #2a2a2a;
  margin: 3rem 2rem;
  border: 2px solid #444;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  border: 1px solid #555;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6);
  border-color: #7a8471;
}

.gallery-item img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  filter: brightness(0.9) contrast(1.1);
}

.gallery-item img:hover {
  transform: scale(1.05);
  filter: brightness(1) contrast(1.2);
}

/* Dark Closing Section */
.closing-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2c3e34, #7a8471);
  margin: 3rem 2rem;
  border: 2px solid #444;
  box-sizing: border-box;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.closing-section p {
  max-width: 800px;
  margin: 2rem auto;
  line-height: 1.7;
  font-size: 1.2rem;
  color: #e0e0e0;
}

.closing-section a {
  color: #e6c89e;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 2px solid #e6c89e;
  transition: all 0.3s ease;
  padding-bottom: 2px;
}

.closing-section a:hover {
  color: #f4d799;
  border-bottom-color: #f4d799;
  text-decoration: none;
}

.cta-container {
  margin: 3rem 0;
}

.cta-button {
  background: #faf8f5;
  color: #2c3e34;
  border: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  display: inline-block;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  color: #2c3e34;
  text-decoration: none;
}

.cta-note {
  margin-top: 1rem;
  font-style: italic;
  color: #bbb;
  font-size: 0.95rem;
}

/* Dark Lightbox Styles */
#lightbox {
  display: none;
  position: fixed;
  z-index: 1000;
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
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
}

#lightbox-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #faf8f5;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 80%;
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #faf8f5;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease;
}

.close:hover {
  opacity: 0.7;
}

#prevBtn, #nextBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(122, 132, 113, 0.8);
  color: #faf8f5;
  border: none;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

#prevBtn:hover, #nextBtn:hover {
  background: rgba(122, 132, 113, 1);
  transform: translateY(-50%) scale(1.1);
}

#prevBtn {
  left: 20px;
}

#nextBtn {
  right: 20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .table-intro, .gallery-container, .closing-section {
    margin: 2rem 1rem;
    padding: 2.5rem 1.5rem;
  }
  
  .table-intro h1 {
    font-size: 2.2rem;
  }
  
  .table-intro p, .closing-section p {
    font-size: 1.1rem;
  }
  
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .gallery-item img {
    height: 280px;
  }
  
  #lightbox-image {
    max-width: 95%;
    max-height: 85%;
  }
  
  #prevBtn, #nextBtn {
    font-size: 1.5rem;
    padding: 0.8rem 1rem;
  }
  
  .close {
    top: 15px;
    right: 20px;
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .table-intro h1 {
    font-size: 1.8rem;
  }
  
  .table-intro p, .closing-section p {
    font-size: 1rem;
  }
  
  .gallery-item img {
    height: 250px;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
  
  #prevBtn, #nextBtn {
    font-size: 1.2rem;
    padding: 0.6rem 0.8rem;
  }
  
  .close {
    font-size: 1.8rem;
    top: 10px;
    right: 15px;
  }
}
</style> 