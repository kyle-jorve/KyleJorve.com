﻿$(document).ready(function () {
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
    //                 SCROLL STUFF                   //
    //========------------------------------==========//
    $(window).scroll(function () {
        bodyScroll(200);
    });
});

$(window).on('load', function () {
    bodyScroll(200);

    setTimeout(function () {
        //Allow CSS transitions after page has loaded
        $('body').removeClass('preload');
        //Transition load screen out

        $('.loadScreen').fadeOut(300, 'swing', function () {
            $('body').removeClass('showLoader');
        });
    }, 150);
});

function bodyScroll(limit) {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= limit) {
        $('body').addClass('scrolled');
        $('body').removeClass('unscrolled');
    }
    else {
        $('body').removeClass('scrolled');
        $('body').addClass('unscrolled');
    }
};