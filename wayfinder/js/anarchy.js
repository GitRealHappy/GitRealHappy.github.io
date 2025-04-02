// Show the popup modal when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('popup-modal').style.display = 'block';
});

// Function to close the modal
function closeModal() {
    document.getElementById('popup-modal').style.display = 'none';
}

// Form handling functions
function openSignupForm() {
    document.getElementById('signup-modal').style.display = 'block';
}

function closeSignupForm() {
    document.getElementById('signup-modal').style.display = 'none';
    const formMessage = document.getElementById('form-message');
    if (formMessage) {
        formMessage.style.display = 'none';
    }
    document.getElementById('signup-form').reset();
}

// Add a function to handle form submission
function formSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;
    const submitButton = form.querySelector('.form-submit');
    
    // Create message div if it doesn't exist
    let messageDiv = document.getElementById('form-message');
    if (!messageDiv) {
        messageDiv = document.createElement('div');
        messageDiv.id = 'form-message';
        form.appendChild(messageDiv);
    }

    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    // Collect form data
    const formData = new FormData(form);

    // Submit the form data using fetch
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(text => {
        // Check if the response indicates success
        if (text.includes('success') || text.includes('Success')) {
            // Show a success message
            messageDiv.textContent = 'Your journey has begun! Check your email for the first waypoint.';
            messageDiv.className = 'form-message success';
            messageDiv.style.display = 'block';

            // Reset the form
            form.reset();

            // Close the form after a short delay
            setTimeout(() => {
                closeSignupForm();
            }, 3000);
        } else {
            // Show an error message
            messageDiv.textContent = 'An error occurred: ' + text;
            messageDiv.className = 'form-message error';
            messageDiv.style.display = 'block';
        }
    })
    .catch(error => {
        // Show an error message
        messageDiv.textContent = 'An error occurred. Please try again.';
        messageDiv.className = 'form-message error';
        messageDiv.style.display = 'block';
        console.error('Error:', error);
    })
    .finally(() => {
        // Re-enable the submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Begin Journey';
    });
}

// Add form submission event listener when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    if (form) {
        form.addEventListener('submit', formSubmit);
    }
});

// Close modal if clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('signup-modal');
    if (event.target === modal) {
        closeSignupForm();
    }
} 