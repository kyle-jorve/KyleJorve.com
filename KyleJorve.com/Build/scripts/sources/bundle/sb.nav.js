$(document).ready(function () {
    //========------------------------------==========//
    //             MOBILE TOP NAVIGATION              //
    //========------------------------------==========//
    var topNav = $('#topNav'),
        navItems = topNav.find('nav li');

    $('#navBtn').on('click tap', function () {
        //Open/Close the mobile nav
        //$('body').toggleClass('showMobileNav');
        //$(this).toggleClass('active');

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

    //========------------------------------==========//
    //             SCROLL TO TOP BUTTON               //
    //========------------------------------==========//
    //--------Detect scroll position-------//    
    $('.toTopBtn').click(function () {
        curScrollAnchor = $("html").scrollTop() > $("body").scrollTop() ? $("html") : $("body");
        curScrollAnchor.animate({ scrollTop: 0 }, 1000, 'swing');
    });

    //Scroll to content areas
    $('a[href*="#"]:not([href^="index.html#"])').on('click tap', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash),
                headerBuffer = $('header').outerHeight() + 16;

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - headerBuffer)
                }, 1000);
                return false;
            }
        }
    });
});