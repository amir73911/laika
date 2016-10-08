var prices = {
        "vk" : {
            "followers" : {
                "1": 3,
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
                "1": 1,
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
        },
        "insta" : {
            "followers" : {
                "1": 1.6,
                "100": 160,
                "200": 310,
                "300": 450,
                "400": 590,
                "500": 720,
                "600": 830,
                "800": 990,
                "1000": 1090,
                "2000": 1890,
                "4000": 2290,
                "5000": 2690,
                "10000": 3390,
                "15000": 4390,
                "20000": 5290
            },
            "likes" : {
                "1": 1,
                "100": 100,
                "200": 190,
                "300": 280,
                "400": 340,
                "500": 400,
                "700": 490,
                "800": 530,
                "1000": 585,
                "2000": 1050,
                "3000": 1390,
                "4000": 1590,
                "5000": 1790,
                "10000": 2890,
                "15000": 4090
            }
        },
        "fb" : {
            "reposts" : {
                "1": 3,
                "100": 300,
                "200": 580,
                "300": 850,
                "400": 1100,
                "500": 1340,
                "600": 1560,
                "700": 1760,
                "800": 1940,
                "1000": 2180,
                "2000": 4000,
                "4000": 6000,
                "5000": 8000,
                "10000": 15790,
                "15000": 23000
            },
            "likes" : {
                "1": 2.5,
                "100": 250,
                "200": 490,
                "300": 730,
                "400": 970,
                "500": 1200,
                "700": 1350,
                "1000": 1690,
                "2000": 3300,
                "4000": 5690,
                "5000": 6990,
                "10000": 13200,
                "20000": 25890,
                "50000": 60150
            }
        },
        "ok" : {
            "followers" : {
                "1": 2.8,
                "100": 280,
                "200": 560,
                "300": 840,
                "400": 1050,
                "500": 1290,
                "600": 1540,
                "700": 1690,
                "1000": 1790,
                "2000": 3490,
                "5000": 8670,
                "10000": 17800,
                "20000": 33900
            },
            "likes" : {
                "1": 2.8,
                "100": 280,
                "200": 560,
                "300": 840,
                "400": 1050,
                "500": 1290,
                "600": 1540,
                "700": 1690,
                "1000": 1790,
                "2000": 3490,
                "5000": 8670,
                "10000": 17800,
                "20000": 33900
            }
        },
        "tw" : {
            "followers" : {
                "1": 0.9,
                "100": 90,
                "200": 180,
                "300": 220,
                "400": 260,
                "500": 290,
                "600": 340,
                "700": 390,
                "1000": 420,
                "2000": 490,
                "5000": 1390,
                "10000": 2190,
                "20000": 8900
            },
            "reposts" : {
                "1": 0.9,
                "100": 90,
                "200": 180,
                "300": 220,
                "400": 260,
                "500": 290,
                "600": 340,
                "700": 390,
                "1000": 420,
                "2000": 490,
                "5000": 1390,
                "10000": 2190,
                "20000": 8900
            }
        }
    },
    tranlations = {
      "vk" : {
          "followers" : "подписчиков в ВК",
          "likes" : "лайков в ВК"
      },
      "insta" : {
          "followers" : "подписчиков (боты) Instagram",
          "likes" : "лайков (ботов) Instagram"
      },
      "fb" : {
          "reposts" : "поделиться в Facebook",
          "likes" : "лайков в Facebook"
      },
      "ok" : {
          "followers" : "подписчиков в Одноклассниках",
          "likes" : "классов в Одноклассниках"
      },
      "tw" : {
          "followers" : "подписчиков в Twitter",
          "reposts" : "ретвитов в Twitter"
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

    if (prices[social].reposts) {
        setResultBlock('reposts');
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