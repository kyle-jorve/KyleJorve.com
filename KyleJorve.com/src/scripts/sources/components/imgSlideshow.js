$(document).ready(function () {
    var slideshow = '#imgSlideshow',
        lightboxSlideshow = '#lightboxSlideshow',
        imgBgs = '.imgBg',
        lightboxBgs = '.lightboxBg';

    $(slideshow).on('init', function (slick) {
        $(slideshow).find('.slick-slide').eq(1).addClass('nextSlide');
        $(imgBgs).first().nextAll(imgBgs).addClass('inactive');
    });

    $(lightboxSlideshow).on('init', function (slick) {
        $(lightboxSlideshow).find('.slick-slide').eq(1).addClass('inactive');
        $(lightboxBgs).first().nextAll(lightboxBgs).addClass('inactive');
    });

    $(slideshow).slick({
        asNavFor: lightboxSlideshow,
        autoplay: false,
        autoplaySpeed: 5000,
        appendArrows: '#sliderNav',
        appendDots: '#sliderDots',
        prevArrow: '<div class="arrowBtn prevArrow"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="arrowBtn nextArrow"><i class="fas fa-angle-right"></i></div>',
        dots: true,
        fade: true,
        speed: 500
    });

    $(lightboxSlideshow).slick({
        asNavFor: slideshow,
        autoplay: false,
        autoplaySpeed: 5000,
        appendArrows: '#lightboxSliderNav',
        prevArrow: '<div class="arrowBtn prevArrow"><i class="fas fa-angle-left"></i></div>',
        nextArrow: '<div class="arrowBtn nextArrow"><i class="fas fa-angle-right"></i></div>',
        fade: true,
        speed: 500
    });

    //Do the fancy animations on the things
    $(slideshow).on('beforeChange', function (event, slick, currentSlideIndex, nextSlideIndex) {
        var next = $(slick.$slides[nextSlideIndex]);
        var nextBg = $(imgBgs)[nextSlideIndex];

        next.removeClass('prevSlide nextSlide');
        next.prevAll().addClass('prevSlide').removeClass('nextSlide');
        next.nextAll().addClass('nextSlide').removeClass('prevSlide');

        $(imgBgs).removeClass('inactive');
        $(imgBgs).not(nextBg).addClass('inactive');
    });

    $(lightboxSlideshow).on('beforeChange', function (event, slick, currentSlideIndex, nextSlideIndex) {
        var next = $(slick.$slides[nextSlideIndex]);
        var nextBg = $(lightboxBgs)[nextSlideIndex];

        next.removeClass('prevSlide nextSlide');
        next.prevAll().addClass('prevSlide').removeClass('nextSlide');
        next.nextAll().addClass('nextSlide').removeClass('prevSlide');

        $(lightboxBgs).removeClass('inactive');
        $(lightboxBgs).not(nextBg).addClass('inactive');
    });
});