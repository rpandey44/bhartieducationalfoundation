/* ========================================
   Bhartidevi Educational Foundations
   Main JavaScript File
   ======================================== */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // Initialize form validations
    initVolunteerForm();
    initContactForm();
    initDonationForm();
    initGalleryLightbox();
    initScrollAnimations();
});

// ========================================
// Volunteer Form Validation
// ========================================
function initVolunteerForm() {
    const volunteerForm = document.getElementById('volunteerForm');
    if (!volunteerForm) return;

    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('volunteerName');
        const email = document.getElementById('volunteerEmail');
        const phone = document.getElementById('volunteerPhone');
        const skills = document.getElementById('volunteerSkills');

        let isValid = true;

        // Validate name
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        } else {
            clearError(name);
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(email);
        }

        // Validate phone
        const phoneRegex = /^[0-9]{10}$/;
        if (!phone.value.trim()) {
            showError(phone, 'Phone number is required');
            isValid = false;
        } else if (!phoneRegex.test(phone.value.replace(/\s+/g, ''))) {
            showError(phone, 'Please enter a valid 10-digit phone number');
            isValid = false;
        } else {
            clearError(phone);
        }

        // Validate skills
        if (!skills.value.trim()) {
            showError(skills, 'Please tell us about your skills');
            isValid = false;
        } else {
            clearError(skills);
        }

        if (isValid) {
            // Show success message (in real implementation, this would submit to server)
            alert('Thank you for your interest in volunteering! We will contact you soon.');
            volunteerForm.reset();
        }
    });
}

// ========================================
// Contact Form Validation
// ========================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contactName');
        const email = document.getElementById('contactEmail');
        const message = document.getElementById('contactMessage');

        let isValid = true;

        // Validate name
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        } else {
            clearError(name);
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(email);
        }

        // Validate message
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        } else {
            clearError(message);
        }

        if (isValid) {
            // Show success message (in real implementation, this would submit to server)
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        }
    });
}

// ========================================
// Donation Form Handler
// ========================================
function initDonationForm() {
    const donationCards = document.querySelectorAll('.donation-card');
    const donationForm = document.getElementById('donationForm');
    const selectedAmountInput = document.getElementById('selectedAmount');
    const donationAmountInput = document.getElementById('donationAmount');

    donationCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            donationCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');
            
            // Get amount from card
            const amount = this.getAttribute('data-amount');
            if (selectedAmountInput) {
                selectedAmountInput.value = amount;
            }
            if (donationAmountInput) {
                donationAmountInput.value = amount;
            }
        });
    });

    // Sync custom amount input with selectedAmount
    if (donationAmountInput) {
        donationAmountInput.addEventListener('input', function() {
            if (selectedAmountInput) {
                selectedAmountInput.value = this.value;
            }
            // Remove active class from cards when custom amount is entered
            donationCards.forEach(c => c.classList.remove('active'));
        });
    }

    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const amount = donationAmountInput ? donationAmountInput.value : (selectedAmountInput ? selectedAmountInput.value : '');
            if (amount && parseInt(amount) >= 100) {
                alert(`Thank you for your donation of ₹${amount}! This is a frontend demo. In production, this would redirect to a payment gateway.`);
                donationForm.reset();
                donationCards.forEach(c => c.classList.remove('active'));
            } else {
                alert('Please enter a donation amount (minimum ₹100) or select a donation card');
            }
        });
    }
}

// ========================================
// Gallery Lightbox
// ========================================
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content img');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (!lightbox || !lightboxContent) return;

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightboxContent.src = this.src;
            lightboxContent.alt = this.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation class
    const animatedElements = document.querySelectorAll('.stat-card, .card, .donation-card, .success-story');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========================================
// Form Helper Functions
// ========================================
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    if (formGroup) {
        formGroup.classList.add('error');
        let errorElement = formGroup.querySelector('.error');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error';
            formGroup.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }
}

function clearError(input) {
    const formGroup = input.closest('.form-group');
    if (formGroup) {
        formGroup.classList.remove('error');
        const errorElement = formGroup.querySelector('.error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }
}

