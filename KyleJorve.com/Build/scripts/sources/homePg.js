var portScrollBuffer = 200,
    portScrollBreakpoint = 600;
var nodes = {
    portfolioGrid: $('#recent-work'),
    scrollIcon: $('#scrollIcon')
};

$(document).ready(function () {
    if (!$('body').hasClass('touchDevice')) {
        scrollDisapparate();
    }

    $(window).scroll(function () {
        toggleLeftNav();
        if (!$('body').hasClass('touchDevice')) {
            scrollDisapparate();
        }
    });
});

//Parallax effects
parallaxBg('.heroWrp', '.heroBg', -.3, 800, 'center');

//Animated content
animateContent('#recent-work', '.animatedEl', 100, portScrollBreakpoint, "top", portScrollBuffer);

//Left nav apparate
$(window).on('load resize orientationchange',  function() {
    toggleLeftNav();
});

$(window).on('resize orientationchange', function () {
    if ($(window).outerWidth() > portScrollBreakpoint && !$('body').hasClass('touchDevice')) {
        scrollDisapparate();
    }
});

//Detect when top of window meets bottom of hero
//toggle "revealLeftNav" class
function toggleLeftNav() {
    var heroBottom = ($('.heroWrp').offset().top + $('.heroWrp').outerHeight()) * .5,
        breakpoint = 500;

    if ($(window).scrollTop() >= heroBottom && !$('body').hasClass('revealLeftNav') && $(window).outerWidth() > breakpoint) {
        $('body').addClass('revealLeftNav');
    }
    else if ($(window).scrollTop() < heroBottom && $('body').hasClass('revealLeftNav') && $(window).outerWidth() > breakpoint) {
        $('body').removeClass('revealLeftNav');
    }
}

//Disapparate scrolly icon when portfolio grid is reached
function scrollDisapparate() {
    var pOffset = nodes.portfolioGrid.offset().top + portScrollBuffer;

    if ($(window).scrollTop() + $(window).outerHeight() > pOffset) {
        $('body').addClass('pView');
    }
}