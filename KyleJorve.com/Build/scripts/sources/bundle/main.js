var bodyScrollLim = 100;

$(document).ready(function () {
    //========------------------------------==========//
    //                   GENERAL                      //
    //========------------------------------==========//
    //Detect if touch device
    if (detectTouchDevice()) {
        $('body').addClass('touchDevice');
    };

    //Detect if mobile
    if (detectMobile()) {
        $('body').addClass('mobile');
    }

    $('.button, button, a').on('tap', function () {
        var $this = $(this);
        setTimeout(function () {
            $this.removeClass('hover');
        }, 300);
    });

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

function detectTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}

function detectMobile() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

(function () {
    var cssClasses = {
        buffer: 'headerBuffer',
        extra: 'headerBuffer--extra'
    };
    var els;
    var headerHeight;
    var breakpoint = 600;
    var extra;

    // define that header height
    var howHigh = function () {
        headerHeight = els.header.offsetHeight;

        extra = window.innerWidth > breakpoint ? 32 : 16;
    };

    // buffer those els, baby!
    var buffer = function () {
        els.buffers.forEach(function (cur) {
            var bufferExtra = cur.classList.contains(cssClasses.extra);

            cur.style.paddingTop = (bufferExtra ? headerHeight + extra : headerHeight) + 'px';
        });
    };

    var both = function () {
        howHigh();
        buffer();
    };

    var eventListeners = function () {
        // on document load...
        window.addEventListener('DOMContentLoaded', function () {
            // define els
            els = {
                buffers: Array.prototype.slice.call(document.querySelectorAll('.' + cssClasses.buffer)),
                header: document.querySelector('header')
            };
        });

        // on window load and resize, do all the stuff
        window.addEventListener('load', both);
        window.addEventListener('resize', both);
    };

    // -- iNIT -- //
    eventListeners();
})();