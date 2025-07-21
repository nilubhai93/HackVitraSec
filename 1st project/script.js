function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}





const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

function openMenu() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = 'auto';
}

menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
overlay.addEventListener('click', closeMenuFunc);

// Close menu on escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenuFunc();
    }
});

// Handle window resize
window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
        closeMenuFunc();
    }
});




// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Back to top button functionality
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
    } else {
        backToTopBtn.style.opacity = '0';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // Here you would typically redirect to search results
        }
    }
});

// Product card hover effects
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Newsletter subscription
const subscribeBtn = document.querySelector('button[style*="border-radius: 0 25px 25px 0"]');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        const emailInput = document.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, observerOptions);

// Observe all product cards and collection cards
document.querySelectorAll('.product-card, .collection-card').forEach(card => {
    observer.observe(card);
});

// Filter functionality
const filterItems = document.querySelectorAll('.filter-section li');
filterItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all filter items
        filterItems.forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');

        // Here you would typically filter the products
        console.log('Filter selected:', item.textContent);
    });
});

// Add to cart functionality (placeholder)
function addToCart(productId) {
    // Animate cart icon
    const cartIcon = document.querySelector('.header-icons a[title="Cart"]');
    cartIcon.style.animation = 'bounce 0.5s ease-in-out';

    // Show notification
    const notification = document.createElement('div');
    notification.textContent = 'Item added to cart!';
    notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #8B4513;
                color: white;
                padding: 15px 25px;
                border-radius: 25px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 1001;
                animation: slideInRight 0.3s ease-out;
            `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
        cartIcon.style.animation = '';
    }, 3000);
}

// Add bounce animation
const style = document.createElement('style');
style.textContent = `
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-10px); }
                60% { transform: translateY(-5px); }
            }
            
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            .filter-section li.active {
                color: #8B4513;
                font-weight: bold;
                background: rgba(139, 69, 19, 0.1);
                padding: 8px 15px;
                border-radius: 20px;
                margin: 5px 0;
            }
        `;
document.head.appendChild(style);

// Mobile menu toggle (if needed)
const mobileMenuToggle = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
};

// Add loading states for images
const productImages = document.querySelectorAll('.product-image');
productImages.forEach(img => {
    img.style.background = `
                linear-gradient(135deg, #f5f5f5, #e0e0e0),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f0f0f0"/><text x="50" y="50" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="12" fill="%23999">Loading...</text></svg>')
            `;
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = 'center';
});

console.log('Koskii website loaded successfully!');























const heroSection = document.getElementById("heroSection");

const images = [
    "images/slide_img/slide1.png",
    "images/slide_img/slide2.png",
    "images/slide_img/slide3.png",
    "images/slide_img/slide4.png"
];

let currentSlide = 0;
let autoSlideInterval = null;

function setBackgroundImage(index) {
    heroSection.style.backgroundImage = `url('${images[index]}')`;
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + images.length) % images.length;
    setBackgroundImage(currentSlide);
    resetAutoSlide();
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    setBackgroundImage(currentSlide);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 2000);
}

// Start after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
    setBackgroundImage(currentSlide);
    autoSlideInterval = setInterval(autoSlide, 3000);
});




















const slides = document.querySelectorAll('.slider-image');
    const dots = document.querySelectorAll('.dot');
    let currentSlide2 = 0;
    let slideInterval = setInterval(nextSlide, 3000); // 3 seconds

    function goToSlide(index) {
      slides[currentSlide2].classList.remove('active');
      dots[currentSlide2].classList.remove('active');
      currentSlide2 = index;
      slides[currentSlide2].classList.add('active');
      dots[currentSlide2].classList.add('active');

      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 3000);
    }

    function nextSlide() {
      let next = (currentSlide2 + 1) % slides.length;
      goToSlide(next);
    }


















    // navigation
     // Positioning popup menu
    document.addEventListener('DOMContentLoaded', function () {
      const navItems = document.querySelectorAll('.nav-links > li');

      navItems.forEach(item => {
        const popup = item.querySelector('.popup-menu');
        let hideTimeout;

        item.addEventListener('mouseenter', function () {
          clearTimeout(hideTimeout);
          if (popup) {
            positionPopup(item, popup);
            popup.classList.add('show');
          }
        });

        item.addEventListener('mouseleave', function () {
          if (popup) {
            hideTimeout = setTimeout(() => {
              popup.classList.remove('show');
            }, 100);
          }
        });

        if (popup) {
          popup.addEventListener('mouseenter', function () {
            clearTimeout(hideTimeout);
            popup.classList.add('show');
          });

          popup.addEventListener('mouseleave', function () {
            popup.classList.remove('show');
          });
        }
      });

      function positionPopup(item, popup) {
        const rect = item.getBoundingClientRect();
        const popupRect = popup.getBoundingClientRect();
        const viewportWidth = window.innerWidth;

        let left = rect.left + rect.width / 2 - popupRect.width / 2;

        if (left < 10) {
          left = 10;
        } else if (left + popupRect.width > viewportWidth - 10) {
          left = viewportWidth - popupRect.width - 10;
        }

        popup.style.left = left + 'px';
        popup.style.top = rect.bottom + 5 + 'px';
      }
    });