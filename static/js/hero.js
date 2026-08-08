document.addEventListener("DOMContentLoaded", function () {

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

    setInterval(nextSlide,5000);

    document.querySelector(".hero-next").addEventListener("click",nextSlide);

    document.querySelector(".hero-prev").addEventListener("click",previousSlide);

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            showSlide(index);

        });

    });

});