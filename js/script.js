$(document).ready(function () {
    $('.splash-screen').delay(4000).fadeIn(1000, function () {
        $('.splash-screen').fadeOut(1000, function () {
            $('.logo').show();
            $('.menu').show();
        });
    });
});