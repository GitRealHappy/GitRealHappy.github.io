// Gallery Lightbox Functionality
let currentImageIndex = 0;
let galleryImages = [];

// Touch/swipe variables
let touchStartX = 0;
let touchEndX = 0;
let minSwipeDistance = 50; // Minimum distance for a swipe

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Collect all gallery images
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryImages = Array.from(galleryItems).map(img => ({
        src: img.src,
        alt: img.alt,
        title: img.title || img.alt
    }));
    
    // Add touch event listeners to lightbox
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('touchstart', handleTouchStart, { passive: true });
        lightbox.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
});

// Handle touch start
function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

// Handle touch end and detect swipe
function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

// Detect swipe direction and navigate
function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    
    // Only trigger swipe if distance is greater than minimum
    if (Math.abs(swipeDistance) < minSwipeDistance) {
        return;
    }
    
    // Swipe right (previous image)
    if (swipeDistance > 0) {
        changeImage(-1);
    }
    // Swipe left (next image)
    else {
        changeImage(1);
    }
}

// Open lightbox with specific image
function openLightbox(imageSrc, imageTitle) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    // Find the index of the clicked image
    currentImageIndex = galleryImages.findIndex(img => img.src === imageSrc);
    
    if (currentImageIndex === -1) currentImageIndex = 0;
    
    // Set image and caption
    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxImage.alt = galleryImages[currentImageIndex].alt;
    lightboxCaption.textContent = galleryImages[currentImageIndex].title;
    
    // Show lightbox
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Focus on lightbox for accessibility
    lightbox.focus();
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Change image in lightbox
function changeImage(direction) {
    currentImageIndex += direction;
    
    // Loop around
    if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    }
    
    // Update image and caption
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxImage.alt = galleryImages[currentImageIndex].alt;
    lightboxCaption.textContent = galleryImages[currentImageIndex].title;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'flex') {
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                changeImage(-1);
                break;
            case 'ArrowRight':
                changeImage(1);
                break;
        }
    }
});

// Close lightbox when clicking outside image
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});

// Preload images for better performance
function preloadGalleryImages() {
    galleryImages.forEach(imageData => {
        const img = new Image();
        img.src = imageData.src;
    });
}

// Initialize preloading after page load
window.addEventListener('load', preloadGalleryImages); 