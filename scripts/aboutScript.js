 
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    // Initialize slideshow
    function initSlideshow() {
        updateSlides();
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Update slides
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            
            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                slide.classList.add('prev');
            }
        });

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentSlide) {
                dot.classList.add('active');
            }
        });
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });

    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            currentSlide = index;
            updateSlides();
            slideInterval = setInterval(nextSlide, 5000);
        });
    });

    // Start slideshow
    initSlideshow();
});
        // Mobile Menu Toggle - Fixed Version
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Update button icon
    const icon = navMenu.classList.contains('active') ? 'times' : 'bars';
    mobileMenuBtn.innerHTML = `<i class="fas fa-${icon}"></i>`;
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});
        // Add scroll animation to sections
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.section, .card, .value-item, .team-member').forEach(section => {
                observer.observe(section);
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
                header.style.backgroundColor = 'rgba(18, 26, 35, 0.9)';
            } else {
                header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                header.style.backgroundColor = 'rgba(42, 53, 71, 0.5)';
            }
        });