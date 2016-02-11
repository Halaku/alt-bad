var closePopup = $('.popup-content-close'),
		popupMask = $('.popup-mask'),
		addProject = $('.projects-add'),
		popupWindow = $('.popup-content'),
		popupButton = $('.popup-button'),
		popup = $('.popup-wrapper'),
		popupSuccess = $('.popup-success')


addProject.click(function() {
	popupWindow.show();
	popupSuccess.hide();
	popup.show();
})

$(closePopup).click(function() {
	$(popup).hide();
})

$(popupMask).click(function() {
	$(popup).hide();
})

$(popupButton).click(function(e) {
	e.preventDefault();
	popupWindow.hide();
	popupSuccess.show();
})