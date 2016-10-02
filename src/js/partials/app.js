var prices = {
        "vk" : {
            "followers" : {
                "100": 300,
                "200": 580,
                "300": 850,
                "400": 1100,
                "500": 1340,
                "600": 1560,
                "700": 1760,
                "1000": 2300,
                "5000": 10500,
                "10000": 17890
            },
            "likes" : {
                "100": 100,
                "200": 190,
                "300": 250,
                "400": 300,
                "500": 360,
                "600": 410,
                "700": 460,
                "1000": 700,
                "5000": 3350,
                "10000": 6000
            }
        }
    },
    tranlations = {
      "vk" : {
          "followers" : "подписчиков в ВК",
          "likes" : "лайков в ВК"
      }
    };

var Calculator = function () {};

Calculator.prototype.init = function () {

    var self = this;

    $('.j-budget-slider').on('moved.zf.slider', function(){
        self.updatePrice($(this), $(this).parents('.calculator__budget').data('sliderType'));
    });

    $('.calculator__buttons__item').click(function (e) {
        e.preventDefault();
        self.selectSocial($(this));
    });

};

Calculator.prototype.updatePrice = function ($slider, social) {

    var sum = $slider.find('.slider-handle').attr('aria-valuenow'),
        $body = $('.calculator__budget'),
        $packs = $('.calculator__packs');

    // set value of budget
    $body.find('.price').html(sum);

    if (prices[social].followers) {
        setResultBlock('followers');
    }

    if (prices[social].likes) {
        setResultBlock('likes');
    }

    function setResultBlock (type) {

        var count = getCount(sum, prices[social][type]),
            $block = $('.calculator__result').filter('[data-pack-type="' + type +'"]'),
            $target = $block.find('.count'),
            $btn = $block.find('.button');

        $target.html(count);

        $btn.data('caption', count + ' ' + tranlations[social].likes);
        $btn.attr('data-caption', count + ' ' + tranlations[social].likes);
        $btn.data('sum', sum);
        $btn.attr('data-sum', sum);
        $btn.attr('title', count + ' ' + tranlations[social].likes);

    }

    function getCount (sum, arr) {
        var max = 0,
            factor,
            value;

        $.each(arr, function(count, arrSum) {
            if (sum >= arrSum) {
                max = count;
                factor = arrSum/count;
            }
        });

        value = Math.floor(sum/factor);

        return value;

    }

};

Calculator.prototype.selectSocial = function ($btn) {

    $('.calculator__buttons__item').removeClass('selected');
    $btn.addClass('selected');

};

var budgetCalculator = new Calculator;