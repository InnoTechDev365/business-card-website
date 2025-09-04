// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    navbar.classList.toggle('menu-open');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on menu items
const menuItems = document.querySelectorAll('.menu-items a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
        navbar.classList.remove('menu-open');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
        navbar.classList.remove('menu-open');
        document.body.style.overflow = '';
    }
});

// Gallery Category Switching
function showCategory(category) {
    // Hide all categories
    const categories = document.querySelectorAll('.gallery-category');
    categories.forEach(cat => cat.classList.remove('active'));
    
    // Show selected category
    const selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.classList.add('active');
    }
    
    // Update navigation buttons
    const navButtons = document.querySelectorAll('.gallery-nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`[onclick="showCategory('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(imageSrc, title, description) {
    lightboxImage.src = imageSrc;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;
    lightboxDescription.textContent = description;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Lightbox event listeners
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe gallery items and other elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.gallery-item, .bio-paragraph, .contact-item');
    elementsToObserve.forEach(el => observer.observe(el));
});

// Set active navigation item based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.menu-items a');
    
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});