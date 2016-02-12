(function() {
    var submit = $('.tooltip-submit-button'),
        reset = $('.tooltip-reset-button'),
        closeWindow = $('.tooltip-close-button'),
        mask = $('.tooltip-mask'),
        popupOpen = $('.tooltip-popup-open'),
        popupWrapper = $('.tooltip-popup-wrapper'),
        popupWindow = $('.tooltip-popoup-window'),
        popupSuccess = $('.tooltip-popup-success'),
        inputs = $('.tooltip-input'),
        inputFile = $('.tooltip-file'),
        inputFileFake = $('.tooltip-file-fake'),
        tooltip = $('.tooltip, .tooltip-right'),
        noTooltip = false;


    function inputCheck() {
        $(tooltip.selector).remove();
        $(inputs).each(function(index, elem) {
            var tooltipSide = $(elem).attr('data-pos'),
                errorText = $(elem).attr('data-error');
            if ($.trim($(elem).val())) {
                $(elem).removeClass('input-error-highlight');

            } else {
                $(elem).addClass('input-error-highlight');
                if (tooltipSide == 'left') {
                    $(elem).parent().append('<div class="tooltip">' + errorText + '</div>');
                } else {
                    $(elem).parent().append('<div class="tooltip-right">' + errorText + '</div>');
                }
            }
        });
        if (!$(inputs).hasClass('input-error-highlight')) {
            return true;
        }
    }

    function resetInput() {
        $(inputs)
            .off('keyup')
            .val('')
            .removeClass('input-error-highlight');
        $(inputFile).off();
        popupSuccess.hide();
        $(tooltip.selector).remove();
    }

    popupOpen.click(function() {
        resetInput();
        popupWrapper.show();
        popupWindow.show();
        inputFile.change(function() {
            $(inputFileFake).val($(inputFile)[0].files[0].name);
        });
    });

    submit.click(function(e) {
        e.preventDefault();
        noTooltip = inputCheck();
        $(inputs).keyup(inputCheck);
        $(inputFile).change(inputCheck);
        if (noTooltip) {
            popupWindow.hide(200);
            popupSuccess.show(200);
        }
    });

    reset.click(resetInput);

    closeWindow.click(function() {
        $(popupWrapper).hide();
    });

    mask.click(function() {
        $(popupWrapper).hide();
    });
})();
