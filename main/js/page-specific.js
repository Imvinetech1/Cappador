
document.addEventListener('DOMContentLoaded', function() {
    // Testimonial filtering on testimonials.html
    const filterButtons = document.querySelectorAll('.filter-button');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (filterButtons.length > 0 && testimonialCards.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          const filterValue = this.getAttribute('data-filter');
          
          // Show/hide testimonials based on filter
          testimonialCards.forEach(card => {
            if (filterValue === 'all') {
              card.style.display = 'block';
            } else if (card.getAttribute('data-category') === filterValue) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    }
    
    // FAQ accordion functionality for lease-process.html
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
      faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
          const faqItem = this.parentElement;
          
          // Toggle active class on the clicked item
          faqItem.classList.toggle('active');
          
          // Close other items (optional)
          document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
              item.classList.remove('active');
            }
          });
        });
      });
    }
  });
  