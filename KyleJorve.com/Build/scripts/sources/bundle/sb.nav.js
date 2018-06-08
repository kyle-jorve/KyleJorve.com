$(document).ready(function () {
    //========------------------------------==========//
    //                   ID LINKS                     //
    //========------------------------------==========//
    $('a[href^="#"]').on('click', function (event) {
        var thisTarget = $(this).attr('href'),
            targetOffset = $(thisTarget).offset().top - $('header').outerHeight();

        event.preventDefault();

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000, 'swing');
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
});