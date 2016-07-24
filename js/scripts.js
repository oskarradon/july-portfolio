$(function() {

	var animationDuration = 1;
	var slider = $('.slider');
	function sliderAbout() {
		TweenMax.to(slider, animationDuration, {backgroundColor: '#FFEF4F', width: '71px', marginLeft:0});
	}

	function sliderWork() {
		TweenMax.to(slider, animationDuration, {backgroundColor: '#FF4747', width: '63px', marginLeft:91});
	}

	function sliderContact() {
		TweenMax.to(slider, animationDuration, {backgroundColor: '#7AD1D1', width: '50px', marginLeft:200});
	}

	// Set nav slider
	function setSlider() {
		var pathname = window.location.pathname;
		if (pathname === 'about.html') {
			sliderAbout();
		} else if (pathname === 'contact.html') {
			sliderContact();
		} else {
			sliderWork();
		}
	}
	setSlider();
		 
	// Animate nav slider

	$('.about').hover(function() {
		sliderAbout();
	}, function() {
		setSlider();
	})
	$('.work').hover(function() {
		sliderWork();
	}, function() {
		setSlider();
	})
	$('.contact').hover(function() {
		sliderContact();
	}, function() {
		setSlider();
	})
})