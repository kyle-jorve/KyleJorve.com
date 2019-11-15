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

// add buffer to elements for header
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

    // -- INIT -- //
    eventListeners();
})();

// IE warning
(function () {
    var activeClass = 'active';
    var detectIE = (function() {
        var agent = window.navigator.userAgent.toLowerCase();
        var isIE = agent.indexOf('msie') > -1 || agent.indexOf('trident') > -1;

        return isIE;
    })();
    var els;
    var lbTrans;
    var lbWrpTrans;

    var closeLb = function () {
        // hide lightbox
        els.lb.classList.remove(activeClass);

        // wait for lightbox to transition out, then...
        setTimeout(function () {
            // hide lightbox wrapper
            els.lbWrp.classList.remove(activeClass);
        }, lbTrans);
    };

    var eventListeners = function () {
        // on document load...
        window.addEventListener('DOMContentLoaded', function () {
            // define els
            els = {
                lbWrp: document.querySelector('#ieLbWrp'),
                lb: document.querySelector('#ieLb'),
                close: document.querySelector('#closeIELb'),
                overlay: document.querySelector('#ieLbOverlay')
            };

            // define lbWrpTrans
            lbWrpTrans = parseFloat(window.getComputedStyle(els.lbWrp).getPropertyValue('transition-duration')) * 1000;

            // define lbTrans
            lbTrans = parseFloat(window.getComputedStyle(els.lb).getPropertyValue('transition-duration')) * 1000;

            // add click events
            els.close.addEventListener('click', closeLb);
            els.overlay.addEventListener('click', closeLb);
        });

        // on window load...
        window.addEventListener('load', function () {
            // if user is on IE...
            if (detectIE) {
                // show lightbox wrapper
                els.lbWrp.classList.add(activeClass);

                // wait for it to transition in, then...
                setTimeout(function () {
                    // show lightbox
                    els.lb.classList.add(activeClass);
                }, lbWrpTrans);
            }
        })
    };

    // init
    eventListeners();
})();