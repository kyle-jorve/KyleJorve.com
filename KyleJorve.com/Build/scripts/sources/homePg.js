$(document).ready(function () {
    $(window).scroll(function () {
        toggleLeftNav();
    });
});

//Parallax effects
parallaxBg('.heroWrp', '.heroBg', -.3, 800, 'center');

//Animated content
animateContent('#recent-work', '.animatedEl', 100, 800, "top", 200);

//Left nav apparate
$(window).on('load resize orientationchange',  function() {
    toggleLeftNav();
});

//Detect when top of window meets bottom of hero
//toggle "revealLeftNav" class
function toggleLeftNav() {
    var heroBottom = ($('.heroWrp').offset().top + $('.heroWrp').outerHeight()) * .5;

    if ($(window).scrollTop() >= heroBottom && !$('body').hasClass('revealLeftNav')) {
        $('body').addClass('revealLeftNav');
    }
    else if ($(window).scrollTop() < heroBottom && $('body').hasClass('revealLeftNav')) {
        $('body').removeClass('revealLeftNav');
    }
}