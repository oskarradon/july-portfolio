
// Variables
var animationDuration = 1;
var slider = document.getElementsByClassName('slider');
var easing = Power4.easeOut;

var colorRed = '#FF4747';
var colorGreen = '#79D879';
var colorBlue = '#7AD1D1';

// Slider animations
function sliderAbout() {
	TweenMax.to(slider, animationDuration, {ease: easing, backgroundColor: colorGreen, width: '72px', marginLeft:-1});
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

var navElements = ['.about', '.work', '.contact'];
var sliderFunctions = [sliderAbout, sliderWork, sliderContact];

navElements.forEach(function(element, index) {
	document.querySelector(element).addEventListener('mouseenter', function() {
		sliderFunctions[index]();
	});
	document.querySelector(element).addEventListener('mouseleave', function() {
		setSlider();
	});
});

// Initialize Slick carousel
if (document.querySelector('.slick')) {
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
}

var ctx = document.getElementById("skillsChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Sketch', 'Photoshop', 'Illustrator', 'User Experience', 'JavaScript', 'Sass', 'Git', 'Jade', 'Gulp', 'jQuery', 'Angular 2', 'Ember', 'React', 'Node', 'WebPack'],
        datasets: [{
            label: 'Design',
            data: [10, 8, 9, 9, 10, 9, 8, 9, 6, 7, 4, 5, 2, 3, 3, 0],
            backgroundColor: [
				'#ff4747',
				'#FF6060',
				'#FFEF4F',
				'#7AD1D1',
				'#79D879',
				'#FC9F5B',
				'#ff4747',
				'#FF6060',
				'#FFEF4F',
				'#7AD1D1',
				'#79D879',
				'#ff4747',
				'#FF6060',
				'#FFEF4F',
				'#7AD1D1',
				'#79D879',],
        }]
    },
    options: {
		legend: {
			display: false
		},
		scales: {
			xAxes: [{
				gridLines: {
					display: false
				},
				ticks: {
					display: false
				}
			}],
			yAxes: [{
				gridLines: {
					display: false
				}
			}]
        },
		tooltips: {
			enabled: false
		},
		elements: {
			point: {
				radius: 0
			}
		}
	}
});