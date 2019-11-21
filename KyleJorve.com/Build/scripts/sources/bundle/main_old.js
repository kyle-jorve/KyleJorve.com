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
    var breakpoint = 600;
    var els;
    var headerHeight;
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

//========------------------------------==========//
//             LOCAL and HASH LINKS               //
//========------------------------------==========//
// smooth loader transition for local links on other pages,
// smooth scrolling to hash links on same page
(function () {
    var links;
    var samePageHashes;
    var header;
    var scrollAnchors;
    var loader;
    var loadTrans;
    var locHref = window.location.href.replace(window.location.hash, '');
    var trimmedLocHref = locHref.charAt(locHref.length - 1) === '/' ? locHref.substring(0, locHref.length - 1) : locHref;
    var host = window.location.host;
    var origin = window.location.origin;
    var path = window.location.pathname;

    // determine if link is a local link
    var isLocal = function (link) {
        var local = link.indexOf(host) > -1;

        return local;
    };

    // determine if hashed link goes to element on same page
    var isSamePageHash = function (link, href) {
        var hash = link.hash;
        var homePage = trimmedLocHref === origin;
        var samePageTest1 = locHref + hash === href;
        var samePageTest2 = homePage ? href.replace(locHref, '').charAt(0) === '#' : href.replace(trimmedLocHref, '').charAt(0) === '#';
        var samePage = samePageTest1 || samePageTest2 ? true : false;

        return samePage;
    };

    var eventListeners = function () {
        // on window load
        window.addEventListener('load', function () {
            // define links
            links = Array.prototype.slice.call(document.querySelectorAll('a'));
            samePageHashes = [];

            // filter out # and non-local links
            links = links.filter(function (cur) {
                var href = cur.href;
                var hasHash = href.indexOf('#') > -1;
                var samePage = isSamePageHash(cur, href);
                var local = isLocal(href);
                var download = cur.hasAttribute('download') || cur.classList.contains('download');

                if (local) {
                    if (hasHash) {
                        if (!samePage) {
                            return cur;
                        }
                        else {
                            samePageHashes.push(cur);
                        }
                    }
                    else {
                        if (!download) {
                            return cur;
                        }
                    }
                }
            });

            // define header
            header = document.querySelector('header');

            // define scrollAnchors
            scrollAnchors = $('html, body');

            // define loader
            loader = document.querySelector('#loader');

            // define loader transition
            loadTrans = parseFloat(window.getComputedStyle(loader).getPropertyValue('transition-duration')) * 1000;

            // add event listeners to local links
            links.forEach(function (cur) {
                cur.addEventListener('click', function (event) {
                    var href = event.currentTarget.href;

                    // stop from moving to new page
                    event.preventDefault();

                    // fade in loader
                    showLoader();

                    // go to target page
                    setTimeout(function () {
                        window.location = href;
                    }, loadTrans);
                });
            });

            // event listeners for same page hash links
            samePageHashes.forEach(function (cur) {
                cur.addEventListener('click', function (event) {
                    var headerBuffer = header.offsetHeight + 16;
                    var target = document.querySelector(event.currentTarget.hash);
                    var targetOffset = target.getBoundingClientRect().top + window.scrollY;

                    event.preventDefault();

                    // close mobile nav
                    if (document.querySelector('body').classList.contains('showMobileNav')) {
                        document.querySelector('#navBtn').click();
                    }

                    scrollAnchors.animate({
                        scrollTop: targetOffset - headerBuffer
                    }, 1000);
                });
            });
        });
    };

    // -- INIT -- //
    eventListeners();
})();