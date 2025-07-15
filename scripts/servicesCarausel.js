
            // Carousel functionality
            const carouselSection = document.querySelector('.carousel-section');
            const carouselContainerElement = carouselSection ? carouselSection.querySelector('.carousel') : null;

            let track = null;
            let slides = [];
            let dots = [];
            let prevBtn = null;
            let nextBtn = null;

            if (carouselContainerElement) {
                track = carouselContainerElement.querySelector('.carousel-track');
                slides = Array.from(carouselContainerElement.querySelectorAll('.carousel-slide'));
                dots = Array.from(carouselContainerElement.querySelectorAll('.dot'));
                prevBtn = carouselContainerElement.querySelector('.carousel-prev');
                nextBtn = carouselContainerElement.querySelector('.carousel-next');
            }
            
            // Check if all necessary carousel elements exist before initializing
            if (track && slides.length > 0 && dots.length > 0 && prevBtn && nextBtn && carouselContainerElement) {
                let currentIndex = 0;
                let intervalId;
                const slideInterval = 5000; // 5 seconds
                
                function updateCarousel() {
                    track.style.transform = `translateX(-${currentIndex * 100}%)`;
                    
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === currentIndex);
                    });
                }
                
                function goToSlide(index) {
                    currentIndex = index;
                    updateCarousel();
                    resetAutoSlide();
                }
                
                function nextSlide() {
                    currentIndex = (currentIndex + 1) % slides.length;
                    updateCarousel();
                }
                
                function prevSlide() {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                    updateCarousel();
                }
                
                function startAutoSlide() {
                    intervalId = setInterval(nextSlide, slideInterval);
                }
                
                function resetAutoSlide() {
                    clearInterval(intervalId);
                    startAutoSlide();
                }
                
                prevBtn.addEventListener('click', () => {
                    prevSlide();
                    resetAutoSlide();
                });
                
                nextBtn.addEventListener('click', () => {
                    nextSlide();
                    resetAutoSlide();
                });
                
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        goToSlide(index);
                    });
                });
                
                // Check if carousel element itself exists before adding event listeners
                if (carouselContainerElement) { 
                    carouselContainerElement.addEventListener('mouseenter', () => {
                        clearInterval(intervalId);
                    });
                    
                    carouselContainerElement.addEventListener('mouseleave', () => {
                        startAutoSlide();
                    });
                } else {
                    console.error("Carousel container element not found for hover events.");
                }
                
                updateCarousel(); // Initialize carousel position
                startAutoSlide(); // Start auto-sliding
            } else {
                console.error("One or more carousel elements not found. Carousel will not be initialized. Details: ", {
                    track: track,
                    slidesLength: slides.length,
                    dotsLength: dots.length,
                    prevBtn: prevBtn,
                    nextBtn: nextBtn,
                    carouselContainerElement: carouselContainerElement
                });
            }

            // Add animation to service cards on scroll
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

            document.querySelectorAll('.service-card').forEach(card => {
                observer.observe(card);
            });
        

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (header) { // Ensure header exists
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 5px 20px var(--shadow-medium)'; /* Consistent shadow */
                    header.style.backgroundColor = 'rgba(10, 13, 20, 0.98)'; /* Consistent header background */
                } else {
                    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)'; /* Lighter shadow */
                    header.style.backgroundColor = 'rgba(10, 13, 20, 0.98)'; /* Consistent header background */
                }
            }
        });
