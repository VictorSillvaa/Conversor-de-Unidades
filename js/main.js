document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Controle do Ano Automático no Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Lógica da Navbar Responsiva (Hamburger Menu)
    const toggleBtn = document.querySelector('.navbar__toggle');
    const navMenu = document.querySelector('.navbar__menu');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
            
            toggleBtn.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('navbar__menu--active');
        });

        // Fechamento prático do menu ao pressionar a tecla 'Escape'
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('navbar__menu--active')) {
                navMenu.classList.remove('navbar__menu--active');
                toggleBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // 3. Desafio Extra: Efeito de Scroll na Header (Altera padding/sombra)
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
});