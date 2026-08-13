document.getElementById('year').textContent = new Date().getFullYear();

const navbar = document.getElementById('navbar');
const loadingScreen = document.getElementById('loadingScreen');
const typedText = document.getElementById('typedText');
const reveals = document.querySelectorAll('.reveal');
const pillItems = document.querySelectorAll('.pill-item');

const phrases = ['AI/ML Enthusiast', 'Frontend Builder'];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

const typeLoop = () => {
    if (!typedText) return;
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
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }

    // Highlight active section in Pill Nav
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = 'home';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            currentSectionId = section.getAttribute('id');
        }
    });

    pillItems.forEach(item => {
        const href = item.getAttribute('href');
        item.classList.toggle('active', href === `#${currentSectionId}`);
    });
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

// Scroll Velocity ticker implementation for static HTML
const initScrollVelocity = () => {
    const track = document.getElementById('scrollVelocityTrack');
    if (!track) return;

    let lastScrollY = window.scrollY;
    let currentX = 0;
    let scrollVelocity = 0;
    const baseVelocity = 1.6;

    window.addEventListener('scroll', () => {
        const dy = window.scrollY - lastScrollY;
        lastScrollY = window.scrollY;
        scrollVelocity = dy * 0.15;
    }, { passive: true });

    const animateVelocity = () => {
        scrollVelocity *= 0.92;
        const velocity = baseVelocity + (scrollVelocity > 0 ? Math.min(scrollVelocity, 10) : Math.max(scrollVelocity, -10));
        currentX -= velocity;

        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(currentX) >= halfWidth) {
            currentX = 0;
        }
        track.style.transform = `translate3d(${currentX}px, 0, 0)`;

        requestAnimationFrame(animateVelocity);
    };

    requestAnimationFrame(animateVelocity);
};

window.addEventListener('scroll', () => {
    updateNavbar();
    revealOnScroll();
});

window.addEventListener('load', () => {
    updateNavbar();
    revealOnScroll();
    initCertificateSlider();
    initScrollVelocity();
    setTimeout(() => {
        if (loadingScreen) loadingScreen.classList.add('hidden');
    }, 700);
    typeLoop();
});

const initCertificateSlider = () => {
    const slider = document.querySelector('#certificates .slider');
    if (!slider) return;

    const items = Array.from(slider.querySelectorAll('.item'));
    const prevBtn = document.getElementById('certPrevBtn');
    const nextBtn = document.getElementById('certNextBtn');
    const dots = document.querySelectorAll('#certDots .dot');
    
    let currentIndex = 0;
    const total = items.length;

    const updateSlider = () => {
        items.forEach((item, index) => {
            const offset = (index - currentIndex + total) % total;
            
            if (offset === 0) {
                item.style.transform = 'translate3d(0, 0px, 0px) scale(1)';
                item.style.opacity = '1';
                item.style.zIndex = '5';
                item.style.pointerEvents = 'auto';
                item.classList.add('active-item');
            } else if (offset === 1) {
                item.style.transform = 'translate3d(0, 22px, -35px) scale(0.93)';
                item.style.opacity = '0.85';
                item.style.zIndex = '4';
                item.style.pointerEvents = 'auto';
                item.classList.remove('active-item');
            } else if (offset === 2) {
                item.style.transform = 'translate3d(0, 44px, -70px) scale(0.86)';
                item.style.opacity = '0.65';
                item.style.zIndex = '3';
                item.style.pointerEvents = 'auto';
                item.classList.remove('active-item');
            } else if (offset === 3) {
                item.style.transform = 'translate3d(0, 66px, -105px) scale(0.79)';
                item.style.opacity = '0.45';
                item.style.zIndex = '2';
                item.style.pointerEvents = 'none';
                item.classList.remove('active-item');
            } else {
                item.style.transform = 'translate3d(0, 88px, -140px) scale(0.72)';
                item.style.opacity = '0.2';
                item.style.zIndex = '1';
                item.style.pointerEvents = 'none';
                item.classList.remove('active-item');
            }
        });

        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % total;
        updateSlider();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + total) % total;
        updateSlider();
    };

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            currentIndex = idx;
            updateSlider();
        });
    });

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (currentIndex !== index) {
                currentIndex = index;
                updateSlider();
            }
        });
    });

    let startX = 0;
    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 40) {
            nextSlide();
        } else if (endX - startX > 40) {
            prevSlide();
        }
    }, { passive: true });

    updateSlider();
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
    });
});
