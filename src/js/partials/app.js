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
        }
    }
};

var Calculator = function () {};

Calculator.prototype.init = function () {

    var self = this;

    $('.j-budget-slider').on('moved.zf.slider', function(){
        self.updatePrice($(this));
    });

    $('.calculator__buttons__item').click(function (e) {
        e.preventDefault();
        self.selectSocial($(this));
    });

};

Calculator.prototype.updatePrice = function ($slider) {

    var value = $slider.find('.slider-handle').attr('aria-valuenow'),
        $body = $('.calculator__budget');

    $body.find('.price').html(value);

};

Calculator.prototype.selectSocial = function ($btn) {

    $('.calculator__buttons__item').removeClass('selected');
    $btn.addClass('selected');

};

var budgetCalculator = new Calculator;