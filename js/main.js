document.addEventListener('DOMContentLoaded', () => {
    
   
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

 
    const toggleBtn = document.querySelector('.navbar__toggle');
    const navMenu = document.querySelector('.navbar__menu');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
            
            toggleBtn.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('navbar__menu--active');
        });

    
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('navbar__menu--active')) {
                navMenu.classList.remove('navbar__menu--active');
                toggleBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

 
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
});