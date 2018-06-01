var leftNavController = (function () {
    //========------------------------------==========//
    //                LEFT NAVIGATION                 //
    //========------------------------------==========//
    var leftNavLinks = Array.prototype.slice.call(document.querySelectorAll('#leftNav a')),
        leftNavTargets = [],
        vpMid,
        targetOffsets = {},
        breakpoint = 800;

    //set targets
    leftNavLinks.forEach(function (cur) {
        leftNavTargets.push(cur.getAttribute('href').toString());
    });

    console.log(leftNavTargets);

    //set variables
    var setVars = function () {
        for (var i = 0; i < leftNavTargets.length; i++) {
            targetOffsets[i] = {
                top: document.querySelector(leftNavTargets[i]).getBoundingClientRect().top + window.scrollY,
                bottom: document.querySelector(leftNavTargets[i]).getBoundingClientRect().top + window.scrollY + document.querySelector(leftNavTargets[i]).offsetHeight
            };
        }
        vpMid = window.scrollY + (window.innerHeight / 2);
    };

    setVars();

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

    var eventListeners = function () {
        window.addEventListener('scroll', scrollFn);

        window.addEventListener('resize', function () {
            setVars();
            scrollFn();
        });

        window.addEventListener('orientationchange', function () {
            setVars();
            scrollFn();
        });
    };

    return {
        init: function () {
            eventListeners();            
        }
    }
})();

leftNavController.init();