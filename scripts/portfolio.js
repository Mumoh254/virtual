
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mainNavbar = document.getElementById('mainNavbar');
            const navMenu = document.getElementById('navMenu');
            
            if (mobileMenuBtn && mainNavbar && navMenu) {
                mobileMenuBtn.addEventListener('click', function() {
                    mainNavbar.classList.toggle('active');
                    const icon = mainNavbar.classList.contains('active') ? 'times' : 'bars';
                    this.innerHTML = `<i class="fas fa-${icon}"></i>`;
                });
            }

            // Close menu when clicking on links
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function() {
                    if (mainNavbar && mainNavbar.classList.contains('active')) {
                        mainNavbar.classList.remove('active');
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
                // Adjust for relative paths in portfolio.html
                let actualLinkPath = linkPath;
                if (linkPath.startsWith('./pages/')) {
                    actualLinkPath = linkPath.replace('./pages/', '');
                }

                if (actualLinkPath === path || (path === '' && actualLinkPath === 'index.html')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
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
        });



		  const images = [
                '../images/virtualreality.jpg',
    '../images/banner.jpg',
    '../images/event 1.jpg',
      '../images/event 2.jpg',
        '../images/event 3.jpg',
    '../images/event 4.jpg',
    '../images/event 5.jpg',
       '../images/event 6.jpg'
  ];
const intro = document.querySelector('.portfolio-item.intro-item');
  let index = 0;

  function updateBackground() {
    intro.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
  }

  updateBackground(); 
  setInterval(updateBackground, 6000); 