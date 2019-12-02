var portfolioItemData = (function () {
    var data = {
        fromHome: false,
        thisCat: '',
        nextItem: 0,
        thisItem: 0,
        items: {}
    };

    // -- PUBLIC -- //
    return {
        data: data,
        update: function (options) {
            for (var key in options) {
                data[key] = options[key];
            }
        }
    }
})();

var portfolioItemMain = (function () {
    var data = portfolioItemData.data;
    var links = Array.prototype.slice.call(document.querySelectorAll('#portfolioItemDesc a'));
    var filteredLinks = localLinks.returnLocalLinks(links);
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
    });
})();