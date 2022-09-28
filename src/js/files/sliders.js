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

// const EL_caption = document.querySelector(".caption");

// function doSomethingWithActiveSlide() {
// 	const EL_currentSlide = this.slides[this.activeIndex - 1];
// 	EL_caption.innerHTML = EL_currentSlide.dataset.caption;
// }
// removeEffect();
// Инициализация слайдеров
// const swpr_text = document.querySelector(".swiper-products__text");
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const swiper = new Swiper('.swiper', { // Указываем скласс нужного слайдера
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

			// autoplay: {
			// 	delay: 5800,
			// 	disableOnInteraction: false,
			// },
			

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


			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/


			// События
			on: {
				// init: doSomethingWithActiveSlide,
				// slideChange: doSomethingWithActiveSlide

			}
			
		});
		// swiper.on('slideChangeStart', function () {
		// 	swpr_text.classList.add('_activetextmain');
		// 		});
		// swiper.on('slideChangeEnd', function () {
		// 	swpr_text.classList.remove('_activetextmain');
		// });
		// swiper.on('slideChange', function () {
		// 	swpr_text.classList.add('_activetextmain');
		// 	swpr_text.classList.remove('_notactivetextmain');
		// 	setTimeout(function () {
		// 		swpr_text.classList.remove('_activetextmain');
		// 		swpr_text.classList.add('_notactivetextmain')
		// 	}, 1000)
		// 	});
		
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

