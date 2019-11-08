var portfolioItemController = (function () {
    var nodes = {
        lightbox: document.querySelector('#lightboxWrp'),
        buttons: {
            open: Array.prototype.slice.call(document.querySelectorAll('.openLightbox')),
            close: document.querySelector('#closeLightbox'),
            closePage: document.querySelector('#closePage')
        }
    };

    var eventListeners = function () {
        // close page
        nodes.buttons.closePage.addEventListener('click', function () {
            window.history.back();
        });

        //open lightbox
        nodes.buttons.open.forEach(function (cur) {
            cur.addEventListener('click', function () {
                nodes.lightbox.classList.add('active');
            });
        });

        //close lightbox
        nodes.buttons.close.addEventListener('click', function () {
            nodes.lightbox.classList.remove('active');
        });
    };

    eventListeners();
})();