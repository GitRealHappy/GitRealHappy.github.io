let currentIndex = 0; // To keep track of the current image index
const images = []; // Array to hold image sources

function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('img');
    
    // Set the source and display the lightbox
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';

    // Find the index of the clicked image in the images array
    currentIndex = images.indexOf(imageSrc);
}

// Populate the images array when the page loads
function initializeGallery() {
    const imgElements = document.querySelectorAll('.gallery-item img');
    imgElements.forEach(img => {
        images.push(img.src); // Add each image's src to the array
    });
}

// Change the image based on the direction (-1 for previous, +1 for next)
function changeImage(direction) {
    currentIndex += direction;

    // Loop around the array
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Go to last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Go to first image
    }

    const lightboxImage = document.querySelector('#lightbox img');
    lightboxImage.src = images[currentIndex]; // Update the image source
}

// Close lightbox function
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Initialize gallery on page load
window.onload = initializeGallery;


// Adjust navigation links for blogpost pages
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const isSubdirectory = window.location.pathname.includes('/blogposts/');

    if (navLinks) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            const originalHref = link.getAttribute('href');
            if (isSubdirectory && !originalHref.startsWith('..')) {
                link.setAttribute('href', `../${originalHref}`);
            }
        });

        // Add the 'Partners' link if it does not exist
        if (!Array.from(links).some(link => link.textContent === 'Partners')) {
            const partnersLink = document.createElement('li');
            partnersLink.innerHTML = `<a href="${isSubdirectory ? '../partners.html' : 'partners.html'}">Partners</a>`;
            navLinks.appendChild(partnersLink);
        }
    } else {
        console.error('Nav links not found');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            console.log('Hamburger clicked! Nav links active:', navLinks.classList.contains('active')); // Debugging message
        });
    } else {
        console.error('Hamburger menu or nav links not found');
    }
});
