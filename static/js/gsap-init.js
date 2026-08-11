document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(".reveal-up, .reveal-left, .reveal-right", {
            opacity: 1,
            x: 0,
            y: 0
        });
        return;
    }

    // ===============================
    // HERO
    // ===============================

    const heroTl = gsap.timeline();

    heroTl
        .from(".hero-badge", {
            opacity: 0,
            y: 25,
            duration: .6,
            ease: "power3.out"
        })

        .from(".hero-title", {
            opacity: 0,
            y: 40,
            duration: .8,
            ease: "power3.out"
        }, "-=.25")

        .from(".hero-description", {
            opacity: 0,
            y: 30,
            duration: .7,
            ease: "power3.out"
        }, "-=.35")

        .from(".hero-trust span", {
            opacity: 0,
            y: 20,
            stagger: .08,
            duration: .5,
            ease: "power2.out"
        }, "-=.25")

        .from(".hero-image", {
            opacity: 0,
            x: 60,
            duration: 1,
            ease: "power3.out"
        }, "-=.8");

    // ===============================
    // SECTION HEADERS
    // ===============================

    gsap.utils.toArray(".section-header").forEach(section => {

        gsap.from(section, {

            opacity: 0,
            y: 35,
            duration: .8,

            ease: "power3.out",

            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                once: true
            }

        });

    });

    // ===============================
    // REVEAL UP
    // ===============================

    gsap.utils.toArray(".reveal-up").forEach(el => {

        gsap.from(el, {

            opacity: 0,
            y: 60,

            duration: .8,

            ease: "power3.out",

            scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true
            }

        });

    });

    // ===============================
    // LEFT
    // ===============================

    gsap.utils.toArray(".reveal-left").forEach(el => {

        gsap.from(el, {

            opacity: 0,
            x: -80,

            duration: .9,

            ease: "power3.out",

            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true
            }

        });

    });

    // ===============================
    // RIGHT
    // ===============================

    gsap.utils.toArray(".reveal-right").forEach(el => {

        gsap.from(el, {

            opacity: 0,
            x: 80,

            duration: .9,

            ease: "power3.out",

            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true
            }

        });

    });

    ScrollTrigger.refresh();

});