document.documentElement.classList.add('js-ready');

document.addEventListener('DOMContentLoaded', function () {

    // Mobile hamburger menu toggle
    var hamburger = document.querySelector('.hamburger');
    var navbar = document.querySelector('.navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', function () {
            navbar.classList.toggle('menu-open');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links-mobile a').forEach(function (link) {
            link.addEventListener('click', function () {
                navbar.classList.remove('menu-open');
                hamburger.classList.remove('active');
            });
        });
    }

});
