document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const header = document.getElementById('main-header');
    const translatableElements = document.querySelectorAll('[data-sk]');
    
    let currentLang = 'sk';

    // 1. Prepínanie jazykov (vrátane placeholderov)
    langBtn.addEventListener('click', () => {
        const inputs = document.querySelectorAll('[data-sk-placeholder]');
        
        if (currentLang === 'sk') {
            translatableElements.forEach(el => el.textContent = el.getAttribute('data-en'));
            inputs.forEach(el => el.setAttribute('placeholder', el.getAttribute('data-en-placeholder')));
            langBtn.textContent = 'SK';
            currentLang = 'en';
        } else {
            translatableElements.forEach(el => el.textContent = el.getAttribute('data-sk'));
            inputs.forEach(el => el.setAttribute('placeholder', el.getAttribute('data-sk-placeholder')));
            langBtn.textContent = 'EN';
            currentLang = 'sk';
        }
    });

    // 2. Skrolovací efekt
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
    });

    // Zatvorenie menu po kliknutí na link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
});