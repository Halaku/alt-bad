 (function() {
     var submit = $('.tooltip-submit-button'),
         reset = $('.tooltip-reset-button'),
         closeWindow = $('.tooltip-close-button'),
         mask = $('.tooltip-mask'),
         popupOpen = $('.tooltip-popup-open');

     if (!Modernizr.input.placeholder) {
         $('.tooltip-input').placeholder();
     }

     popupOpen.click(tooltipMod.popupOpen);

     closeWindow.click(tooltipMod.popupClose);

     mask.click(tooltipMod.popupClose);

     submit.click(function(e) {
         e.preventDefault();
         tooltipMod.submit();
     });

     reset.click(tooltipMod.reset);

 })();
