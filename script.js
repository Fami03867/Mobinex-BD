// script.js

// Product filtering functionality
function filterProducts() {
    const filterInput = document.querySelector('#product-filter');
    const products = document.querySelectorAll('.product');

    filterInput.addEventListener('input', () => {
        const filterValue = filterInput.value.toLowerCase();
        products.forEach(product => {
            const productName = product.querySelector('.product-name').textContent.toLowerCase();
            product.style.display = productName.includes(filterValue) ? '' : 'none';
        });
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menuToggle = document.querySelector('#menu-toggle');
    const menu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

// Form submission handling
function handleFormSubmission() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        const formData = new FormData(form);
        // Handle form data (e.g., send to server)
        console.log('Form submitted', Object.fromEntries(formData));
    });
}

// Smooth scrolling navigation
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"];');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    filterProducts();
    toggleMobileMenu();
    handleFormSubmission();
    smoothScroll();
});