console.log('js is ok');
var closePopup = $('.popup-content-close'),
		popupWrapper = $('.popup-wrapper'),
		addProject = $('.projects-add')

$(addProject).click(function() {
	$(popupWrapper).css('display', 'block')
})

$(closePopup).click(function() {
	$(popupWrapper).css('display', 'none')
})


