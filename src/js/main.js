//= partials/app.js

$(document).ready(function () {
    $(document).foundation();

    $('.site-counters .count').counterUp({
        delay: 10,
        time: 2000
    });

    budgetCalculator.init();

    // Our works slider
    $('.our-works-slider').owlCarousel({
        dots: true,
        autoplay: true,
        loop: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });

});