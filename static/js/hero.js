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
    // GSAP ANIMATION
    // ==========================

    if (typeof gsap !== "undefined") {

        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        tl.from(".hero-badge", {
            opacity: 0,
            y: -20,
            duration: .7
        })
        .from(".hero-title", {
            opacity: 0,
            y: 30,
            duration: .8
        }, "-=.4")
        .from(".hero-description", {
            opacity: 0,
            y: 20,
            duration: .7
        }, "-=.5")
        .from(".hero-buttons .btn", {
            opacity: 0,
            y: 20,
            stagger: .15,
            duration: .6
        }, "-=.4")
        .from(".hero-mini-stats div", {
            opacity: 0,
            y: 20,
            stagger: .1,
            duration: .6
        }, "-=.3");

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