// script.js

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth scrolling navigation
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation for newsletter signup
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    const emailInput = document.querySelector('.newsletter-email');
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    // Simple email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Interactive product interactions
const productImages = document.querySelectorAll('.product-image');
productImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.classList.add('highlight');
    });
    image.addEventListener('mouseleave', () => {
        image.classList.remove('highlight');
    });
});
