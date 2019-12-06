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

// on window load, if the previous state persists, reload the page
// (this is typically only a problem in Safari)
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        window.location.reload();
    }
});

$(window).on('load', function () {
    bodyScroll(bodyScrollLim);
});

window.addEventListener('load', function () {
    //Transition load screen out
    document.querySelector('#overlay').classList.add('overlay--loaded');
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
var localLinks = (function () {
    var cssClasses = {
        active: 'active',
        button: 'button',
        pDesc: 'descSection',
        pLink: 'portfolioLink',
        transIn: 'loadScreen--transIn'
    };
    var locHref = window.location.href.replace(window.location.hash, '');
    var trimmedLocHref = locHref.charAt(locHref.length - 1) === '/' ? locHref.substring(0, locHref.length - 1) : locHref;
    var host = window.location.host;
    var origin = window.location.origin;
    var headerBuffer;
    var els;
    var loadTrans;

    // determine if link is local
    var isLocal = function (link) {
        var local = link.indexOf(host) > -1;

        return local;
    };

    // determine if hashed link goes to element on same page
    var isSamePageHash = function (link, href) {
        var hash = link.hash;
        var homePage = trimmedLocHref === origin;
        var samePageTest1 = locHref + hash === href;
        var samePageTest2 = homePage ? href.replace(locHref, '').charAt(0) === "#" : href.replace(trimmedLocHref, '').charAt(0) === "#";
        var samePage = samePageTest1 || samePageTest2;

        return samePage;
    };

    // filter links
    var returnLocalLinks = function (links) {
        var filteredLinks = {
            samePage: [],
            hashes: []
        };

        links.forEach(function (cur) {
            var href = cur.href;
            var hasHash = href.indexOf('#') > -1;
            var samePage = isSamePageHash(cur, href);
            var local = isLocal(href);

            if (local && cur.getAttribute('download') === null) {
                if (hasHash) {
                    if (!samePage) {
                        filteredLinks.samePage.push(cur);
                    }
                    else {
                        filteredLinks.hashes.push(cur);
                    }
                }
                else {
                    filteredLinks.samePage.push(cur);
                }
            }
        });

        return filteredLinks;
    };

    var eventListeners = function () {
        // on document load...
        window.addEventListener('DOMContentLoaded', function () {
            // define els
            els = {
                header: document.querySelector('header'),
                links: Array.prototype.slice.call(document.querySelectorAll('a')),
                portfolioLinks: [],
                overlayClick: document.querySelector('#overlayClick'),
                samePageHashes: [],
                scrollAnchors: $('html, body')
            };

            // define portfolioLinks
            els.links.forEach(function (cur) {
                var href = cur.href.substring(0, cur.href.lastIndexOf('/'));

                if (href.includes('/portfolio/') && !cur.classList.contains(cssClasses.pLink) && cur.closest('.' + cssClasses.pDesc) === null) {
                    els.portfolioLinks.push(cur);
                }
            });

            // append "from" query string to all portfolioLinks
            els.portfolioLinks.forEach(function (cur) {
                var closestSection = cur.closest('section');
                var sectionID;

                cur.href += '?from=' + window.curPgID;

                if (closestSection !== null) {
                    sectionID = closestSection.id;

                    if (sectionID.length) {
                        cur.href += '&section=' + sectionID;
                    }
                }
            });

            // filter out # and non-local links
            els.links = returnLocalLinks(els.links);
        });

        // on window load...
        window.addEventListener('load', function () {
            // define loadTrans
            loadTrans = parseFloat(window.getComputedStyle(els.overlayClick).getPropertyValue('transition-duration')) * 1000;

            // define header buffer
            headerBuffer = els.header.offsetHeight + 16;

            // add event listeners to local links
            els.links.samePage.forEach(function (cur) {
                cur.addEventListener('click', function () {
                    var href = cur.href;

                    // stop from moving to a new page immediately
                    event.preventDefault();

                    // fade loader in
                    els.overlayClick.classList.add(cssClasses.active);

                    // go to target page
                    setTimeout(function () {
                        window.location = href;
                    }, loadTrans);
                });
            });

            // event listeners for same page hash links
            els.links.hashes.forEach(function (cur) {
                cur.addEventListener('click', function () {
                    var target = document.querySelector(cur.hash);
                    var targetOffset = target.getBoundingClientRect().top + window.pageYOffset;

                    event.preventDefault();

                    els.scrollAnchors.animate({
                        scrollTop: targetOffset - headerBuffer
                    }, 1000);
                });
            });
        });
    };

    // -- PUBLIC -- //
    return {
        init: eventListeners,
        returnLocalLinks: returnLocalLinks
    }
})();

localLinks.init();