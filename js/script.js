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


// Initialize Firestore
const db = firebase.firestore();

// Function to handle the subscription process
async function subscribeNewsletter(email) {
    try {
        await db.collection('subscribers').add({
            email: email,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        document.getElementById("subscribe-btn").innerText = "Subscribed!";
    } catch (error) {
        console.error("Error subscribing to newsletter: ", error);
        document.getElementById("subscribe-btn").innerText = "Failed to Subscribe";
    }
}

// Event listener for the subscribe button
document.getElementById("subscribe-btn").addEventListener('click', function() {
    const email = document.getElementById("email-input").value;
    if (email) {
        this.innerText = "Subscribing...";
        subscribeNewsletter(email);
    } else {
        alert("Please enter a valid email address");
    }
});
