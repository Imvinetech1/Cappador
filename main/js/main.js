document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      });
    }
    
    // Hero slider functionality
    const heroSlides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    const propertyInfoBox = document.querySelector('.property-info-box');
    
    const propertyInfoData = [
      {
        title: "Prime Retail Space",
        location: "Jabi Lake Mall, Abuja"
      },
      {
        title: "Luxury Store Location",
        location: "Ceddi Plaza, Central Business District"
      },
      {
        title: "High Visibility Corner Unit",
        location: "Next Cash and Carry Mall, Jahi"
      }
    ];
    
    let currentSlide = 0;
    let slideInterval;
    
    function startSlideInterval() {
      slideInterval = setInterval(nextSlide, 5000);
    }
    
    function showSlide(index) {
      // Clear existing slides
      heroSlides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(indicator => indicator.classList.remove('active'));
      
      // Show current slide
      heroSlides[index].classList.add('active');
      indicators[index].classList.add('active');
      
      // Update property info
      if (propertyInfoBox) {
        const title = propertyInfoBox.querySelector('.property-info-title');
        const location = propertyInfoBox.querySelector('.property-info-location');
        
        if (title && location) {
          title.textContent = propertyInfoData[index].title;
          location.innerHTML = `<i class="fa-solid fa-location-dot"></i>${propertyInfoData[index].location}`;
        }
      }
      
      // Update current slide index
      currentSlide = index;
    }
    
    function nextSlide() {
      let nextIndex = currentSlide + 1;
      if (nextIndex >= heroSlides.length) {
        nextIndex = 0;
      }
      showSlide(nextIndex);
    }
    
    // Initialize slider
    if (heroSlides.length > 0) {
      showSlide(0);
      startSlideInterval();
      
      // Add click event to indicators
      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          clearInterval(slideInterval);
          showSlide(index);
          startSlideInterval();
        });
      });
    }
    
    // Testimonial slider functionality
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-nav.prev');
    const nextBtn = document.querySelector('.testimonial-nav.next');
    
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
      // Clear existing active testimonials
      testimonialSlides.forEach(slide => slide.classList.remove('active'));
      testimonialDots.forEach(dot => dot.classList.remove('active'));
      
      // Show current testimonial
      testimonialSlides[index].classList.add('active');
      testimonialDots[index].classList.add('active');
      
      // Update current testimonial index
      currentTestimonial = index;
    }
    
    function nextTestimonial() {
      let nextIndex = currentTestimonial + 1;
      if (nextIndex >= testimonialSlides.length) {
        nextIndex = 0;
      }
      showTestimonial(nextIndex);
    }
    
    function prevTestimonial() {
      let prevIndex = currentTestimonial - 1;
      if (prevIndex < 0) {
        prevIndex = testimonialSlides.length - 1;
      }
      showTestimonial(prevIndex);
    }
    
    // Initialize testimonial slider
    if (testimonialSlides.length > 0) {
      showTestimonial(0);
      
      if (prevBtn) {
        prevBtn.addEventListener('click', prevTestimonial);
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', nextTestimonial);
      }
      
      // Add click event to dots
      testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          showTestimonial(index);
        });
      });
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    const toast = document.getElementById('toast');
    const toastClose = document.querySelector('.toast-close');
    
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the form data to a server here
        
        // Show success toast
        if (toast) {
          toast.classList.add('show');
          
          // Hide toast after 5 seconds
          setTimeout(() => {
            toast.classList.remove('show');
          }, 5000);
        }
        
        // Clear form
        newsletterForm.reset();
      });
    }
    
    // Close toast on click
    if (toastClose) {
      toastClose.addEventListener('click', function() {
        toast.classList.remove('show');
      });
    }
    
    // Add scroll event to handle sticky navigation
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
    
    // Property card hover effect for touch devices
    const propertyCards = document.querySelectorAll('.property-card');
    
    propertyCards.forEach(card => {
      if ('ontouchstart' in window) {
        card.addEventListener('click', function(e) {
          if (!e.target.closest('.btn')) {
            const isActive = this.classList.contains('touch-active');
            propertyCards.forEach(c => c.classList.remove('touch-active'));
            
            if (!isActive) {
              this.classList.add('touch-active');
              e.preventDefault();
            }
          }
        });
      }
    });
    
    // Navigation scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
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
                // Close mobile menu if open
                menuToggle?.classList.remove('active');
                navMenu?.classList.remove('active');
            }
        });
    });
    
    // Property filter animation
    propertyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });
    
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }
        });
    }, {
        threshold: 0.1
    });
    
    propertyCards.forEach(card => observer.observe(card));
    
    // Newsletter form handling
    if (newsletterForm && toast) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // Here you would typically send the email to your server
            // For now, we'll just show the success message
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
            
            newsletterForm.reset();
        });
    }
    
    // Close toast on click
    if (toastClose && toast) {
        toastClose.addEventListener('click', () => {
            toast.classList.remove('show');
        });
    }
    
    // Image loading animation
    document.querySelectorAll('.property-image img').forEach(img => {
        img.style.opacity = '0';
        img.onload = function() {
            this.style.transition = 'opacity 0.5s ease';
            this.style.opacity = '1';
        };
    });
    
    // Enhanced property filtering
    const filterProperties = () => {
        const location = document.getElementById('location-filter')?.value;
        const type = document.getElementById('type-filter')?.value;
        const size = document.getElementById('size-filter')?.value;

        document.querySelectorAll('.property-card').forEach(card => {
            const cardLocation = card.querySelector('.property-location')?.textContent.toLowerCase();
            const cardType = card.querySelector('.property-features .feature:nth-child(2)')?.textContent.toLowerCase();
            const cardSize = card.querySelector('.property-features .feature:first-child')?.textContent.toLowerCase();

            const locationMatch = !location || cardLocation?.includes(location.toLowerCase());
            const typeMatch = !type || cardType?.includes(type.toLowerCase());
            const sizeMatch = !size || matchSize(cardSize, size);

            if (locationMatch && typeMatch && sizeMatch) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    };

    function matchSize(cardSize, filterSize) {
        if (!cardSize || !filterSize) return true;
        
        const size = parseInt(cardSize.match(/\d+/)?.[0] || 0);
        
        switch(filterSize) {
            case 'small':
                return size < 50;
            case 'medium':
                return size >= 50 && size <= 100;
            case 'large':
                return size > 100;
            default:
                return true;
        }
    }

    // Add filter event listeners
    document.querySelectorAll('.filter-select').forEach(select => {
        select.addEventListener('change', filterProperties);
    });

    // Initialize filters
    filterProperties();
  });
  