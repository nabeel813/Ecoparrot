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