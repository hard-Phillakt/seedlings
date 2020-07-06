import Swiper from 'swiper';
import '../../../../node_modules/swiper/css/swiper.min.css';


window.onload = function () {
	new Swiper('.swiper-container', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		parallax: true,
		fadeEffect: {
			crossFade: true
		},
		speed: 500,
		loop: true,
		autoplay: {
			delay: 6000,
		  },
	});
}

