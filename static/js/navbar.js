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

    if (window.scrollY > window.innerHeight * 0.35) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

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