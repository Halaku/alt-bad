(function() {
    var popupButton = $('.contactme-buttons-submit'),
        inputs = $('.input-watch'),
        projectInfo = false

    function inputCheck() {
        $('.tooltip').remove();
        $('.tooltip-right').remove();
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
                    $(elem).parent().append('<div class="tooltip-right">' + errorText + '</div>');
                }

            }

        });
        if (!$(inputs).hasClass('popup-error-highlight')) {
            return true;
        }
    }

    $(popupButton).click(function(e) {
        e.preventDefault();
        projectInfo = inputCheck();
        $(inputs).keyup(inputCheck);

        if (projectInfo) {

        }
    })

    $('.contactme-buttons-reset').click(function() {

        $(inputs)
            .off()
            .removeClass('popup-error-highlight');
        $('.tooltip').remove();
        $('.tooltip-right').remove();
    })
})();
