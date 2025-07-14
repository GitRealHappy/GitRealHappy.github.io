/**
 * Convention Landing Page JavaScript
 * Handles animations, interactions, and dynamic behaviors
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initParallax();
    initScrollAnimations();
    initSmoothScroll();
    initFormHandling();
    initHeaderScroll();
  });

  /**
   * Parallax Effect for Hero Background
   */
  function initParallax() {
    const heroBackground = document.querySelector('.geometric-mountains');
    if (!heroBackground) return;

    let ticking = false;

    function updateParallax() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      heroBackground.style.transform = `translateY(${rate}px)`;
      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    // Only apply parallax on desktop
    if (window.innerWidth > 768) {
      window.addEventListener('scroll', requestTick);
    }

    // Handle resize
    window.addEventListener('resize', debounce(function() {
      if (window.innerWidth <= 768) {
        window.removeEventListener('scroll', requestTick);
        heroBackground.style.transform = '';
      } else {
        window.addEventListener('scroll', requestTick);
      }
    }, 250));
  }

  /**
   * Scroll-triggered Animations
   */
  function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate children with stagger
            animateChildren(entry.target);
          }
        });
      }, observerOptions);

      sections.forEach(section => {
        observer.observe(section);
      });
    } else {
      // Fallback for older browsers
      sections.forEach(section => {
        section.classList.add('visible');
      });
    }
  }

  /**
   * Animate children elements with stagger effect
   */
  function animateChildren(parent) {
    const children = parent.querySelectorAll('.stat-card, .feature-card, .benefit-item');
    
    children.forEach((child, index) => {
      setTimeout(() => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(20px)';
        child.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, 50);
      }, index * 100);
    });
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just '#'
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          
          const headerHeight = document.querySelector('.convention-header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Form Handling
   */
  function initFormHandling() {
    // Handle Formspree form submission feedback
    const webform = document.querySelector('.webform');
    
    if (webform) {
      webform.addEventListener('submit', function(e) {
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        // Show loading state
        button.textContent = 'Sending...';
        button.disabled = true;
        
        // Formspree will handle the submission automatically
        // We just need to show feedback
        setTimeout(() => {
          button.textContent = 'Thank you!';
          button.style.background = 'var(--accent-gold)';
          
          // Reset after 3 seconds
          setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
          }, 3000);
        }, 1000);
      });
    }
  }

  /**
   * Header Scroll Effects
   */
  function initHeaderScroll() {
    const header = document.querySelector('.convention-header');
    if (!header) return;

    let lastScroll = 0;
    
    window.addEventListener('scroll', throttle(function() {
      const currentScroll = window.pageYOffset;
      
      // Add shadow on scroll
      if (currentScroll > 10) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
      }
      
      lastScroll = currentScroll;
    }, 100));
  }

  /**
   * Utility: Debounce function
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Utility: Throttle function
   */
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  /**
   * Add loading animation
   */
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });

  /**
   * Prevent form resubmission on page refresh
   */
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }

})(); 