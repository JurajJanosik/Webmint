document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const header = document.getElementById('main-header');
    const translatableElements = document.querySelectorAll('[data-sk]');
    
    let currentLang = 'sk';

    // 1. Prepinanie jazykov
    langBtn.addEventListener('click', () => {
        if (currentLang === 'sk') {
            translatableElements.forEach(el => {
                el.textContent = el.getAttribute('data-en');
            });
            langBtn.textContent = 'SK';
            currentLang = 'en';
        } else {
            translatableElements.forEach(el => {
                el.textContent = el.getAttribute('data-sk');
            });
            langBtn.textContent = 'EN';
            currentLang = 'sk';
        }
    });

    // 2. Skrolovací efekt pre header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Mobilné menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Animácia hamburgera
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(7px, 7px)' : 'none';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : 'none';
    });

    // Zatvorenie menu po kliknutí na link (pre mobil)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});