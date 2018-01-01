$(document).ready(function () {
    //========------------------------------==========//
    //                DYNAMIC INPUTS                  //
    //========------------------------------==========//
    //contact form, dynamic inputs
    if ($('.dynamicInputWrp').length > 0) {
        dynamicInputs('.dynamicInputWrp input');
        dynamicInputs('.dynamicInputWrp textarea');
    }
});

function dynamicInputs(input) {
    $(input).each(function () {
        var container = $(this).closest('.dynamicInputWrp');
        var thisInput = $(this);
        var thisLabel = $(this).siblings('label');

        //Move label out of the way when focused on an element
        thisInput.on('focus', function () {

            if (!container.hasClass('focused')) {
                container.addClass('focused');
            }
        });
        //Move label back inside input wrap, unless there are characters in the input
        thisInput.on('blur', function () {
            if (thisInput.val().length === 0) {
                container.removeClass('focused');
            }
            else if (thisInput.val().length > 0 && container.hasClass('highlightRequired')) {
                container.removeClass('highlightRequired');
            };
            //For password confirmation
            if ($('.pwrdForm').length > 0 && thisInput.val().length > 0) {
                $('.pwrdForm').removeClass('revealDiffPwrds');
                $('.pwrdForm .dynamicInputWrp').removeClass('highlightRequired');
            }
        });
        //If inputs are auto-filled, move labels out of the way
        thisInput.on('change', function () {

            if (thisInput.val().length === 0) {
                container.removeClass('focused');
            }
            else if (thisInput.val().length > 0) {
                container.addClass('focused').removeClass('highlightRequired');
            }
        });

        //If inputs are filled in when page is loaded, move labels out of the way
        $(window).on('load', function () {
            if (thisInput.val().length > 0) {

                container.addClass('focused');
            }
        });
    });
};