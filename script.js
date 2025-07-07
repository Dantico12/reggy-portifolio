
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navContainer = document.querySelector('.nav-container');
            if (window.scrollY > 50) {
                navContainer.classList.add('scrolled');
            } else {
                navContainer.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        // Reuse the existing 'hamburger' variable
                hamburger.addEventListener('click', function() {
                    mobileMenu.classList.toggle('active');
                    
                    // Animate hamburger icon
                    hamburger.classList.toggle('active');
                    document.querySelector('.line1').classList.toggle('rotate-down');
                    document.querySelector('.line2').classList.toggle('hide');
                    document.querySelector('.line3').classList.toggle('rotate-up');
                });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    // Close mobile menu if open
                    mobileMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.querySelector('.line1').classList.remove('rotate-down');
                    document.querySelector('.line2').classList.remove('hide');
                    document.querySelector('.line3').classList.remove('rotate-up');
                    
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
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            document.querySelectorAll('.nav-links a, .mobile-links a').forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Hamburger animation classes
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
function scrollToContact() {
    // In a real site, this would scroll to the contact section
    alert("Booking feature would open here in a complete site");
}

// Add subtle animations to decorations
document.addEventListener('DOMContentLoaded', function() {
    const decorations = document.querySelectorAll('.hero-decoration');
    
    decorations.forEach((dec, index) => {
        // Randomize animation duration
        const duration = 5 + Math.random() * 5;
        dec.style.animationDuration = `${duration}s`;
        
        // Randomize delay
        const delay = Math.random() * 5;
        dec.style.animationDelay = `${delay}s`;
    });
});
        // Portfolio filter functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterBtns.forEach(b => b.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    
                    portfolioItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Animation on scroll
            const portfolioItemsToAnimate = document.querySelectorAll('.portfolio-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, { threshold: 0.1 });
            
            portfolioItemsToAnimate.forEach(item => {
                observer.observe(item);
            });
        });

  // Service card interaction
  const serviceCards = document.querySelectorAll('.service-card');
  const serviceBtns = document.querySelectorAll('.service-btn');
  
  serviceCards.forEach(card => {
      card.addEventListener('click', function(e) {
          if (!e.target.classList.contains('service-btn')) {
              this.classList.toggle('active');
          }
      });
  });
  
  serviceBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
          e.stopPropagation();
          alert("Thank you for your interest! You'll be redirected to the booking form.");
          document.getElementById('contact').scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  // Scroll to contact
  function scrollToContact() {
      document.getElementById('contact').scrollIntoView({
          behavior: 'smooth'
      });
  }
  
  // Add subtle animations on scroll
  document.addEventListener('DOMContentLoaded', function() {
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.opacity = 1;
                  entry.target.style.transform = 'translateY(0)';
              }
          });
      }, observerOptions);
      
      // Animate sections when they come into view
      document.querySelectorAll('section').forEach(section => {
          section.style.opacity = 0;
          section.style.transform = 'translateY(20px)';
          section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          observer.observe(section);
      });
  });
  
        // Simple animation trigger
        document.addEventListener('DOMContentLoaded', function() {
            const contactElements = document.querySelectorAll('#contact .contact-header, #contact .contact-info, #contact .contact-form-container');
            
            setTimeout(() => {
                contactElements.forEach(el => {
                    el.style.opacity = 1;
                    el.style.transform = 'translate(0)';
                });
            }, 300);
        });
    
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
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
        
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger icon
            hamburger.classList.toggle('active');
            document.querySelector('.line1').classList.toggle('rotate-down');
            document.querySelector('.line2').classList.toggle('hide');
            document.querySelector('.line3').classList.toggle('rotate-up');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    // Close mobile menu if open
                    mobileMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.querySelector('.line1').classList.remove('rotate-down');
                    document.querySelector('.line2').classList.remove('hide');
                    document.querySelector('.line3').classList.remove('rotate-up');
                    
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
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            document.querySelectorAll('.nav-links a, .mobile-links a').forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Portfolio item animations
        window.addEventListener('scroll', function() {
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            portfolioItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if(itemTop < windowHeight * 0.75) {
                    item.classList.add('animate');
                }
            });
        });