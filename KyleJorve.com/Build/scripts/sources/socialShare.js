var socialShareController = (function () {
    //reveal social share toast
    //close it

    var showToastClass = 'showSocialShareToast';
    var nodes = {
        body: document.querySelector('body'),
        overlay: document.querySelector('#toastOverlay'),
        buttons: {
            share: Array.prototype.slice.call(document.querySelectorAll('.shareBtn')),
            close: document.querySelector('#closeToast')
        }
    };

    var eventListeners = function () {
        var close = function () {
            nodes.body.classList.remove(showToastClass);
        };

        // Show social share toast
        nodes.buttons.share.forEach(function (cur) {
            cur.addEventListener('click', function () {
                nodes.body.classList.add(showToastClass);
            });
        });

        // ...and close it
        nodes.buttons.close.addEventListener('click', close);
        nodes.overlay.addEventListener('click', close);
    };

    eventListeners();
})();