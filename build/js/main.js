var prices = {
    "vk" : {
        "likes" : {
            "100": 20,
            "200": 30
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

$(document).ready(function() {
    $(document).foundation();

    $('.site-counters .count').counterUp({
        delay: 10,
        time: 5000
    });

    budgetCalculator.init();
    
});