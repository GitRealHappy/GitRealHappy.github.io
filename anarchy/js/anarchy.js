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
    document.getElementById('form-message').style.display = 'none';
    document.getElementById('signup-form').reset();
}

// Add a function to handle form submission
function formSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;
    const submitButton = form.querySelector('.form-submit');
    const messageDiv = document.getElementById('form-message');

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
        if (text.trim() === 'Success') {
            // Show a success message
            messageDiv.textContent = 'Thanks for joining the rebellion! Check your email for next steps.';
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
        submitButton.textContent = 'Submit Application';
    });
}


// Close modal if clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('signup-modal');
    if (event.target === modal) {
        closeSignupForm();
    }
}