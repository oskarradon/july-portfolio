$(function() {

	var animationDuration = 1;
	var slider = document.getElementsByClassName('slider');
	var easing = Power4.easeOut;

	var colorRed = '#FF4747';
	var colorYellow = '#FFEF4F';
	var colorBlue = '#7AD1D1';

	// Slider animations
	function sliderAbout() {
		TweenMax.to(slider, animationDuration, {ease: easing, backgroundColor: colorYellow, width: '72px', marginLeft:-1});
	}

	function sliderWork() {
		TweenMax.to(slider, animationDuration, {ease: easing, backgroundColor: colorRed, width: '64px', marginLeft:91});
	}

	function sliderContact() {
		TweenMax.to(slider, animationDuration, {ease: easing, backgroundColor: colorBlue, width: '97px', marginLeft:174});
	}

	// Animate nav slider based on current page
	function setSlider() {
		var pathname = window.location.pathname;
		if (pathname === '/about.html') {
			sliderAbout();
		} else if (pathname === '/contact.html') {
			sliderContact();
		} else {
			sliderWork();
		}
	}
	
	// Animate slider on page load
	setSlider();
		 
	// Animate nav slider on hover
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

	// Initialize Slick carousel
	$('.slick').slick({
		dots: true,
		infinite: false,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 2000,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 800,
				settings: {					
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
})