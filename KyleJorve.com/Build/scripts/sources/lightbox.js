var lightboxController = (function () {
    var nodes = {
        lightbox: document.querySelector('#lightboxWrp'),
        img: document.querySelector('#lightboxImg'),
        bg: document.querySelector('#lightboxBg'),
        buttons: {
            open: Array.prototype.slice.call(document.querySelectorAll('.openLightbox')),
            close: document.querySelector('#closeLightbox'),
            toItem: document.querySelector('#toItem')
        }
    };
    var lightboxTrans = parseFloat(window.getComputedStyle(nodes.lightbox).getPropertyValue('transition-duration')) * 1000;

    var eventListeners = function () {
        //open lightbox
        nodes.buttons.open.forEach(function (cur) {
            cur.addEventListener('click', function () {
                var thisImgSrc = cur.getAttribute('data-src'),
                    thisItemUrl = cur.getAttribute('data-url');

                nodes.img.src = thisImgSrc;
                nodes.buttons.toItem.setAttribute('href', thisItemUrl);
                nodes.bg.style.backgroundImage = "url('" + thisImgSrc + "')";
                nodes.lightbox.classList.add('active');
            });
        });

        //close lightbox
        nodes.buttons.close.addEventListener('click', function () {
            nodes.lightbox.classList.remove('active');
            setTimeout(function () {
                nodes.img.src = '';
                nodes.buttons.toItem.setAttribute('href', '');
                nodes.bg.style.background = '';
            }, lightboxTrans);
        });
    };

    eventListeners();
})();