/* =========================================================
   ECOPARROT - SIMPLE HERO SLIDESHOW + FADE-IN
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const hero = document.querySelector(".hero");
    if (!hero) return;

    const slides = hero.querySelectorAll(".hero-slide");
    const dots = hero.querySelectorAll(".hero-dots .dot");
    let current = 0;

    function showSlide(index) {
        slides.forEach(function (slide, i) {
            slide.classList.toggle("active", i === index);
        });
        dots.forEach(function (dot, i) {
            dot.classList.toggle("active", i === index);
        });
        current = index;
    }

    if (slides.length > 0) {
        showSlide(0);
        if (slides.length > 1) {
            setInterval(function () {
                showSlide((current + 1) % slides.length);
            }, 6000);
        }
    }

    const prevBtn = hero.querySelector(".hero-prev");
    const nextBtn = hero.querySelector(".hero-next");

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            showSlide((current - 1 + slides.length) % slides.length);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            showSlide((current + 1) % slides.length);
        });
    }

    dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
            showSlide(i);
        });
    });

    hero.classList.add("hero-loaded");

    /* ==========================
   HERO MOUSE PARALLAX
========================== */

const heroImage = hero.querySelector(".hero-image");

if (heroImage) {

    hero.addEventListener("mousemove", function (e) {

        const rect = hero.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        heroImage.style.transform =
            `translate(${x * 12}px, ${y * 12}px)`;

    });

    hero.addEventListener("mouseleave", function () {

        heroImage.style.transform = "translate(0,0)";

    });

}
});