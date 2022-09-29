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
const swiper = "";
// Инициализация слайдеров

function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		swiper = new Swiper('.swiper-container.main__slider', { // Указываем скласс нужного слайдера
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
				el: '.swiper-pagination',
				clickable: true,
				
			},
			
			// Скроллбар
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },
			
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
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
	if (document.querySelector('.swiper-container.feature__swiper')) {
		const featureSlider = new Swiper('.feature__swiper', { 
			modules: [Navigation, Pagination, Autoplay,],
			// observer: true,
			// observeParents: true,
			slidesPerView: 3,
			spaceBetween: auto,
			autoHeight: true,
			speed: 1000,
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
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			grabCursor: true,
			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				
			},
			
			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// События
			on: {}
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
	
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});

progressBar.addEventListener("animationend", myEndFunction);

// Retrigger Animation on Slide Change
function myEndFunction() {
	swiper.slideNext();
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


