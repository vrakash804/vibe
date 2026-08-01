document.getElementById('year').textContent = new Date().getFullYear();

const navbar = document.getElementById('navbar');
const loadingScreen = document.getElementById('loadingScreen');
const typedText = document.getElementById('typedText');
const reveals = document.querySelectorAll('.reveal');

const phrases = ['AI/ML Enthusiast', 'Video Coding Explorer', 'Frontend Builder'];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

const typeLoop = () => {
    const current = phrases[phraseIndex];
    typedText.textContent = deleting
        ? current.slice(0, charIndex--)
        : current.slice(0, charIndex++);

    if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        setTimeout(typeLoop, 900);
    } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeLoop, 350);
    } else {
        setTimeout(typeLoop, deleting ? 70 : 100);
    }
};

const updateNavbar = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
};

const revealOnScroll = () => {
    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (revealTop < windowHeight - 100) {
            reveal.classList.add('active');
        }
    });
};

window.addEventListener('scroll', () => {
    updateNavbar();
    revealOnScroll();
});

window.addEventListener('load', () => {
    updateNavbar();
    revealOnScroll();
    setTimeout(() => loadingScreen.classList.add('hidden'), 700);
    typeLoop();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
    });
});
