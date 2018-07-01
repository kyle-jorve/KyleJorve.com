$(document).ready(function () {
    $('#imgSlideshow').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        appendArrows: '#sliderNav',
        appendDots: '#sliderDots',
        prevArrow: '<div class="arrowBtn prevArrow"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="arrowBtn nextArrow"><i class="fas fa-angle-right"></i></div>',
        dots: true,
        fade: true,
        speed: 500
    });
});