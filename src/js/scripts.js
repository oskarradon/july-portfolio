
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
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});