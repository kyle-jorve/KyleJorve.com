var leftNavController = (function () {
    //========------------------------------==========//
    //                LEFT NAVIGATION                 //
    //========------------------------------==========//
    var leftNavLinks = $('#leftNav a'),
        leftNavTargets = [],
        vpMid = $(window).scrollTop() + ($(window).outerHeight() / 2),
        targetOffsets = {},
        breakpoint = 800;

    leftNavLinks.each(function () {
        leftNavTargets.push($(this).attr('href'));
    });

    var setVPMid = function () {
        vpMid = $(window).scrollTop() + ($(window).outerHeight() / 2);
    };

    var setOffsets = function () {
        for (var i = 0; i < leftNavTargets.length; i++) {
            targetOffsets[i] = {
                top: $(leftNavTargets[i]).offset().top,
                bottom: $(leftNavTargets[i]).offset().top + $(leftNavTargets[i]).outerHeight()
            };
        }
    };

    var scrollFn = function () {
        for (var i = 0; i < leftNavTargets.length; i++) {
            var thisOffsetTop = targetOffsets[i].top,
                thisOffsetBottom = targetOffsets[i].bottom;

            if ($(window).outerWidth() > breakpoint && vpMid > thisOffsetTop && vpMid < thisOffsetBottom) {
                leftNavLinks[i].classList.add('active');
            }
            else if ($(window).outerWidth() > breakpoint && vpMid > thisOffsetTop && vpMid >= thisOffsetBottom) {
                leftNavLinks[i].classList.remove('active');
            }
            else if ($(window).outerWidth() > breakpoint && vpMid <= thisOffsetTop && vpMid < thisOffsetBottom) {
                leftNavLinks[i].classList.remove('active');
            }
        }
    };

    return {
        init: function () {
            $(document).ready(function () {
                setOffsets();
                $(window).scroll(scrollFn);
            });

            $(window).on('resize orientationchange', function () {
                setOffsets();
                setVPMid();
                scrollFn();
            });
        }
    }
})();

leftNavController.init();

$(document).ready(function () {
    //========------------------------------==========//
    //                   ID LINKS                     //
    //========------------------------------==========//
    $('a[href^="#"]').on('click', function (event) {
        var thisTarget = $(this).attr('href'),
            targetOffset = $(thisTarget).offset().top - $('header').outerHeight();

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000, 'swing');

        event.preventDefault();
    });

    //========------------------------------==========//
    //             MOBILE TOP NAVIGATION              //
    //========------------------------------==========//
    var topNav = $('#topNav'),
        navItems = topNav.find('nav li');

    $('#navBtn').on('click tap', function () {
        //Open the mobile nav
        if (!$('body').hasClass('showMobileNav')) {
            $('body').addClass('showMobileNav');
            $(this).addClass('active');
            navItems.each(function () {
                var animDelay = $(this).index() * 100;
                var thisItem = $(this);

                setTimeout(function () {
                    thisItem.css({
                        'top': '0',
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }, animDelay);
            });
        }
        //Close the mobile nav
        else {
            var navLength = navItems.length;
            var delayClose = navLength * 100;

            $(this).removeClass('active');
            navItems.each(function () {
                var reverseIndex = navLength - $(this).index() - 1;
                var animDelay = reverseIndex * 100;
                var thisItem = $(this);

                setTimeout(function () {
                    thisItem.removeAttr('style');
                }, animDelay);
            });

            setTimeout(function () {
                $('body').removeClass('showMobileNav');
            }, delayClose);
        }
    });
    //Close nav if document is clicked / tapped
    $('.navOverlay').on('click tap', function () {
        $('body').removeClass('showMobileNav');
        $('#navBtn').removeClass('active');
        $('header nav').hide(300);
    });
});