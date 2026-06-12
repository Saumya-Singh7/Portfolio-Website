// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form Submission Handler
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // Simple alert to mimic sending a message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset the form
    form.reset();
});