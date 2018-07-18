(function () {
    var nodes = {
        enterBtn: document.querySelector('#closeIntro'),
        intro: document.querySelector('#introWrp')
    };

    var introTrans = parseFloat(window.getComputedStyle(nodes.intro).getPropertyValue('transition-duration')) * 1000;

    var eventListeners = function () {
        document.addEventListener('DOMContentLoaded', function () {
            if (sessionStorage.getItem('introScreenShown') === "true") {
                nodes.intro.style.display = 'none';
                document.querySelector('body').classList.remove('introBody');
            }
        });

        nodes.enterBtn.addEventListener('click', function () {
            nodes.intro.classList.add('inactive');

            setTimeout(function () {
                document.querySelector('body').classList.remove('introBody');
                nodes.intro.style.display = 'none';
            }, introTrans);
            
            sessionStorage.setItem('introScreenShown', 'true');
        });
    };

    eventListeners();
})();