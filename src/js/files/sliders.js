/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

const progressBar = document.querySelector(".progress");
let swiper = "";
// Инициализация слайдеров

function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		swiper = new Swiper('.main__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 1000,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			
			// Эффекты
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: 5800,
				disableOnInteraction: false,
			},
			
			// Пагинация
			
			pagination: {
				// type: 'progressbar',
				el: '.swiper-pagination_main',
				clickable: true,
				
			},
			
			// Скроллбар
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },
			
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev_main',
				nextEl: '.swiper-button-next_main',
			},

			// События
			on: {
				// init: doSomethingWithActiveSlide,
				// slideChange: doSomethingWithActiveSlide
				slideChange: function () {
					progressBar.style.animation = "none";
					void progressBar.offsetWidth; // Triggers Reflow
					progressBar.style.animation = null;
					// progressBar.style.animationPlayState = "paused"; // Optional
					}
			}
			
		});
	}
	// === Feature Swiper Start ===================================================================
	// if (document.querySelector('.feature__swiper')) {
	// const largeSlider = document.querySelector(".feature-wrapper");
	// const prev_feature = document.querySelector(".swiper-button-prev_feature");
	
		const featureSlider = new Swiper('.feature__slider', { 
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			slidesPerView: 4,
			// slidesPerGroup: 3,
			spaceBetween: 20,
			autoHeight: false,
			speed: 300,
			
			// onSlideNextStart: function (swiper) {
			// 	swiper.appendSlide([
			// 		'<div class="swiper-slide">Slide ' + (++appendNumber) + '</div>',
			// 	]);
			// },
			loop: true,
			loopedSlides: 4,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			hideOnClick: true,
			grabCursor: true,
			preventClicks: true,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			
			// Эффекты
			effect: 'slide',
			// fadeEffect: {
			// 	crossFade: true
			// },
			
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			grabCursor: true,
			// Пагинация
			pagination: {
				// el: '.swiper-pagination',
				el: '.swiper-pagination',
				clickable: true,
				// renderBullet: function (index, className) {
					// console.log('--->', className);
				// 	var color = this.$el[0].children[0].children[index].dataset.color;
				// 	console.log(color);
					// return '<span class="swiper-pagination__feature-bullet"></span>';
				// }
			
			},
			
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 10
				},
				// when window width is >= 480px
				600: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				900: {
					slidesPerView: 3,
					spaceBetween: 10
				},
				// when window width is >= 640px
				1140: {
					slidesPerView: 4,
					spaceBetween: 10
				}
			},
			// События
			on: {}
		});
	// }
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
// function initSlidersScroll() {
// 	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
// 	if (sliderScrollItems.length > 0) {
// 		for (let index = 0; index < sliderScrollItems.length; index++) {
// 			const sliderScrollItem = sliderScrollItems[index];
// 			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 			const sliderScroll = new Swiper(sliderScrollItem, {
// 				observer: true,
// 				observeParents: true,
// 				direction: 'vertical',
// 				slidesPerView: 'auto',
// 				freeMode: {
// 					enabled: true,
// 				},
// 				scrollbar: {
// 					el: sliderScrollBar,
// 					draggable: true,
// 					snapOnRelease: false
// 				},
// 				mousewheel: {
// 					releaseOnEdges: true,
// 				},
// 			});
// 			sliderScroll.scrollbar.updateSize();
// 		}
// 	}
	
// }

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});

progressBar.addEventListener("animationend", myEndFunction);

// Retrigger Animation on Slide Change
function myEndFunction() {
	// swiper.slideNext();
	progressBar.style.animation = "none";
	void progressBar.offsetWidth; // Triggers Reflow
	progressBar.style.animation = null;
}



document.querySelectorAll(".swiper, .carousel-progress").forEach((item) => {
	item.addEventListener("mouseenter", function () {
		progressBar.style.animationPlayState = "paused";
	});
});

document.querySelectorAll(".swiper, .carousel-progress").forEach((item) => {
	item.addEventListener("mouseleave", function () {
		progressBar.style.animationPlayState = "running";
	});
});


