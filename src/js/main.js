//= partials/app.js

$(document).ready(function() {
    $(document).foundation();

    $('.site-counters .count').counterUp({
        delay: 10,
        time: 5000
    });

    budgetCalculator.init();
    
});