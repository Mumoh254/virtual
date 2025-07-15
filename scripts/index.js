
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navMenu = document.getElementById('navMenu');
            
            // Toggle mobile menu
            if (mobileMenuBtn && navMenu) {
                mobileMenuBtn.addEventListener('click', function() {
                    navMenu.classList.toggle('active');
                    // Update button icon
                    const icon = navMenu.classList.contains('active') ? 'times' : 'bars';
                    this.innerHTML = `<i class="fas fa-${icon}"></i>`;
                });
            } else {
                console.error("Mobile menu elements not found.");
            }
            
            // Close menu when clicking on links
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function() {
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        if (mobileMenuBtn) {
                            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                        }
                    }
                });
            });
            
            // Highlight current page in navigation
            const path = location.pathname.split('/').pop();
            document.querySelectorAll('.nav-link').forEach(link => {
                const linkPath = link.getAttribute('href').split('/').pop();
                if (linkPath === path || (path === '' && linkPath === 'index.html')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 5px 20px var(--shadow-medium)';
                    header.style.backgroundColor = 'rgba(10, 13, 20, 0.98)';
                } else {
                    header.style.boxShadow = 'none';
                    header.style.backgroundColor = 'rgba(10, 13, 20, 0.98)';
                }
            }
        });
