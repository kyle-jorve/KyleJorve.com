var bodyScrollLim = 100;

$(document).ready(function () {
    //========------------------------------==========//
    //                   GENERAL                      //
    //========------------------------------==========//
    //Detect if touch device
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    if (isTouchDevice && $('body').hasClass('allowHover')) {
        $('body').removeClass('allowHover').addClass('touchDevice');
    };

    //Detect if mobile
    if (detectMobile()) {
        $('body').addClass('mobile');
    }

    //Hover events for touchscreens
    $('.button, button, a, .toTopBtn, li.hasSubnav').hover(function () {
        if ($('body').hasClass('touchDevice')) {
            $(this).addClass('hover');
        }
    }, function () {
        if ($('body').hasClass('touchDevice')) {
            $(this).removeClass('hover');
        }
    });
    $('.button, button, a, .toTopBtn').on('tap', function () {
        var $this = $(this);
        setTimeout(function () {
            $this.removeClass('hover');
        }, 300);
    });
    
    $('img').each(function () {
        //Remove wrapping paragraph tags from images (Umbraco automatically wraps them)
        if ($(this).parent().is('p')) {
            $(this).unwrap();
        };
    });
    //Remove styles from images (Umbraco likes to tack on width and height styles)
    $('img').removeAttr('style');

    //========------------------------------==========//
    //                 SCROLL STUFF                   //
    //========------------------------------==========//
    $(window).scroll(function () {
        bodyScroll(bodyScrollLim);
    });
});

$(window).on('load', function () {
    bodyScroll(bodyScrollLim);
    //Allow CSS transitions after page has loaded
    $('body').removeClass('preload');
});

window.addEventListener('load', function () {
    //Transition load screen out
    document.querySelector('#loadScreen').classList.remove('active');
});

function bodyScroll(limit) {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= limit) {
        $('body').addClass('scrolled');
    }
    else {
        $('body').removeClass('scrolled');
    }
};

function detectMobile() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}