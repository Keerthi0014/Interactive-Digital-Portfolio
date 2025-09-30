// Wait for the document to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // --- HERO SECTION ANIMATION ---
    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTimeline
        .to('.hero-content', { opacity: 1, duration: 0.2 })
        .from('.hero-title', { y: 30, opacity: 0, duration: 0.8 })
        .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from('.hero-button', { y: 20, opacity: 0, duration: 0.8 }, "-=0.6");


    // --- GENERAL CONTENT SECTION FADE-IN ON SCROLL ---
    const sections = document.querySelectorAll('.content-section');

    sections.forEach(section => {
        gsap.to(section, {
            autoAlpha: 1, // Fades in and enables interactivity
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%', // Animation starts when the top of the section is 80% down the viewport
                toggleActions: 'play none none none',
            }
        });
    });

    // --- PROJECT CARDS STAGGERED FADE-IN ---
    gsap.from('.project-card', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2, // Adds a 0.2s delay between each card's animation
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.project-grid',
            start: 'top 80%',
        }
    });

    // --- HOVER ANIMATION FOR PROJECT CARDS ---
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { 
                scale: 1.05, 
                duration: 0.3,
                boxShadow: '0px 15px 45px rgba(0, 0, 0, 0.4)'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                scale: 1, 
                duration: 0.3,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            });
        });
    });

});