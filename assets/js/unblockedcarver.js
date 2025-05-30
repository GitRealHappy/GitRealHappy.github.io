/* The Unblocked Carver Newsletter JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const hiddenIssues = document.querySelectorAll('.hidden-issue');
    let currentIndex = 0;
    const itemsPerLoad = 3;

    if (loadMoreBtn && hiddenIssues.length > 0) {
        loadMoreBtn.addEventListener('click', function() {
            // Calculate how many items to show
            const itemsToShow = Math.min(itemsPerLoad, hiddenIssues.length - currentIndex);
            
            // Show the next batch of items with staggered animation
            for (let i = 0; i < itemsToShow; i++) {
                const issue = hiddenIssues[currentIndex + i];
                if (issue) {
                    setTimeout(() => {
                        issue.classList.remove('hidden-issue');
                        issue.style.opacity = '0';
                        issue.style.transform = 'translateY(20px)';
                        
                        // Trigger reflow
                        issue.offsetHeight;
                        
                        // Animate in
                        issue.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        issue.style.opacity = '1';
                        issue.style.transform = 'translateY(0)';
                    }, i * 150); // Stagger the animations
                }
            }
            
            currentIndex += itemsToShow;
            
            // Hide button if no more items
            if (currentIndex >= hiddenIssues.length) {
                setTimeout(() => {
                    loadMoreBtn.style.opacity = '0';
                    loadMoreBtn.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        loadMoreBtn.style.display = 'none';
                    }, 300);
                }, itemsToShow * 150 + 300);
            }
        });
    }
});

// Add some extra interactivity for issue cards
document.addEventListener('DOMContentLoaded', function() {
    const issueCards = document.querySelectorAll('.issue-card');
    
    issueCards.forEach(card => {
        // Add subtle animation on hover
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        // Add click analytics or other interactions here if needed
        card.addEventListener('click', function(e) {
            // Prevent default if it's just a card without a proper link
            const readMoreLink = this.querySelector('.read-more');
            if (readMoreLink && readMoreLink.getAttribute('href') === '#') {
                e.preventDefault();
                
                // You could add a modal here or redirect to the full article
                console.log('Newsletter issue clicked:', this.querySelector('.issue-title').textContent);
                
                // For now, you might want to show a "Coming Soon" message
                // or redirect to the original newsletter site
            }
        });
    });
}); 