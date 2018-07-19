var nodes = {
    portfolioGrid: $('#recent-work'),
    scrollIcon: $('#scrollIcon')
}

$(document).ready(function () {
    scrollDisapparate();

    $(window).scroll(function () {
        toggleLeftNav();
        scrollDisapparate();
    });
});

//Parallax effects
parallaxBg('.heroWrp', '.heroBg', -.3, 800, 'center');

//Animated content
animateContent('#recent-work', '.animatedEl', 100, 600, "top", 200);

//Left nav apparate
$(window).on('load resize orientationchange',  function() {
    toggleLeftNav();
});

$(window).on('resize orientationchange', function () {
    scrollDisapparate();
})

//Detect when top of window meets bottom of hero
//toggle "revealLeftNav" class
function toggleLeftNav() {
    var heroBottom = ($('.heroWrp').offset().top + $('.heroWrp').outerHeight()) * .5,
        breakpoint = 600;

    if ($(window).scrollTop() >= heroBottom && !$('body').hasClass('revealLeftNav') && $(window).outerWidth() > breakpoint) {
        $('body').addClass('revealLeftNav');
    }
    else if ($(window).scrollTop() < heroBottom && $('body').hasClass('revealLeftNav') && $(window).outerWidth() > breakpoint) {
        $('body').removeClass('revealLeftNav');
    }
}

//Disapparate scrolly icon when portfolio grid is reached
function scrollDisapparate() {
    var pOffset = nodes.portfolioGrid.offset().top + 200;

    if ($(window).scrollTop() + $(window).outerHeight() > pOffset) {
        $('body').addClass('pView');
    }
}