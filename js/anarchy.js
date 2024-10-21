// Show the popup modal when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('popup-modal').style.display = 'block';
});

// Function to close the modal
function closeModal() {
    document.getElementById('popup-modal').style.display = 'none';
}