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
    var topNav = '#topNav',
        navItems,
        navTrans,
        recentWork,
        recentWorkItems,
        socialMediaItems,
        navLength,
        socialMediaLength,
        delayClose;

    if ($(topNav).length > 0) {
        navItems = $(topNav).find('nav li');
        navTrans = (parseFloat(window.getComputedStyle(document.querySelector(topNav)).transitionDuration) * 1000) / 2;
        recentWork = $(topNav).find('.recentWorkContainer');
        recentWorkItems = $(topNav).find('.portfolioItem');
        socialMediaItems = $(topNav).find('.iconContainer li');
        navLength = navItems.length;
        socialMediaLength = socialMediaItems.length;
        delayClose = navLength * 100;

        $('#navBtn').on('click tap', function () {
            //Open the mobile nav
            if (!$('html').hasClass('showMobileNav')) {
                $('html').addClass('showMobileNav');
                $(this).addClass('active');

                setTimeout(function () {
                    //animate nav items
                    navItems.each(function (index) {
                        var animDelay = index * 100;
                        var thisItem = $(this);

                        setTimeout(function () {
                            thisItem.addClass('active');
                        }, animDelay);
                    });

                    //animate recent work section
                    recentWork.addClass('active');

                    //animate recent work items
                    recentWorkItems.each(function (index) {
                        var animDelay = index * 100;
                        var thisItem = $(this);

                        setTimeout(function () {
                            thisItem.addClass('active');
                        }, animDelay);
                    });

                    //animate social media icons
                    socialMediaItems.each(function (index) {
                        var animDelay = index * 100;
                        var thisItem = $(this);

                        setTimeout(function () {
                            thisItem.addClass('active');
                        }, animDelay);
                    });

                }, navTrans);
            }
            //Close the mobile nav
            else {
                $(this).removeClass('active');

                //animate nav items out
                navItems.each(function (index) {
                    var reverseIndex = navLength - index - 1;
                    var animDelay = reverseIndex * 100;
                    var thisItem = $(this);

                    setTimeout(function () {
                        thisItem.removeClass('active');
                    }, animDelay);
                });

                //animate recent work section out
                recentWork.removeClass('active');

                //animate recent work items out
                recentWorkItems.each(function (index) {
                    var reverseIndex = socialMediaLength - index - 1;
                    var animDelay = reverseIndex * 100;
                    var thisItem = $(this);

                    setTimeout(function () {
                        thisItem.removeClass('active');
                    }, animDelay);
                });

                //animate social media icons out
                socialMediaItems.each(function (index) {
                    var reverseIndex = socialMediaLength - index - 1;
                    var animDelay = reverseIndex * 100;
                    var thisItem = $(this);

                    setTimeout(function () {
                        thisItem.removeClass('active');
                    }, animDelay);
                });

                setTimeout(function () {
                    $('html').removeClass('showMobileNav');
                }, delayClose);
            }
        });
    }
});