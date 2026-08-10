@'
/* =========================================================
   ECOPARROT — SIMPLE HERO SLIDESHOW + FADE-IN
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const hero = document.querySelector(".hero");
    if (!hero) return;

    /* -----------------------------------------------------
       SLIDESHOW: cycle background slides with a fade
    ----------------------------------------------------- */
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

    /* Optional prev/next arrows, if present */
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

    /* Optional dot clicks */
    dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
            showSlide(i);
        });
    });

    /* -----------------------------------------------------
       SIMPLE FADE-IN for hero text content on page load
    ----------------------------------------------------- */
    hero.classList.add("hero-loaded");
});
'@ | Set-Content -Path "static\js\hero.js" -Encoding utf8