(function() {
    var closePopup = $('.popup-content-close'),
        popupMask = $('.popup-mask'),
        addProject = $('.projects-add'),
        popupWindow = $('.popup-content'),
        popupButton = $('.popup-button'),
        popup = $('.popup-wrapper'),
        popupSuccess = $('.popup-success'),
        popupError = $('.popup-info-error'),
        inputs = $('.input-watch'),
        popupInput = $('.popup-input-file'),
        popupFakeInput = $('.popup-input-file-fake'),
        projectInfo = false

    addProject.click(function() {
        popupWindow.show(200);
        popupSuccess.hide();
        popup.show();
        $(popupInput).change(function() {
            $(popupFakeInput).val($(popupInput).val());
        })
    })

    function inputCheck() {
        $('.tooltip').remove();
        $(inputs).each(function(index, elem) {
            var position = $(elem).attr('data-pos'),
                errorText = $(elem).attr('data-error')
            if ($.trim($(elem).val())) {
                $(elem).removeClass('popup-error-highlight');

            } else {
                $(elem).addClass('popup-error-highlight');
                if (position == 'left') {
                    $(elem).parent().append('<div class="tooltip">' + errorText + '</div>');
                } else {

                }

            }

        });
        if ($(inputs).hasClass('popup-error-highlight')) {
            popupError.show(200);
        } else {
            popupError.hide(200);
            return true;
        }
    }

    $(popupButton).click(function(e) {
        e.preventDefault();
        projectInfo = inputCheck();
        $(inputs).keyup(inputCheck);
        $(popupInput).change(function() {
            inputCheck();
        })
        if (projectInfo) {
            popupWindow.hide(200);
            popupSuccess.show(200);
        }
    })

    $(closePopup).click(function() {
        $(popup).hide();
        $(inputs)
            .off()
            .val('')
            .removeClass('popup-error-highlight');
        $(popupInput).off();
        popupError.hide();
        $('.tooltip').remove();
        $('.tooltip-right').remove();
    })

    $(popupMask).click(function() {
        $(popup).hide();
        $(inputs)
            .off()
            .val('')
            .removeClass('popup-error-highlight');
        $(popupInput).off();
        popupError.hide();
        $('.tooltip').remove();
        $('.tooltip-right').remove();
    })
})();
