document.addEventListener("DOMContentLoaded", function () {

  const heroData = [
    {
        badge: "🌿 Sustainable Packaging Solutions",
        title: "Sustainable Packaging",
        highlight: "for a Greener Tomorrow",
        description:
            "Premium eco-friendly paper bags and sustainable packaging solutions designed for businesses that care about quality and the environment.",

        primaryText: "Explore Products",
        primaryLink: "/products/",

        secondaryText: "Request Quote",
        secondaryLink: "/quotes/"
    },

    {
        badge: "🎨 Premium Custom Printing",
        title: "Your Brand",
        highlight: "Our Premium Packaging",
        description:
            "High-quality customized paper bags with vibrant printing, durable construction and eco-friendly materials.",

        primaryText: "View Products",
        primaryLink: "/products/",

        secondaryText: "Get Quote",
        secondaryLink: "/quotes/"
    },

    {
        badge: "🏭 Advanced Manufacturing",
        title: "3 Lakh Bags",
        highlight: "Every Single Day",
        description:
            "Kerala's modern automated manufacturing facility delivering premium packaging solutions with exceptional quality and speed.",

        primaryText: "Manufacturing",
        primaryLink: "/manufacturing/",

        secondaryText: "Request Quote",
        secondaryLink: "/quotes/"
    }
];

function updateHeroContent(index) {

    const data = heroData[index];

    document.getElementById("heroBadge").textContent =
        data.badge;

    document.getElementById("heroTitle").innerHTML =
        `${data.title}<span>${data.highlight}</span>`;

    document.getElementById("heroDescription").textContent =
        data.description;

    const primaryBtn = document.getElementById("heroPrimaryBtn");
    primaryBtn.textContent = data.primaryText;
    primaryBtn.href = data.primaryLink;

    const secondaryBtn = document.getElementById("heroSecondaryBtn");
    secondaryBtn.textContent = data.secondaryText;
    secondaryBtn.href = data.secondaryLink;

}

   // ==========================
// HERO INTRO + SCROLL ANIMATION
// ==========================

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    const hero = document.querySelector(".hero");

    const heroContent = document.querySelector(".hero-content");

    const heroBackground = document.querySelector(".hero-background");

    const heroSlides =
        document.querySelectorAll(".hero-slide");

    const heroBadge =
        document.querySelector(".hero-badge");

    const heroTitle =
        document.querySelector(".hero-title");

    const heroDescription =
        document.querySelector(".hero-description");

    const heroButtons =
        document.querySelector(".hero-buttons");

    const heroStats =
        document.querySelector(".hero-mini-stats");


    if (
        hero &&
        heroContent &&
        heroBackground
    ) {

        // =====================================
        // INITIAL HERO ENTRANCE
        // =====================================

        const intro = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });


        intro
            .from(heroBadge, {
                opacity: 0,
                y: 30,
                duration: 0.7
            })

            .from(heroTitle, {
                opacity: 0,
                y: 55,
                duration: 1
            }, "-=0.35")

            .from(heroDescription, {
                opacity: 0,
                y: 35,
                duration: 0.8
            }, "-=0.55")

            .from(heroButtons, {
                opacity: 0,
                y: 30,
                duration: 0.7
            }, "-=0.5")

            .from(heroStats, {
                opacity: 0,
                y: 25,
                duration: 0.7
            }, "-=0.45");


        // =====================================
        // CINEMATIC SCROLL
        // =====================================

        const scrollTimeline = gsap.timeline({

            scrollTrigger: {

                trigger: hero,

                start: "top top",

                end: "bottom top",

                scrub: 1.2,

                invalidateOnRefresh: true

            }

        });


        // Hero content moves upward
        scrollTimeline.to(
            heroContent,
            {
                y: -180,
                scale: 0.92,
                opacity: 0.15,
                ease: "none"
            },
            0
        );


        // Background slowly zooms
        scrollTimeline.to(
            heroSlides,
            {
                scale: 1.16,
                y: -40,
                ease: "none"
            },
            0
        );


        // Badge disappears slightly faster
        scrollTimeline.to(
            heroBadge,
            {
                y: -70,
                opacity: 0,
                ease: "none"
            },
            0
        );


        // Title gets stronger movement
        scrollTimeline.to(
            heroTitle,
            {
                y: -90,
                ease: "none"
            },
            0
        );


        // Description moves independently
        scrollTimeline.to(
            heroDescription,
            {
                y: -55,
                ease: "none"
            },
            0
        );


        // Buttons move away
        scrollTimeline.to(
            heroButtons,
            {
                y: -35,
                opacity: 0,
                ease: "none"
            },
            0
        );


        // Stats disappear
        scrollTimeline.to(
            heroStats,
            {
                y: -25,
                opacity: 0,
                ease: "none"
            },
            0
        );


        // =====================================
        // REFRESH SCROLLTRIGGER
        // =====================================

        ScrollTrigger.refresh();

    }

}
    // ==========================
    // HERO SLIDER
    // ==========================

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");

    let current = 0;

    function showSlide(index){

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        current = index;


        updateHeroContent(index);
    }

    function nextSlide(){

        let next = current + 1;

        if(next >= slides.length){

            next = 0;

        }

        showSlide(next);

    }

    function previousSlide(){

        let prev = current - 1;

        if(prev < 0){

            prev = slides.length - 1;

        }

        showSlide(prev);

    }
updateHeroContent(0);

    setInterval(nextSlide,5000);

    document.querySelector(".hero-next").addEventListener("click",nextSlide);

    document.querySelector(".hero-prev").addEventListener("click",previousSlide);

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            showSlide(index);

        });

    });

});

/* ==========================================
   CINEMATIC HERO SCROLL ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined") {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const hero = document.querySelector(".hero");

    if (!hero) {
        return;
    }

    const heroContent =
        hero.querySelector(".hero-content");

    const heroSlides =
        hero.querySelectorAll(".hero-slide");

    const heroBadge =
        document.getElementById("heroBadge");

    const heroTitle =
        document.getElementById("heroTitle");

    const heroDescription =
        document.getElementById("heroDescription");

    const heroButtons =
        hero.querySelector(".hero-buttons");

    const heroStats =
        hero.querySelector(".hero-mini-stats");

    const scrollIndicator =
        hero.querySelector(".scroll-indicator");


    /* ==========================================
       SCROLL TIMELINE
    ========================================== */

    const heroTimeline = gsap.timeline({

        scrollTrigger: {

            trigger: hero,

            start: "top top",

            end: "bottom top",

            scrub: 1.5,

            invalidateOnRefresh: true

        }

    });


    /* ------------------------------------------
       Background
    ------------------------------------------ */

    heroTimeline.to(
        heroSlides,
        {
            scale: 1.12,
            yPercent: -5,
            ease: "none"
        },
        0
    );


    /* ------------------------------------------
       Main content
    ------------------------------------------ */

    heroTimeline.to(
        heroContent,
        {
            y: -150,
            ease: "none"
        },
        0
    );


    /* ------------------------------------------
       Badge
    ------------------------------------------ */

    heroTimeline.to(
        heroBadge,
        {
            y: -80,
            opacity: 0,
            ease: "none"
        },
        0
    );


    /* ------------------------------------------
       Title
    ------------------------------------------ */

    heroTimeline.to(
        heroTitle,
        {
            y: -105,
            scale: 0.94,
            ease: "none"
        },
        0
    );


    /* ------------------------------------------
       Description
    ------------------------------------------ */

    heroTimeline.to(
        heroDescription,
        {
            y: -70,
            opacity: 0.35,
            ease: "none"
        },
        0
    );


    /* ------------------------------------------
       Buttons
    ------------------------------------------ */

    heroTimeline.to(
        heroButtons,
        {
            y: -45,
            opacity: 0,
            ease: "none"
        },
        0
    );


    /* ------------------------------------------
       Statistics
    ------------------------------------------ */

    heroTimeline.to(
        heroStats,
        {
            y: -30,
            opacity: 0,
            ease: "none"
        },
        0
    );


    /* ------------------------------------------
       Scroll indicator
    ------------------------------------------ */

    heroTimeline.to(
        scrollIndicator,
        {
            opacity: 0,
            y: 30,
            ease: "none"
        },
        0
    );


    ScrollTrigger.refresh();

});

/* ==========================================
/* =========================================================
   ECOPARROT — CINEMATIC HERO SCROLL EXPERIENCE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        console.warn(
            "GSAP or ScrollTrigger is not available."
        );
        return;
    }

    gsap.registerPlugin(ScrollTrigger);


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const hero =
        document.querySelector(".hero");

    if (!hero) {
        return;
    }


    const background =
        hero.querySelector(".hero-background");

    const slides =
        hero.querySelectorAll(".hero-slide");

    const overlay =
        hero.querySelector(".hero-overlay");

    const content =
        hero.querySelector(".hero-content");

    const badge =
        hero.querySelector(".hero-badge");

    const title =
        hero.querySelector(".hero-title");

    const description =
        hero.querySelector(".hero-description");

    const buttons =
        hero.querySelector(".hero-buttons");

    const stats =
        hero.querySelector(".hero-mini-stats");

    const dots =
        hero.querySelector(".hero-dots");

    const arrows =
        hero.querySelectorAll(
            ".hero-prev, .hero-next"
        );

    const scrollIndicator =
        hero.querySelector(
            ".scroll-indicator"
        );


    /* =====================================================
       DESKTOP CINEMATIC SCROLL
    ===================================================== */

    const mm = gsap.matchMedia();


    mm.add(
        "(min-width: 769px)",
        function () {

            /*
             * IMPORTANT:
             *
             * The Hero stays visually present
             * while the individual elements
             * transform according to scroll.
             */

            const timeline =
                gsap.timeline({

                    scrollTrigger: {

                        trigger: hero,

                        start: "top top",

                        end: "+=1200",

                        scrub: 1.2,

                        pin: true,

                        anticipatePin: 1,

                        invalidateOnRefresh: true

                    }

                });


            /* =================================================
               PHASE 1
               Background starts moving immediately
            ================================================= */

            timeline.to(
                slides,
                {
                    scale: 1.12,

                    yPercent: -5,

                    ease: "none",

                    duration: 1
                },
                0
            );


            /* =================================================
               PHASE 2
               Background gets slightly deeper
            ================================================= */

            timeline.to(
                background,
                {
                    scale: 1.04,

                    ease: "none",

                    duration: 1
                },
                0
            );


            /* =================================================
               PHASE 3
               Badge moves first
            ================================================= */

            timeline.to(
                badge,
                {
                    y: -70,

                    opacity: 0,

                    ease: "power2.inOut",

                    duration: 0.35
                },
                0.05
            );


            /* =================================================
               PHASE 4
               TITLE becomes the main visual
            ================================================= */

            timeline.to(
                title,
                {
                    y: -150,

                    scale: 1.05,

                    letterSpacing: "-0.02em",

                    ease: "power2.inOut",

                    duration: 0.55
                },
                0.10
            );


            /* =================================================
               PHASE 5
               Description follows title
            ================================================= */

            timeline.to(
                description,
                {
                    y: -100,

                    opacity: 0,

                    ease: "power2.inOut",

                    duration: 0.4
                },
                0.25
            );


            /* =================================================
               PHASE 6
               Buttons move away later
            ================================================= */

            timeline.to(
                buttons,
                {
                    y: -70,

                    opacity: 0,

                    scale: 0.94,

                    ease: "power2.inOut",

                    duration: 0.35
                },
                0.34
            );


            /* =================================================
               PHASE 7
               Stats move with a different speed
            ================================================= */

            timeline.to(
                stats,
                {
                    y: -45,

                    opacity: 0,

                    ease: "power2.inOut",

                    duration: 0.35
                },
                0.42
            );


            /* =================================================
               PHASE 8
               Content itself starts floating away
            ================================================= */

            timeline.to(
                content,
                {
                    y: -90,

                    ease: "none",

                    duration: 0.55
                },
                0.35
            );


            /* =================================================
               PHASE 9
               Overlay changes subtly
            ================================================= */

            timeline.to(
                overlay,
                {
                    opacity: 0.55,

                    ease: "none",

                    duration: 0.45
                },
                0.42
            );


            /* =================================================
               PHASE 10
               Navigation UI disappears
            ================================================= */

            timeline.to(
                dots,
                {
                    opacity: 0,

                    y: 25,

                    ease: "power2.inOut",

                    duration: 0.25
                },
                0.48
            );


            timeline.to(
                arrows,
                {
                    opacity: 0,

                    scale: 0.8,

                    ease: "power2.inOut",

                    duration: 0.25
                },
                0.48
            );


            timeline.to(
                scrollIndicator,
                {
                    opacity: 0,

                    y: 30,

                    ease: "power2.inOut",

                    duration: 0.25
                },
                0.5
            );


            /* =================================================
               PHASE 11
               Final cinematic zoom
            ================================================= */

            timeline.to(
                slides,
                {
                    scale: 1.20,

                    yPercent: -9,

                    ease: "power1.inOut",

                    duration: 0.5
                },
                0.55
            );


            /* =================================================
               Refresh after everything is ready
            ================================================= */

            ScrollTrigger.refresh();


            /*
             * Cleanup when media query changes.
             */

            return function () {

                ScrollTrigger.getAll()
                    .forEach(function (trigger) {

                        trigger.kill();

                    });

            };

        }
    );


    /* =====================================================
       MOBILE
       Don't pin the Hero on mobile.
    ===================================================== */

    mm.add(
        "(max-width: 768px)",
        function () {

            const mobileTimeline =
                gsap.timeline({

                    scrollTrigger: {

                        trigger: hero,

                        start: "top top",

                        end: "bottom top",

                        scrub: 1,

                        invalidateOnRefresh: true

                    }

                });


            mobileTimeline.to(
                slides,
                {
                    scale: 1.08,

                    yPercent: -3,

                    ease: "none"

                },
                0
            );


            mobileTimeline.to(
                content,
                {
                    y: -80,

                    opacity: 0.35,

                    ease: "none"

                },
                0
            );


            mobileTimeline.to(
                scrollIndicator,
                {
                    opacity: 0,

                    ease: "none"

                },
                0
            );


            ScrollTrigger.refresh();

        }
    );

});
/* =========================================================
   ECOPARROT — HERO → ABOUT TRANSITION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (
        typeof gsap === "undefined" ||
        typeof ScrollTrigger === "undefined"
    ) {
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const hero =
        document.querySelector(".hero");

    const about =
        document.querySelector(".cinematic-about");

    if (!hero || !about) {
        return;
    }


    /* ==============================================
       ABOUT ELEMENTS
    ============================================== */

    const aboutContent =
        about.querySelector(".about-content");

    const aboutImage =
        about.querySelector(
            ".about-image, .about-visual, img"
        );

    const aboutTitle =
        about.querySelector(
            ".section-title, h2"
        );

    const aboutText =
        about.querySelector(
            ".about-description, p"
        );


    /* ==============================================
       INITIAL POSITION
    ============================================== */

    gsap.set(about, {
        yPercent: 12
    });


    if (aboutContent) {

        gsap.set(aboutContent, {
            y: 80,
            opacity: 0
        });

    }


    if (aboutImage) {

        gsap.set(aboutImage, {
            scale: 0.88,
            y: 80,
            opacity: 0
        });

    }


    if (aboutTitle) {

        gsap.set(aboutTitle, {
            y: 70,
            opacity: 0
        });

    }


    if (aboutText) {

        gsap.set(aboutText, {
            y: 50,
            opacity: 0
        });

    }


    /* ==============================================
       HERO → ABOUT TIMELINE
    ============================================== */

    const transition =
        gsap.timeline({

            scrollTrigger: {

                trigger: about,

                start: "top 90%",

                end: "top 20%",

                scrub: 1.2,

                invalidateOnRefresh: true

            }

        });


    /* ==============================================
       ABOUT PANEL ENTERS
    ============================================== */

    transition.to(
        about,
        {
            yPercent: 0,
            ease: "none",
            duration: 1
        },
        0
    );


    /* ==============================================
       IMAGE ENTERS WITH SCALE
    ============================================== */

    if (aboutImage) {

        transition.to(
            aboutImage,
            {
                scale: 1,
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 0.9
            },
            0.05
        );

    }


    /* ==============================================
       TITLE ENTERS LATER
    ============================================== */

    if (aboutTitle) {

        transition.to(
            aboutTitle,
            {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 0.65
            },
            0.20
        );

    }


    /* ==============================================
       TEXT FOLLOWS TITLE
    ============================================== */

    if (aboutText) {

        transition.to(
            aboutText,
            {
                y: 0,
                opacity: 1,
                ease: "power2.out",
                duration: 0.55
            },
            0.35
        );

    }


    /* ==============================================
       CONTENT FOLLOWS
    ============================================== */

    if (aboutContent) {

        transition.to(
            aboutContent,
            {
                y: 0,
                opacity: 1,
                ease: "none",
                duration: 0.8
            },
            0.15
        );

    }


    ScrollTrigger.refresh();

});