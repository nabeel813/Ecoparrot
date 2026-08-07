document.addEventListener('DOMContentLoaded', function () {

    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Reveal-up elements
    gsap.utils.toArray('.reveal-up').forEach(function (el, i) {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: (i % 4) * 0.08,
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
            },
        });
    });

    // Reveal-left elements
    gsap.utils.toArray('.reveal-left').forEach(function (el) {
        gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
            },
        });
    });

    // Reveal-right elements
    gsap.utils.toArray('.reveal-right').forEach(function (el) {
        gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
            },
        });
    });

    // Section header fade
    gsap.utils.toArray('.section-header').forEach(function (el) {
        gsap.from(el, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
            },
        });
    });

});
