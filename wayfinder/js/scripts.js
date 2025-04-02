function openSignupForm() {
    document.getElementById('signup-modal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
}

function closeSignupForm() {
    document.getElementById('signup-modal').style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scrolling
}

window.onclick = function(event) {
    const modal = document.getElementById('signup-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    }
};

// Handle form submission and show application confirmation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            // Form will still submit to Formspree
            localStorage.setItem('formSubmitted', 'true');
            
            // Store applicant name to personalize thank you message
            const nameField = document.getElementById('name');
            if (nameField && nameField.value) {
                localStorage.setItem('applicantName', nameField.value.split(' ')[0]); // Store first name
            }
        });
    }
    
    // Check if we need to show an application confirmation (after redirect back from Formspree)
    if (localStorage.getItem('formSubmitted') === 'true' && window.location.search.includes('submitted=true')) {
        // Get stored applicant name
        const applicantName = localStorage.getItem('applicantName') || 'Creative Wayfinder';
        
        // Clear the flags
        localStorage.removeItem('formSubmitted');
        localStorage.removeItem('applicantName');
        
        // Create a custom application confirmation dialog
        createApplicationConfirmation(applicantName);
    }
});

// Create a custom confirmation dialog
function createApplicationConfirmation(name) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'application-confirmation-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '3000';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    
    // Create confirmation box
    const confirmationBox = document.createElement('div');
    confirmationBox.className = 'application-confirmation-box';
    confirmationBox.style.backgroundColor = '#F6E4CE';
    confirmationBox.style.borderRadius = '8px';
    confirmationBox.style.padding = '30px';
    confirmationBox.style.maxWidth = '500px';
    confirmationBox.style.width = '90%';
    confirmationBox.style.textAlign = 'center';
    confirmationBox.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    
    // Add content to confirmation box
    confirmationBox.innerHTML = `
        <h2 style="color: #8B4513; margin-bottom: 20px; font-family: 'Cormorant Garamond', serif;">Application Received</h2>
        <p style="margin-bottom: 15px; font-size: 16px;">Thank you, <strong>${name}</strong>, for applying to The Creative Wayfinder cohort.</p>
        <p style="margin-bottom: 15px; font-size: 16px;">Your application has been received and will be reviewed by Jesse James Boyes within 3-5 business days.</p>
        <p style="margin-bottom: 25px; font-size: 16px;">If selected, you'll receive an email with details about the next steps in the application process.</p>
        <button id="close-confirmation" style="background-color: #8B4513; color: #F6E4CE; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-weight: bold;">Return to Website</button>
    `;
    
    // Append confirmation box to overlay
    overlay.appendChild(confirmationBox);
    
    // Append overlay to body
    document.body.appendChild(overlay);
    
    // Add event listener to close button
    document.getElementById('close-confirmation').addEventListener('click', function() {
        document.body.removeChild(overlay);
    });
}