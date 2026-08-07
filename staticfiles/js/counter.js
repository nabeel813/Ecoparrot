document.addEventListener('DOMContentLoaded', function () {

    var counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    var animate = function (el) {
        var target = parseInt(el.getAttribute('data-target'), 10) || 0;
        var duration = 1600;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target).toLocaleString('en-IN');

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target.toLocaleString('en-IN');
            }
        }
        requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animate(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        counters.forEach(function (el) { observer.observe(el); });
    } else {
        counters.forEach(animate);
    }

});
