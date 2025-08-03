---
layout: page
title: Oakmoss Wood Wallets
permalink: /wallets/
custom_js: ['gallery.js']
body_class: 'newsletter-dark-theme'
---

<section id="wallets">
    
    <div class="wallet-container">
        <!-- Gallery Section - Left Side -->
        <div class="gallery-section">
            <div class="main-image-container">
                <img id="main-image" src="/assets/images/wallets/wallet1.jpg" alt="Oakmoss Wood Wallet" onclick="openLightbox(this.src);">
            </div>
            <div class="thumbnail-grid">
                <img src="/assets/images/wallets/wallet1.jpg" alt="Padauk Wallet" class="thumbnail active" onclick="changeMainImage(this);">
                <img src="/assets/images/wallets/wallet2.jpg" alt="Padauk Wallet" class="thumbnail" onclick="changeMainImage(this);">
                <img src="/assets/images/wallets/wallet3.jpg" alt="Wallet Collection" class="thumbnail" onclick="changeMainImage(this);">
                <img src="/assets/images/wallets/IMG_20240925_115235_482.jpg" alt="Detailed View" class="thumbnail" onclick="changeMainImage(this);">
                <img src="/assets/images/wallets/IMG_20240925_115243_560.jpg" alt="Profile View" class="thumbnail" onclick="changeMainImage(this);">
                <img src="/assets/images/wallets/IMG_20240925_115248_987.jpg" alt="Card Capacity" class="thumbnail" onclick="changeMainImage(this);">
                <img src="/assets/images/wallets/IMG_20240925_115306_782.jpg" alt="Leather Detail" class="thumbnail" onclick="changeMainImage(this);">
            </div>

            <div class="testimonial-highlight">
                <blockquote>
                    "I really like the size and shape of the wallet, which is especially low profile. It's way less cumbersome than my previous wallet."
                </blockquote>
                <cite>— Fabio Bollinger, CEO Bollingerhouse</cite>
            </div>
        </div>

        <!-- Content Section - Right Side -->
        <div class="content-section">
            <h2>Handcrafted Excellence</h2>
            <p class="luxury-subtitle">Premium hardwood wallets by artisan Jesse Carver</p>
            
            <div class="product-details">
                <p>Each wallet is meticulously crafted from premium hardwoods including padauk, birdseye maple, walnut, and cherry. The high-quality elastic securely holds 1-18 cards while the genuine leather cash holder provides effortless access.</p>
                
                <p>Compact and elegant, these wallets fit perfectly in your front pocket. Over 50 satisfied customers have experienced the luxury of carrying a piece of functional art.</p>
            </div>

            <div class="woods-section">
                <h3>Available Woods:</h3>
                <ul class="woods-list">
                    <li>Padauk</li>
                    <li>Birdseye Maple</li>
                    <li>Walnut</li>
                    <li>Cherry</li>
                </ul>
            </div>

            <div class="guarantee-section">
                <p><strong>Three-year craftsmanship guarantee.</strong> Only 2 of 50+ wallets have ever needed repair.</p>
            </div>

            <div class="cta-section">
                <div class="price">$200.00 USD</div>
                <p class="final-run">Final collection of 25 wallets</p>
                <p class="contact-info">To order Oakmoss wallets, please send your request to jesse.boyes@oakmosswoodcraft.com</p>
            </div>
        </div>
    </div>
</section>

<!-- Lightbox Modal -->
<div id="lightbox" style="display: none;">
    <span class="close" onclick="closeLightbox()">&times;</span>
    <button id="prevBtn" onclick="changeImage(-1)">&#10094;</button>
    <img id="lightbox-image" src="" alt="Lightbox image">
    <button id="nextBtn" onclick="changeImage(1)">&#10095;</button>
</div>

<script>
// Gallery functionality
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Update main image
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    
    // Update active thumbnail
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Lightbox functionality
const images = [
    '/assets/images/wallets/wallet1.jpg',
    '/assets/images/wallets/wallet2.jpg',
    '/assets/images/wallets/wallet3.jpg',
    '/assets/images/wallets/IMG_20240925_115235_482.jpg',
    '/assets/images/wallets/IMG_20240925_115243_560.jpg',
    '/assets/images/wallets/IMG_20240925_115248_987.jpg',
    '/assets/images/wallets/IMG_20240925_115306_782.jpg'
];

let currentImageIndex = 0;

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    currentImageIndex = images.indexOf(imageSrc);
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    document.getElementById('lightbox-image').src = images[currentImageIndex];
}

// Close lightbox on click outside
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Close lightbox on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
</script>

<style>
/* Dark Mode Base */
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

/* Main Container */
#wallets {
  padding: 2rem;
  background-color: #1a1a1a;
  min-height: 100vh;
}

#wallets h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #faf8f5;
  font-weight: 300;
  letter-spacing: 2px;
}

/* Horizontal Layout Container */
.wallet-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  align-items: start;
}

/* Gallery Section - Left Side */
.gallery-section {
  position: sticky;
  top: 2rem;
}

.main-image-container {
  margin-bottom: 1.5rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

#main-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  filter: brightness(0.95) contrast(1.1);
}

#main-image:hover {
  transform: scale(1.02);
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

.thumbnail {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  filter: brightness(0.8) contrast(1.1);
}

.thumbnail:hover {
  border-color: #7a8471;
  transform: scale(1.05);
  filter: brightness(1) contrast(1.2);
}

.thumbnail.active {
  border-color: #e6c89e;
  filter: brightness(1) contrast(1.2);
}

/* Content Section - Right Side */
.content-section {
  padding: 2rem 0;
  color: #e0e0e0;
}

.content-section h2 {
  font-size: 2.2rem;
  color: #faf8f5;
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 1px;
}

.luxury-subtitle {
  font-size: 1.2rem;
  color: #e6c89e;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: 300;
}

.product-details {
  margin-bottom: 2.5rem;
}

.product-details p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #d0d0d0;
}

.woods-section {
  margin-bottom: 2.5rem;
}

.woods-section h3 {
  font-size: 1.3rem;
  color: #faf8f5;
  margin-bottom: 1rem;
  font-weight: 400;
}

.woods-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.woods-list li {
  font-size: 1.1rem;
  color: #e6c89e;
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
}

.testimonial-highlight {
  background: #2a2a2a;
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid #e6c89e;
  margin-bottom: 2.5rem;
}

.testimonial-highlight blockquote {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  color: #d0d0d0;
  font-style: italic;
}

.testimonial-highlight cite {
  font-size: 0.95rem;
  color: #e6c89e;
  font-weight: 500;
}

.guarantee-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: #2a2a2a;
  border-radius: 8px;
  border: 1px solid #444;
}

.guarantee-section p {
  margin: 0;
  font-size: 1rem;
  color: #d0d0d0;
  text-align: center;
}

.guarantee-section strong {
  color: #e6c89e;
}

/* CTA Section */
.cta-section {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #2c3e34, #7a8471);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.price {
  font-size: 2.5rem;
  font-weight: 300;
  color: #faf8f5;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.final-run {
  font-size: 1.1rem;
  color: #e6c89e;
  margin-bottom: 2rem;
  font-style: italic;
}

.cta-button {
  display: inline-block;
  background: #faf8f5;
  color: #2c3e34;
  text-decoration: none;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  color: #2c3e34;
}

.contact-info {
  font-size: 0.95rem;
  color: #bbb;
  margin: 0;
  font-style: italic;
}

/* Lightbox Styles */
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

#lightbox-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
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
@media (max-width: 1024px) {
  .wallet-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .gallery-section {
    position: static;
    order: 1;
  }
  
  .content-section {
    order: 2;
  }
  
  #main-image {
    height: 350px;
  }
}

@media (max-width: 768px) {
  #wallets {
    padding: 1rem;
  }
  
  #wallets h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .wallet-container {
    gap: 2rem;
  }
  
  #main-image {
    height: 300px;
  }
  
  .thumbnail-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .thumbnail {
    height: 70px;
  }
  
  .content-section {
    padding: 1rem 0;
  }
  
  .content-section h2 {
    font-size: 1.8rem;
  }
  
  .woods-list {
    grid-template-columns: 1fr;
  }
  
  .cta-section {
    padding: 2rem 1.5rem;
  }
  
  .price {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .thumbnail-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .thumbnail {
    height: 60px;
  }
  
  .content-section h2 {
    font-size: 1.6rem;
  }
  
  .luxury-subtitle {
    font-size: 1rem;
  }
  
  .cta-section {
    padding: 1.5rem 1rem;
  }
  
  .price {
    font-size: 1.8rem;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
}
</style> 