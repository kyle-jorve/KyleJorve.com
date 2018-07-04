var lightboxController = (function () {
    //OPEN LIGHTBOX
    //find image
    //change image source in lightbox
    //change image source in lightbox background
    //reveal lightbox

    //CLOSE LIGHTBOX
    //hide lightbox
    //remove image source in lightbox
    //remove image source in lightbox background

    var nodes = {
        lightbox: document.querySelector('#lightboxWrp'),
        img: document.querySelector('#lightboxImg'),
        bg: document.querySelector('#lightboxBg'),
        buttons: {
            open: Array.prototype.slice.call(document.querySelectorAll('.openLightbox')),
            close: document.querySelector('#closeLightbox')
        }
    };
    var lightboxTrans = parseFloat(window.getComputedStyle(nodes.lightbox).getPropertyValue('transition-duration')) * 1000;

    var findAncestor = function (el, ancestorClass) {
        for ( ; el && el !== document; el = el.parentNode) {
            if (el.classList.contains(ancestorClass)) {
                return el;
                break;
            }
        }
        return null;
    };

    var eventListeners = function () {
        //open lightbox
        nodes.buttons.open.forEach(function (cur) {
            cur.addEventListener('click', function () {
                var thisImgSrc = window.getComputedStyle(findAncestor(cur, 'portfolioItem')).getPropertyValue('background-image').split('"')[1];

                nodes.img.src = thisImgSrc;
                nodes.bg.style.backgroundImage = "url('" + thisImgSrc + "')";
                nodes.lightbox.classList.add('active');
            });
        });

        //close lightbox
        nodes.buttons.close.addEventListener('click', function () {
            nodes.lightbox.classList.remove('active');
            setTimeout(function () {
                nodes.img.src = '';
                nodes.bg.style.background = '';
            }, lightboxTrans);
        });
    };

    eventListeners();
})();