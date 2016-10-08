//= partials/app.js

$(document).ready(function () {
    
    var sum, 
        caption;
    
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

    $('body').on('click', '.j-order-btn', function(e) {
        e.preventDefault();
        showOrderPopup();
        caption = $(this).data('caption');
        sum = $(this).data('sum');
    });

    $('body').on('click', '.j-to-pay-btn', function(e) {
        e.preventDefault();
        var $input = $('#orderLinkInput');

        if ($input.val()) {
            $input.removeClass('error');
            var request = $.post(location.origin + '/order-page.php', {
                inv_desc: caption,
                linkToPage: $input.val(),
                out_summ: sum
            });

            request.done(function( data ) {
                var $btn = $(data).find('#orderBtn');
                $btn.click();
            });
        } else {
            $input.addClass('error');
        }

    });

    $('.popup-outer').click(function(e) {
        e.preventDefault();
        closeOrderPopup();
    });
    
    function showOrderPopup() {
        $('.popup-outer').fadeIn();
        $('.j-order-popup').show();
    }

    function closeOrderPopup() {
        $('.popup-outer').fadeOut();
        $('.j-order-popup').fadeOut();
    }

});