$(function() {

	// Set nav slider
	function setSlider() {
		var pathname = window.location.pathname;
		if (pathname === 'about.html') {
			$('.slider').css({'margin-left': '0px'});
		} else if (pathname === 'contact.html') {
			$('.slider').css({'margin-left': '200px'});
		} else {
			$('.slider').css({'margin-left': '50px'});
		}
	}
	setSlider();
		

	// Animate nav slider

	$('.about').hover(function() {
		TweenMax.to($('.slider'), 1, {backgroundColor: '#FFEF4F', width: '60px', marginLeft:0});
	}, setSlider())
	$('.work').hover(function() {
		TweenMax.to($('.slider'), 1, {backgroundColor: '#FF4747', width: '50px', marginLeft:100});
	}, setSlider())
	$('.contact').hover(function() {
		TweenMax.to($('.slider'), 1, {backgroundColor: '#7AD1D1', width: '50px', marginLeft:200});
	}, setSlider())
})