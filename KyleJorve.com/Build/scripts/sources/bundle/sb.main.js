$(document).ready(function () {
    //========------------------------------==========//
    //                   GENERAL                      //
    //========------------------------------==========//
    //Detect if touch device
    var isTouchDevice = 'ontouchstart' in document.documentElement;
    if (isTouchDevice && $('body').hasClass('allowHover')) {
        $('body').removeClass('allowHover').addClass('touchDevice');
    };

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
    //                COPYRIGHT INFO                  //
    //========------------------------------==========//
    //What's the start year?
    //var startYear = parseInt($('#startYear').html().replace(/ \-/g, ''));
    //var curYear = new Date().getFullYear();

    ////Put current year in copyright message
    //$('#curYear').html(curYear);
    ////If the start year is same as current year, hide start year
    //if (startYear == curYear) {
    //    $('#startYear').hide();
    //};

    //========------------------------------==========//
    //                 SCROLL STUFF                   //
    //========------------------------------==========//
    $(window).scroll(function () {
        bodyScroll();
    });
});

$(window).on('load', function () {
    bodyScroll();

    $.ready.then(function () {
        //Allow CSS transitions after page has loaded
        $('body').removeClass('preload');
        //Transition load screen out

        $('.loadScreen').fadeOut(300, 'swing', function () {
            $('body').removeClass('showLoader');
        });
    });
});

function bodyScroll() {
    detectScrollPos();

    if (window.curScrollPos > 40) {
        $('body').addClass('scrolled');
    }
    else {
        $('body').removeClass('scrolled');
    }
};

function detectScrollPos() {
    //Is browser IE?
    detectIE();

    //--------Detect scroll position-------//
    // IF RUNNING IE (ignore the confusing double-negative (Yes it's necessary))
    if (detectIE()) {
        window.curScrollPos = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    }
    else {
        window.curScrollPos = $("html").scrollTop() > $("body").scrollTop() ? $("html").scrollTop() : $("body").scrollTop();
    }
};

function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
};