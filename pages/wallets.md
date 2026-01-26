---
layout: page
title: Wood Wallets
permalink: /wallets/
body_class: 'wallets-page'
---

<section id="wallets">
    <div class="wallet-container">
        <!-- Gallery Section -->
        <div class="wallet-gallery">
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
        </div>

        <!-- Content Section -->
        <div class="wallet-content">
            <h2>Handcrafted Excellence</h2>
            <p class="subtitle">Premium hardwood wallets by Jesse Carver</p>
            
            <div class="product-details">
                <p>Each wallet is meticulously crafted from premium hardwoods including padauk, birdseye maple, walnut, and cherry. The high-quality elastic securely holds 1-18 cards while the genuine leather cash holder provides effortless access.</p>
                <p>Compact and elegant, these wallets fit perfectly in your front pocket. Over 50 satisfied customers have experienced the luxury of carrying a piece of functional art.</p>
            </div>

            <div class="testimonial">
                <blockquote>
                    "I really like the size and shape of the wallet, which is especially low profile. It's way less cumbersome than my previous wallet."
                </blockquote>
                <cite>— Fabio Bollinger</cite>
            </div>

            <div class="woods-section">
                <h3>Available Woods</h3>
                <ul class="woods-list">
                    <li>Padauk</li>
                    <li>Birdseye Maple</li>
                    <li>Walnut</li>
                    <li>Cherry</li>
                </ul>
            </div>

            <div class="guarantee">
                <p><strong>Three-year craftsmanship guarantee.</strong> If any part of the wallet needs repair, Jesse will repair it for free.</p>
            </div>

            <div class="pricing">
                <div class="price">$200 USD</div>
                <p class="availability">Final collection of 25 wallets</p>
                <p class="contact">To order, email jesse@thelivinginternet.com</p>
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
function changeMainImage(thumbnail) {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

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
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    else if (currentImageIndex >= images.length) currentImageIndex = 0;
    document.getElementById('lightbox-image').src = images[currentImageIndex];
}

document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
});
</script>

<style>
/* Wallets Page Styles */
.wallets-page {
  background-color: #0d0d0d;
}

.wallets-page .main-content {
  background: #0d0d0d;
}

.wallets-page .page-header {
  background: #0d0d0d;
  padding: 2rem 1rem;
}

.wallets-page .page-header .page-title {
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  color: #fafafa;
}

@media (min-width: 768px) {
  .wallets-page .page-header {
    padding: 3rem 2rem;
  }
  .wallets-page .page-header .page-title {
    font-size: 2rem;
    letter-spacing: 0.1em;
  }
}

/* Main Container */
#wallets {
  padding: 1rem;
  background-color: #0d0d0d;
}

@media (min-width: 768px) {
  #wallets {
    padding: 2rem;
  }
}

/* Layout Container */
.wallet-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 900px) {
  .wallet-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }
}

/* Gallery Section */
.wallet-gallery {
  width: 100%;
}

@media (min-width: 900px) {
  .wallet-gallery {
    position: sticky;
    top: 100px;
  }
}

.main-image-container {
  margin-bottom: 1rem;
  overflow: hidden;
}

#main-image {
  width: 100%;
  height: auto;
  aspect-ratio: 4/3;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  filter: brightness(0.95);
}

#main-image:hover {
  filter: brightness(1);
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

@media (min-width: 480px) {
  .thumbnail-grid {
    gap: 0.75rem;
  }
}

.thumbnail {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  filter: brightness(0.7);
}

.thumbnail:hover {
  filter: brightness(0.9);
}

.thumbnail.active {
  border-color: #606060;
  filter: brightness(1);
}

/* Content Section */
.wallet-content {
  color: #a0a0a0;
}

.wallet-content h2 {
  font-size: 1.5rem;
  color: #fafafa;
  margin-bottom: 0.25rem;
  font-weight: 300;
  letter-spacing: 0.05em;
}

@media (min-width: 768px) {
  .wallet-content h2 {
    font-size: 1.75rem;
  }
}

.wallet-content .subtitle {
  font-size: 0.95rem;
  color: #707070;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.product-details {
  margin-bottom: 1.5rem;
}

.product-details p {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: #909090;
}

@media (min-width: 768px) {
  .product-details p {
    font-size: 1rem;
  }
}

/* Testimonial */
.testimonial {
  background: #1a1a1a;
  padding: 1.25rem;
  border-left: 3px solid #404040;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .testimonial {
    padding: 1.5rem;
  }
}

.testimonial blockquote {
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 0.75rem 0;
  color: #909090;
  font-style: italic;
}

.testimonial cite {
  font-size: 0.85rem;
  color: #606060;
}

/* Woods Section */
.woods-section {
  margin-bottom: 1.5rem;
}

.woods-section h3 {
  font-size: 1rem;
  color: #fafafa;
  margin-bottom: 0.75rem;
  font-weight: 400;
}

.woods-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.25rem 1rem;
}

.woods-list li {
  font-size: 0.9rem;
  color: #707070;
  padding: 0.25rem 0;
}

/* Guarantee */
.guarantee {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #1a1a1a;
  border: 1px solid #252525;
}

.guarantee p {
  margin: 0;
  font-size: 0.9rem;
  color: #808080;
  text-align: center;
}

.guarantee strong {
  color: #a0a0a0;
}

/* Pricing */
.pricing {
  text-align: center;
  padding: 1.5rem 1rem;
  background: #1a1a1a;
  border: 1px solid #252525;
}

@media (min-width: 768px) {
  .pricing {
    padding: 2rem;
  }
}

.price {
  font-size: 1.75rem;
  font-weight: 300;
  color: #fafafa;
  margin-bottom: 0.25rem;
  letter-spacing: 0.05em;
}

@media (min-width: 768px) {
  .price {
    font-size: 2rem;
  }
}

.availability {
  font-size: 0.9rem;
  color: #606060;
  margin-bottom: 1rem;
  font-style: italic;
}

.contact {
  font-size: 0.85rem;
  color: #505050;
  margin: 0;
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
