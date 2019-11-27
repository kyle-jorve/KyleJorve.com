var portfolioItemData = (function () {
    var data = {
        nextItem: 0,
        thisItem: 0,
        items: []
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
    var queries = new URL(window.location.href).search;

    console.log(data.nextItem)

    // append query strings to links
    filteredLinks.samePage.forEach(function (cur) {
        cur.href += queries;
    });
})();