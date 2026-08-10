document.addEventListener("DOMContentLoaded", function () {

    const navbar =
        document.querySelector(".navbar");

    let lastScrollY = window.scrollY;


    if (!navbar) {
        return;
    }


    /* ==========================================
       NAVBAR SCROLL
    ========================================== */

    function updateNavbar() {

    const currentScroll = window.scrollY;

    if (currentScroll > window.innerHeight * 0.35) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

    if (
        currentScroll > lastScrollY &&
        currentScroll > 150 &&
        !navbar.classList.contains("menu-open")
    ) {

        navbar.classList.add("nav-hidden");

    } else {

        navbar.classList.remove("nav-hidden");

    }

    lastScrollY = currentScroll;

}
    /* ==========================================
       MOBILE MENU
    ========================================== */

    if (hamburger) {

        hamburger.addEventListener(
            "click",
            function () {

                const isOpen =
                    navbar.classList.toggle(
                        "menu-open"
                    );

                hamburger.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );

            }
        );

    }


    /* ==========================================
       CLOSE MENU AFTER LINK CLICK
    ========================================== */

    const mobileLinks =
        document.querySelectorAll(
            ".nav-links-mobile a"
        );

    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navbar.classList.remove(
                    "menu-open"
                );

                if (hamburger) {

                    hamburger.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    });

});