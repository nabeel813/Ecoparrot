document.addEventListener('DOMContentLoaded', function () {

    // Highlight nav link matching the current scroll section (home page only)
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a[href*="#"]');

    if (!sections.length || !navLinks.length) return;

    window.addEventListener('scroll', function () {
        var scrollPos = window.scrollY + 200;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var bottom = top + section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href').indexOf('#' + id) !== -1) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

});
