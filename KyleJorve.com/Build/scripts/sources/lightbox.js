var lightboxController = (function () {
    var nodes = {
        lightbox: document.querySelector('#lightboxWrp'),
        img: document.querySelector('#lightboxImg'),
        bg: document.querySelector('#lightboxBg'),
        buttons: {
            close: document.querySelector('#closeLightbox'),
            toItem: document.querySelector('#toItem')
        }
    };
    var lightboxTrans = parseFloat(window.getComputedStyle(nodes.lightbox).getPropertyValue('transition-duration')) * 1000;

    var eventListeners = function () {
        //close lightbox
        nodes.buttons.close.addEventListener('click', function () {
            nodes.lightbox.classList.remove('active');
            setTimeout(function () {
                nodes.img.src = '';
                nodes.buttons.toItem.setAttribute('href', '');
                nodes.bg.style.background = '';
            }, lightboxTrans);
        });

        // on document load...
        window.addEventListener('DOMContentLoaded', function () {
            // add lightbox open buttons to els object
            nodes.buttons.open = Array.prototype.slice.call(document.querySelectorAll('.openLightbox'));

            // add event listeners to lightbox open buttons
            nodes.buttons.open.forEach(function (cur) {
                cur.addEventListener('click', function () {
                    var thisImgSrc = cur.getAttribute('data-src'),
                        thisItemUrl = cur.getAttribute('data-url') + '?from=' + window.curPgID;

                    nodes.img.src = thisImgSrc;
                    nodes.buttons.toItem.setAttribute('href', thisItemUrl);
                    nodes.bg.style.backgroundImage = "url('" + thisImgSrc + "')";
                    nodes.lightbox.classList.add('active');
                });
            });
        });
    };

    eventListeners();
})();