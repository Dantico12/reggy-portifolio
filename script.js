// Enhanced JavaScript with EmailJS integration for Regina's Nail Artistry Contact Form

document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS
    emailjs.init("IUB8iEInWUX1D2eEM");

    // Create custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    // Move cursor
    document.addEventListener('mousemove', function (e) {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }

        if (cursorFollower) {
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        }
    });

    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .service-card, input, textarea, select');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.backgroundColor = 'rgba(255, 110, 199, 0.5)';
            }
            if (cursorFollower) {
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.2)';
                cursorFollower.style.borderColor = 'var(--primary)';
            }
        });

        el.addEventListener('mouseleave', () => {
            if (cursor) {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor = 'rgba(255, 110, 199, 0.7)';
            }
            if (cursorFollower) {
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.borderColor = 'rgba(255, 110, 199, 0.5)';
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navContainer = document.querySelector('.nav-container');
        if (window.scrollY > 50) {
            navContainer.classList.add('scrolled');
        } else {
            navContainer.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Animate hamburger icon
            const line1 = document.querySelector('.line1');
            const line2 = document.querySelector('.line2');
            const line3 = document.querySelector('.line3');

            if (line1) line1.classList.toggle('rotate-down');
            if (line2) line2.classList.toggle('hide');
            if (line3) line3.classList.toggle('rotate-up');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (mobileMenu) mobileMenu.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');

                const line1 = document.querySelector('.line1');
                const line2 = document.querySelector('.line2');
                const line3 = document.querySelector('.line3');

                if (line1) line1.classList.remove('rotate-down');
                if (line2) line2.classList.remove('hide');
                if (line3) line3.classList.remove('rotate-up');

                // Update active link
                document.querySelectorAll('.nav-links a, .mobile-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');

                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class based on scroll position
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a, .mobile-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Portfolio filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        const serviceCards = document.querySelectorAll('.service-card');

        portfolioItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.8;

            if (itemPosition < screenPosition) {
                item.classList.add('animate');
            }
        });

        serviceCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.8;

            if (cardPosition < screenPosition) {
                card.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initialize

    // Add subtle animations to decorations
    const decorations = document.querySelectorAll('.hero-decoration, .contact-decoration');

    decorations.forEach((dec, index) => {
        // Randomize animation duration
        const duration = 5 + Math.random() * 5;
        dec.style.animationDuration = `${duration}s`;

        // Randomize delay
        const delay = Math.random() * 5;
        dec.style.animationDelay = `${delay}s`;
    });

    // Service card interaction
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 0 15px rgba(255, 110, 199, 0.7), 0 0 30px rgba(156, 39, 176, 0.5)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // ===== ENHANCED CONTACT FORM WITH FIXES =====

    // Form validation helper functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        // Remove all spaces, dashes, and parentheses
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        const patterns = [
            /^0[17]\d{8}$/,           // 0712345678 or 0112554479 (10 digits)
            /^[17]\d{8}$/,            // 712345678 or 112554479 (9 digits)
            /^254[17]\d{8}$/,         // 254712345678 (12 digits)
            /^\+254[17]\d{8}$/        // +254712345678 (13 characters)
        ];

        return patterns.some(pattern => pattern.test(cleanPhone));
    }

    function formatDateTime(datetime) {
        try {
            const date = new Date(datetime);
            if (isNaN(date.getTime())) return "Invalid Date";
            return date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (e) {
            console.error('Date formatting error:', e);
            return "Date Not Specified";
        }
    }

    function getServiceDisplayName(serviceValue) {
        const services = {
            'gel': 'Gel Manicure',
            'acrylic': 'Acrylic Extensions',
            'art': 'Nail Art Design',
            'bridal': 'Bridal Package',
            'pedicure': 'Pedicure',
            'other': 'Other Service'
        };
        return services[serviceValue] || serviceValue;
    }

    // Create loading overlay
    function createLoadingOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'loading-overlay';
        overlay.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <p>Sending your booking request...</p>
            </div>
        `;
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;

        const style = document.createElement('style');
        style.textContent = `
            .loading-content {
                text-align: center;
                color: white;
                font-size: 18px;
            }
            .loading-spinner {
                border: 4px solid #f3f3f3;
                border-top: 4px solid #ff6ec7;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        return overlay;
    }

    // Show notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;

        if (type === 'success') {
            notification.style.background = 'linear-gradient(135deg, #10ac84, #1dd1a1)';
        } else {
            notification.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a52)';
        }

        const keyframes = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;

        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = keyframes;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // Enhanced form submission with fixes
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data using form elements collection
            const formElements = contactForm.elements;
            const formData = {
                client_name: (formElements.name.value || '').trim(),
                client_email: (formElements.email.value || '').trim(),
                client_phone: (formElements.phone.value || '').trim(),
                service_type: formElements.service.value,
                preferred_date: formElements.date.value,
                client_message: (formElements.message.value || '').trim()
            };

            // Debug: Log form data to console
            console.log('Form data collected:', formData);

            // Validate form
            let isValid = true;
            let errorMessage = '';

            if (!formData.client_name) {
                isValid = false;
                errorMessage = 'Please enter your full name.';
            } else if (!validateEmail(formData.client_email)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            } else if (!validatePhone(formData.client_phone)) {
                isValid = false;
                errorMessage = 'Please enter a valid Kenyan phone number.';
            } else if (!formData.service_type) {
                isValid = false;
                errorMessage = 'Please select a service.';
            } else if (!formData.preferred_date) {
                isValid = false;
                errorMessage = 'Please select your preferred date and time.';
            } else if (isNaN(new Date(formData.preferred_date).getTime())) {
                isValid = false;
                errorMessage = 'Invalid date format selected.';
            } else if (new Date(formData.preferred_date) < new Date()) {
                isValid = false;
                errorMessage = 'Please select a future date and time.';
            }

            if (!isValid) {
                showNotification(errorMessage, 'error');
                return;
            }

            // Show loading overlay
            const loadingOverlay = createLoadingOverlay();
            document.body.appendChild(loadingOverlay);

            // Business template parameters with all required fields
            const businessTemplateParams = {
                to_name: "Regina",
                to_email: "reginahmwangi783@gmail.com",
                client_name: formData.client_name,
                client_email: formData.client_email,
                client_phone: formData.client_phone,
                service_type: getServiceDisplayName(formData.service_type),
                preferred_date: formatDateTime(formData.preferred_date),
                client_message: formData.client_message || 'No special requests provided.',
                reply_to: formData.client_email
            };

            // Debug: Log template parameters
            console.log('Template parameters:', businessTemplateParams);
            console.log('Sending business notification with params:', businessTemplateParams);

            // Send business notification email
            emailjs.send('service_jh4zvfb', 'template_a4b2pcs', businessTemplateParams)
                .then(function (response) {
                    console.log('Business notification sent successfully:', response);

                    // Now send client confirmation email
                    return sendClientConfirmation(formData);
                })
                .then(function (response) {
                    console.log('Client confirmation sent successfully:', response);

                    // Remove loading overlay
                    document.body.removeChild(loadingOverlay);

                    // Show success message
                    showNotification('🎉 Thank you! Your booking request has been sent successfully. You will receive a confirmation email shortly, and Regina will contact you within 2-4 hours to confirm your appointment.', 'success');

                    // Reset form
                    contactForm.reset();
                })
                .catch(function (error) {
                    console.error('Email send failed:', error);

                    // Remove loading overlay
                    if (document.body.contains(loadingOverlay)) {
                        document.body.removeChild(loadingOverlay);
                    }

                    // Show error message
                    showNotification('❌ Sorry, there was an error sending your request. Please try again or contact us directly at +254 797 529547.', 'error');
                });
        });
    }

    // Send confirmation email to client
    function sendClientConfirmation(formData) {
        const clientTemplateParams = {
            // Client information
            to_name: formData.client_name,
            to_email: formData.client_email,

            // Booking confirmation details
            client_name: formData.client_name,
            service_type: getServiceDisplayName(formData.service_type),
            preferred_date: formatDateTime(formData.preferred_date),

            // Business information
            business_name: 'Regina Nail Artistry',
            business_phone: '+254 797 529547',
            business_email: 'reginahmwangi783@gmail.com',

            // Email routing
            reply_to: 'reginahmwangi783@gmail.com'
        };

        console.log('Sending client confirmation with params:', clientTemplateParams);

        // Send client confirmation email
        return emailjs.send('service_jh4zvfb', 'template_8n89tnp', clientTemplateParams);
    }

    // Real-time form validation
    const formInputs = document.querySelectorAll('#name, #email, #phone, #service, #date');
    formInputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });

        input.addEventListener('input', function () {
            // Remove error styling on input
            this.style.borderColor = '';
            const errorMsg = this.parentNode.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMsg = '';

        // Remove existing error message
        const existingError = field.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        switch (field.id) {
            case 'name':
                if (!value) {
                    isValid = false;
                    errorMsg = 'Name is required';
                }
                break;
            case 'email':
                if (!value) {
                    isValid = false;
                    errorMsg = 'Email is required';
                } else if (!validateEmail(value)) {
                    isValid = false;
                    errorMsg = 'Invalid email format';
                }
                break;
            case 'phone':
                if (!value) {
                    isValid = false;
                    errorMsg = 'Phone number is required';
                } else if (!validatePhone(value)) {
                    isValid = false;
                    errorMsg = 'Invalid Kenyan phone number';
                }
                break;
            case 'service':
                if (!value) {
                    isValid = false;
                    errorMsg = 'Please select a service';
                }
                break;
            case 'date':
                if (!value) {
                    isValid = false;
                    errorMsg = 'Please select date and time';
                } else if (isNaN(new Date(value).getTime())) {
                    isValid = false;
                    errorMsg = 'Invalid date format';
                } else if (new Date(value) < new Date()) {
                    isValid = false;
                    errorMsg = 'Please select a future date';
                }
                break;
        }

        if (!isValid) {
            field.style.borderColor = '#ff6b6b';
            const errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.textContent = errorMsg;
            errorElement.style.cssText = 'color: #ff6b6b; font-size: 12px; margin-top: 5px; display: block;';
            field.parentNode.appendChild(errorElement);
        } else {
            field.style.borderColor = '#10ac84';
        }

        return isValid;
    }

    // Set minimum date to today for date input
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const minDate = today.toISOString().slice(0, 16);
        dateInput.min = minDate;
    }

    // Add business hours validation
    function validateBusinessHours(datetime) {
        const date = new Date(datetime);
        const day = date.getDay(); // 0 = Sunday, 6 = Saturday
        const hour = date.getHours();

        // Business hours: Monday-Saturday, 9 AM - 6 PM
        if (day === 0) { // Sunday
            return false;
        }

        if (hour < 9 || hour >= 18) { // Before 9 AM or after 6 PM
            return false;
        }

        return true;
    }

    // Add business hours validation to form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const preferredDate = document.getElementById('date').value;

            if (preferredDate && !validateBusinessHours(preferredDate)) {
                e.preventDefault();
                showNotification('Please select a time between 9 AM - 6 PM, Monday through Saturday.', 'error');
                return false;
            }
        });
    }
});

// Scroll to contact function
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Hamburger animation styles
const style = document.createElement('style');
style.innerHTML = `
    .rotate-down {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .rotate-up {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    .hide {
        opacity: 0;
    }
`;
document.head.appendChild(style);