//Add your transitions in CSS: Write your rules under the "animate" class for the element you're transitioning in. Don't forget to add a CSS transition! For example:

    //.animatedEl{
    //  opacity:0;
    //  transition:all .3s ease;
    //}
    //.animatedEl.animate{
    //  opacity:1;
    //}

//-- "container" is the content section that contains the element to be transitioned in.

//-- "element" is the element to be transitioned in.

//-- "delay": amount of time in milliseconds that animations should be staggered for.

//-- "minViewportWidth": If the window width is smaller than this, the element will not be transitioned. If you always want the element to be transitioned in, set this to 0.

//-- "edgeOrientation": Accepts a string: "top" or "bottom". Default is "bottom". Set whether to begin the viewportBuffer from the top of the element or the bottom.

//-- "viewportBuffer": The element will not be transitioned in until the bottom of the window is THIS many pixels from the bottom of the element. If you want no buffer, set this to 0.

function animateContent(container, element, delay, minViewportWidth, edgeOrientation, viewportBuffer) {
    var containerEl = $(container),
        orientEl = edgeOrientation == "top" ? containerEl.find(element).first() : containerEl.find(element).last(),
        animEls = containerEl.find(element),
        edgeOr = edgeOrientation == "top" ? "top" : "bottom";

    var scroll = function () {
        var windowWidth = $(window).outerWidth(),
            scrollPos = $(window).scrollTop(),
            windowOffset = scrollPos + $(window).outerHeight(), // Window bottom
            elOffset = edgeOr === "top" ? orientEl.offset().top + viewportBuffer : orientEl.offset().top + orientEl.outerHeight() + viewportBuffer; // Where is the oriented edge of the animated element (add a little buffer to the bottom)?

        //Animate elements in
        //If the element to be animated is inside the viewport, has not yet been animated, AND the viewport width is greater than the minimum set width, run the animation.
        if (elOffset <= windowOffset && windowWidth > minViewportWidth) {
            for (i = 0; i < animEls.length; i++) {
                var thisEl = animEls[i],
                    animDelay = (i * delay) + delay;

                (function (el) {
                    setTimeout(function () {
                        $(el).addClass('animate');
                    }, animDelay)
                })(thisEl);
            }
        }
        else if (windowWidth <= minViewportWidth) {
            animEls.removeClass('animatedEl');
        }
    };

    $(window).on('resize', scroll);
    $(document).ready(function () {
        scroll();
        $(window).on('scroll', scroll);
    });
};