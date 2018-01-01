//Function for initiating parallax scrolling effects for background images
function parallaxBg(container, element, factor, breakpoint, xPosition){

    $(container).each(function () {
        var container = $(this)
            , el = container.find(element);

        var scroll = function () {

            var scrolltop = $('body').scrollTop() > $('html').scrollTop() ? $('body').scrollTop() : $('html').scrollTop() //What is the scroll position?
                , containerHeight = container.outerHeight() //How tall is the container?
                , containerWidth = container.outerWidth() //How wide is the container?
                , containerOffset = container.offset().top //Where is the container on the page?
                , windowWidth = $(window).outerWidth() //What is the window height?
                , windowHeight = $(window).outerHeight() //What is the window height?
                , position = (scrolltop - containerOffset) / containerHeight// + 0.5
                , containerBottom = containerHeight + containerOffset //Where is the bottom of the container?
                , windowBottom = scrolltop + windowHeight //Where is the bottom of the window?
                , mutation = position * factor * containerHeight;

            if (containerBottom >= scrolltop && containerOffset < windowBottom && windowWidth > breakpoint) { // Is the container in the viewport?
                el.css({
                    'background-attachment': 'fixed',
                    "background-position": xPosition + " " + mutation + "px"
                });
            }
            else if (windowWidth <= breakpoint) {
                el.css({
                    'background-attachment': 'scroll',
                    'background-position': 'center center'
                });
            }
        };

        $(document).ready(scroll);
        $(window).on("scroll resize", scroll);
    });
};

//Function for initiating parallax scrolling effects for background images
function parallaxBgAlt(container, element, factor, breakpoint, xPosition) {
    $(container).each(function () {
        var container = $(this)
            , el = container.find(element);

        var scroll = function () {
            var scrolltop = $('body').scrollTop() > $('html').scrollTop() ? $('body').scrollTop() : $('html').scrollTop()
                , containerHeight = container.height()
                , containerOffset = container.offset().top
                , windowWidth = $(window).outerWidth()
                , windowHeight = $(window).outerHeight()
                , position = (scrolltop - containerOffset) / containerHeight + 0.5
                , containerBottom = containerHeight + containerOffset //Where is the bottom of the container?
                , windowBottom = scrolltop + windowHeight //Where is the bottom of the window?
                , mutation = position * factor * containerHeight;

            if (containerBottom >= scrolltop && containerOffset < windowBottom && windowWidth > breakpoint)
                el.css("background-position", xPosition + " " + mutation + "px");
        }

        $(document).ready(scroll);
        $(window).on("scroll resize", scroll);
    });
};

//Function for initiating parallax scrolling effects for elements
function parallax(container, element, factor, breakpoint) {
    $(container).each(function () {
        var containerEL = $(this),
            el = containerEL.find(element),
            containerHeight = containerEL.outerHeight(),
            containerOffset = containerEL.offset().top;

        var scroll = function () {
            var scrolltop = $('body').scrollTop() > $('html').scrollTop() ? $('body').scrollTop() : $('html').scrollTop(),
                windowHeight = $(window).outerHeight(),
                windowWidth = $(window).outerWidth(),
                position = (scrolltop - containerOffset) / containerHeight, // + 0.5
                mutation = position * factor * containerHeight;

            if (containerOffset + containerHeight >= scrolltop && containerOffset < scrolltop + windowHeight && windowWidth > breakpoint) {
                el.css("transform", "translateY(" + mutation + "px)");
            }
            else if (windowWidth <= breakpoint) {
                el.removeAttr('style');
            }
        }

        $(document).ready(function () {
            scroll;

            el.addClass('parallaxEl');
        });
        $(window).on("scroll resize", scroll);
    });
};

//function parallax(container, element, factor) {
//    var container = $(container)
//        , containerWidth
//        , containerHeight
//        , containerAspect
//        , containerOffset
//        , windowHeight
//        , scrollTop;

//    if (container.css('position') == "static") {
//        container.css('position', 'relative');
//    };

//    container.find(element).each(function () {
//        var el = $(this)
//            , imgWidth
//            , imgHeight
//            , imgAspect
//            , newHeight
//            , newWidth
//            , windowHeight
//            , position;

//        var resize = function () {
//            containerWidth = container.outerWidth();
//            containerHeight = container.outerHeight();
//            containerAspect = containerWidth / containerHeight;
//            containerOffset = container.offset().top;
//            imgWidth = el.outerWidth();
//            imgHeight = el.outerHeight();
//            imgAspect = imgWidth / imgHeight;
//            newHeight = containerAspect < imgAspect ? containerHeight : containerWidth / imgAspect;
//            newHeight = Math.max(newHeight, containerHeight * (1 + factor));
//            newWidth = newHeight * imgAspect;
//            scrollTop = $('body').scrollTop() > $('html').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
//            windowHeight = $(window).outerHeight();
//            position = (scrollTop - containerOffset) / containerHeight + 0.5;
//        };

//        var scroll = function () {
//            scrollTop = $('body').scrollTop() > $('html').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
//            position = (scrollTop - containerOffset) / containerHeight + 0.5;
//            var mutation = position * factor * containerHeight;

//            el.css({
//                'position': "absolute",
//                'top': "50%",
//                'left': "50%",
//                'width': newWidth + "px",
//                'height': newHeight + "px",
//                'max-width': "none",
//                'max-height': "none",
//                'margin-left': (-newWidth / 2) + "px",
//                'margin-top': (-newHeight / 2) + "px",
//                "transform": "translateY(" + mutation + "px)"
//            });
//        };
//        $(window).on('load resize', resize);
//        $(window).on("load scroll", scroll);
//    });
//};