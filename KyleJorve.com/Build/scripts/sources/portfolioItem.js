(function () {
    var els = {
        buttons: {
            open: Array.prototype.slice.call(document.querySelectorAll('.openLightbox')),
            close: document.querySelector('#closeLightbox')
        },
        lightbox: document.querySelector('#lightboxWrp'),
        links: Array.prototype.slice.call(document.querySelectorAll('#portfolioItemDesc a'))
    };
    var filteredLinks = localLinks.returnLocalLinks(els.links);
    var queries = window.location.search;
    var queriesArr = queries.substring(1).split('&');
    var queriesObj = {};

    // define queriesObj
    queriesArr.forEach(function (cur) {
        var thisArr = cur.split('=');

        queriesObj[thisArr[0]] = thisArr[1];
    });

    // append query strings to links
    filteredLinks.samePage.forEach(function (cur) {
        // append "from" query
        cur.href += '?from=' + queriesObj.from;

        // append "section" query if it exists
        if (queriesObj.section !== undefined) {
            cur.href += '&section=' + queriesObj.section;
        }
    });

    var eventListeners = function () {
        //open lightbox
        els.buttons.open.forEach(function (cur) {
            cur.addEventListener('click', function () {
                els.lightbox.classList.add('active');
            });
        });

        //close lightbox
        els.buttons.close.addEventListener('click', function () {
            els.lightbox.classList.remove('active');
        });
    };

    // -- INIT -- //
    eventListeners();
})();