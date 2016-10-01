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

    $('.j-order-btn ').click(function(e) {
        e.preventDefault();
        var $link = $(this);

        var request = $.post(location.origin + '/order-page.php', {
            inv_desc: $link.data('caption'),
            out_summ: $link.data('sum')
        });

        request.done(function( data ) {
            var $btn = $(data).find('#orderBtn');
            $btn.click();
        });


    });

});