"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/sliders.js":
/*!*********************************!*\
  !*** ./src/js/files/sliders.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _scss_base_swiper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/base/swiper.scss */ "./src/scss/base/swiper.scss");
/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }

/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі

// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
   // Список слайдерів
   // Перевіряємо, чи є слайдер на сторінці
   if (document.querySelector('.swiper2')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 0,
         autoHeight: true,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація
         /*
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         */

         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
         },
         /*
         // Брейкпоінти
         breakpoints: {
            640: {
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
         // Події
         on: {

         }
      });
   }
   if (document.querySelector('.swiper2')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 0,
         autoHeight: true,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація

         pagination: {
            el: '.about2__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"

         /*
         // Брейкпоінти
         breakpoints: {
            640: {
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
         // Події
         on: {

         }
      });
   }
   if (document.querySelector('.news-latest2__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.news-latest2__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 30,
         speed: 800,
         loop: true,
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація

         pagination: {
            el: '.news-latest2__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"


         // Брейкпоінти
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 15,
            },
            550: {
               slidesPerView: 2,
               spaceBetween: 15,
            },
            768: {
               slidesPerView: 3,
               spaceBetween: 15,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 30,
            },

         },

         // Події
         on: {

         }
      });
   }
   if (document.querySelector('.main-block__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.main-block__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 0,
         speed: 800,
         loopedSlides: 0,
         // autoplay: {
         //    delay: 5000,
         //    disableOnInteraction: false,
         // },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         
         */

         // Пагінація

         pagination: {
            el: '.main-block__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"

         /*
         // Брейкпоінти
         breakpoints: {
            640: {
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
         // Події
         on: {

         }
      });
   }
   if (document.querySelector('.place__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.place__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 20,
         loop: true,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація

         pagination: {
            el: '.place__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         // navigation: {
         //    prevEl: '.swiper-button-prev',
         //    nextEl: '.swiper-button-next',
         // },
         /*
         // Брейкпоінти
         breakpoints: {
            640: {
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
         // Події
         on: {

         }
      });
   }


   if (document.querySelector('.gallery__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.gallery__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 20,
         speed: 800,
         loop: true,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація

         pagination: {
            el: '.gallery__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         // navigation: {
         //    prevEl: '.swiper-button-prev',
         //    nextEl: '.swiper-button-next',
         // },
         /*
         // Брейкпоінти
         breakpoints: {
            640: {
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
         // Події
         on: {

         }
      });
   }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderScrollItem, {
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
   // Запуск ініціалізації слайдерів
   initSliders();
   // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
   //initSlidersScroll();
});
const breakpoint = window.matchMedia('(max-width:767px)');
// keep track of swiper instances to destroy later
let mySwiper = [];
let mySwiperPc = [];
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const breakpointChecker = function () {
   // if larger viewport and multi-row layout needed
   if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) {
         disableSwiper(mySwiper);
      }
      if (mySwiperPc !== undefined) {
         enableSwiperPc();
      }
      // or/and do nothing
      return;
      // else if a small viewport and single column layout needed
   } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      enableSwiper();
      disableSwiper(mySwiperPc);

   }
};
const disableSwiper = function (arr) {
   if (arr !== undefined && arr.length > 0) {
      arr.forEach(element => {
         element.destroy(true, true);
      });
   }
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const enableSwiperPc = () => {
   if (document.querySelector('.players__slider.one')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      mySwiperPc[0] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.players__slider.one', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 4,
         spaceBetween: 15,
         speed: 800,
         loop: true,
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація

         pagination: {
            el: '.players__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         // navigation: {
         //    prevEl: '.swiper-button-prev',
         //    nextEl: '.swiper-button-next',
         // },

         // Брейкпоінти
         breakpoints: {
            320: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            500: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
            650: {
               slidesPerView: 4,
               spaceBetween: 15,
            },

         },

         // Події
         on: {

         }
      });
   }
   if (document.querySelector('.players__slider.two')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      mySwiperPc[1] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.players__slider.two', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 4,
         spaceBetween: 15,
         speed: 800,
         loop: true,
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація

         pagination: {
            el: '.players__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         // navigation: {
         //    prevEl: '.swiper-button-prev',
         //    nextEl: '.swiper-button-next',
         // },

         // Брейкпоінти
         breakpoints: {
            320: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            500: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
            650: {
               slidesPerView: 4,
               spaceBetween: 15,
            },

         },

         // Події
         on: {

         }
      });
   }
   if (document.querySelector('.news-latest__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      mySwiperPc[2] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.news-latest__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 15,
         speed: 800,
         loop: true,
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація

         pagination: {
            el: '.news-latest__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         // navigation: {
         //    prevEl: '.swiper-button-prev',
         //    nextEl: '.swiper-button-next',
         // },

         // Брейкпоінти
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 15,
            },
            500: {
               slidesPerView: 2,
               spaceBetween: 15,
            },

         },

         // Події
         on: {

         }
      });
   }
}
const enableSwiper = function () {
   if (document.querySelector('.partners__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      mySwiper[0] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.partners__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 4,
         spaceBetween: 40,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація

         pagination: {
            el: '.partners__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         // navigation: {
         //    prevEl: '.swiper-button-prev',
         //    nextEl: '.swiper-button-next',
         // },

         // Брейкпоінти
         breakpoints: {
            640: {
               slidesPerView: 1,
               spaceBetween: 0,
               autoHeight: true,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            768: {
               slidesPerView: 4,
               spaceBetween: 20,
            },
            991: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
         },

         // Події
         on: {

         }
      });
   }

   if (document.querySelector('.news__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      mySwiper[1] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.news__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 30,
         speed: 800,
         loop: true,
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
         // Ефекти
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */

         // Пагінація

         pagination: {
            el: '.news__pagination',
            clickable: true,
         },


         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */

         // Кнопки "вліво/вправо"
         // navigation: {
         //    prevEl: '.swiper-button-prev',
         //    nextEl: '.swiper-button-next',
         // },

         // Брейкпоінти
         breakpoints: {
            640: {
               slidesPerView: 1,
               spaceBetween: 0,
               autoHeight: true,
            },
            768: {
               slidesPerView: 3,
               spaceBetween: 16,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 30,
            },

         },

         // Події
         on: {

         }
      });
   }

   if (document.querySelector('.video-manual__slider2')) {
      mySwiper[2] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.video-manual__slider1', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая

         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 12,
         speed: 800,
         loop: true,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               slidesPerView: 1,
               centeredSlides: true,
            },
            500: {
               slidesPerView: 2,
            },
         },
         // События
         on: {

         }
      });
   }
   if (document.querySelector('.best__slider')) {
      mySwiper[3] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.best__slider', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 12,
         speed: 800,
         loop: true,
         pagination: {
            el: '.best__pagination'
         },
         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               slidesPerView: 1,
               centeredSlides: true,
            },
            500: {
               slidesPerView: 2,
            },
         },
         // События
         on: {

         }
      });
   }
   if (document.querySelector('.video-manual__slider1')) {
      mySwiper[4] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.video-manual__slider2', { // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая

         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 12,
         speed: 800,
         loop: true,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,
         /*
         // Эффекты
         effect: 'fade',
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
         },
         */
         // Пагинация
         // Скроллбар
         /*
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
         */
         // Кнопки "влево/вправо"
         // Брейкпоинты
         breakpoints: {
            320: {
               slidesPerView: 1,
               centeredSlides: true,
            },
            500: {
               slidesPerView: 2,
            },
         },
         // События
         on: {

         }
      });
   }
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("245524d68c3c1e6f8201")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBTSw2QkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsOENBQU0sb0JBQW9CO0FBQ2xEO0FBQ0E7QUFDQSxtQkFBbUIsOENBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSx3QkFBd0IsOENBQU0sNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMxakNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6IFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0YHQu9Cw0LnQtNC10YDQsDogaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbtCh0L3RltC/0L/QtdGCKEhUTUwpOiBzd2lwZXJcclxuKi9cclxuXHJcbi8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0YHQu9Cw0LnQtNC10YAgU3dpcGVyINC3IG5vZGVfbW9kdWxlc1xyXG4vLyDQn9GA0Lgg0L3QtdC+0LHRhdGW0LTQvdC+0YHRgtGWINC/0ZbQtNC60LvRjtGH0LDRlNC80L4g0LTQvtC00LDRgtC60L7QstGWINC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwLCDQstC60LDQt9GD0Y7Rh9C4INGX0YUg0YMge30g0YfQtdGA0LXQtyDQutC+0LzRg1xyXG4vLyDQn9GA0LjQutC70LDQtDogeyBOYXZpZ2F0aW9uLCBBdXRvcGxheSB9XHJcbmltcG9ydCBTd2lwZXIsIHsgQXV0b3BsYXksIE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG4vKlxyXG7QntGB0L3QvtCy0L3RliDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsDpcclxuTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgQXV0b3BsYXksIFxyXG5FZmZlY3RGYWRlLCBMYXp5LCBNYW5pcHVsYXRpb25cclxu0JTQtdGC0LDQu9GM0L3RltGI0LUg0LTQuNCy0LjRgdGMIGh0dHBzOi8vc3dpcGVyanMuY29tL1xyXG4qL1xyXG5cclxuLy8g0KHRgtC40LvRliBTd2lwZXJcclxuLy8g0JHQsNC30L7QstGWINGB0YLQuNC70ZZcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9iYXNlL3N3aXBlci5zY3NzXCI7XHJcbi8vINCf0L7QstC90LjQuSDQvdCw0LHRltGAINGB0YLQuNC70ZbQsiDQtyBzY3NzL2xpYnMvc3dpcGVyLnNjc3NcclxuLy8gaW1wb3J0IFwiLi4vLi4vc2Nzcy9saWJzL3N3aXBlci5zY3NzXCI7XHJcbi8vINCf0L7QstC90LjQuSDQvdCw0LHRltGAINGB0YLQuNC70ZbQsiDQtyBub2RlX21vZHVsZXNcclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuXHJcbi8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINGB0LvQsNC50LTQtdGA0ZbQslxyXG5mdW5jdGlvbiBpbml0U2xpZGVycygpIHtcclxuICAgLy8g0KHQv9C40YHQvtC6INGB0LvQsNC50LTQtdGA0ZbQslxyXG4gICAvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INGUINGB0LvQsNC50LTQtdGAINC90LAg0YHRgtC+0YDRltC90YbRllxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcjInKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbmV3IFN3aXBlcignLnN3aXBlcicsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG5cclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEyNjg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcjInKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbmV3IFN3aXBlcignLnN3aXBlcicsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG5cclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5hYm91dDJfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEyNjg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MtbGF0ZXN0Ml9fc2xpZGVyJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIG5ldyBTd2lwZXIoJy5uZXdzLWxhdGVzdDJfX3NsaWRlcicsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5uZXdzLWxhdGVzdDJfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG5cclxuXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDU1MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICB9LFxyXG5cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYmxvY2tfX3NsaWRlcicpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBuZXcgU3dpcGVyKCcubWFpbi1ibG9ja19fc2xpZGVyJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uLCBBdXRvcGxheSwgUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICBsb29wZWRTbGlkZXM6IDAsXHJcbiAgICAgICAgIC8vIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgIC8vICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgICAvLyAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLm1haW4tYmxvY2tfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEyNjg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlX19zbGlkZXInKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbmV3IFN3aXBlcignLnBsYWNlX19zbGlkZXInLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcblxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnBsYWNlX19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMjY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcblxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3NsaWRlcicpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBuZXcgU3dpcGVyKCcuZ2FsbGVyeV9fc2xpZGVyJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICBsb29wOiB0cnVlLFxyXG5cclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5nYWxsZXJ5X19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMjY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxufVxyXG4vLyDQodC60YDQvtC70Lsg0L3QsCDQsdCw0LfRliDRgdC70LDQudC00LXRgNCwICjQt9CwINC60LvQsNGB0L7QvCBzd2lwZXIgc2Nyb2xsINC00LvRjyDQvtCx0L7Qu9C+0L3QutC4INGB0LvQsNC50LTQtdGA0LApXHJcbmZ1bmN0aW9uIGluaXRTbGlkZXJzU2Nyb2xsKCkge1xyXG4gICBsZXQgc2xpZGVyU2Nyb2xsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyX3Njcm9sbCcpO1xyXG4gICBpZiAoc2xpZGVyU2Nyb2xsSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2xpZGVyU2Nyb2xsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgIGNvbnN0IHNsaWRlclNjcm9sbEl0ZW0gPSBzbGlkZXJTY3JvbGxJdGVtc1tpbmRleF07XHJcbiAgICAgICAgIGNvbnN0IHNsaWRlclNjcm9sbEJhciA9IHNsaWRlclNjcm9sbEl0ZW0ucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKTtcclxuICAgICAgICAgY29uc3Qgc2xpZGVyU2Nyb2xsID0gbmV3IFN3aXBlcihzbGlkZXJTY3JvbGxJdGVtLCB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIGZyZWVNb2RlOiB7XHJcbiAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICAgICBlbDogc2xpZGVyU2Nyb2xsQmFyLFxyXG4gICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgIHNuYXBPblJlbGVhc2U6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdXNld2hlZWw6IHtcclxuICAgICAgICAgICAgICAgcmVsZWFzZU9uRWRnZXM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBzbGlkZXJTY3JvbGwuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAvLyDQl9Cw0L/Rg9GB0Log0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Zcg0YHQu9Cw0LnQtNC10YDRltCyXHJcbiAgIGluaXRTbGlkZXJzKCk7XHJcbiAgIC8vINCX0LDQv9GD0YHQuiDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRlyDRgdC60YDQvtC70LvQsCDQvdCwINCx0LDQt9GWINGB0LvQsNC50LTQtdGA0LAgKNC30LAg0LrQu9Cw0YHQvtC8IHN3aXBlcl9zY3JvbGwpXHJcbiAgIC8vaW5pdFNsaWRlcnNTY3JvbGwoKTtcclxufSk7XHJcbmNvbnN0IGJyZWFrcG9pbnQgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDo3NjdweCknKTtcclxuLy8ga2VlcCB0cmFjayBvZiBzd2lwZXIgaW5zdGFuY2VzIHRvIGRlc3Ryb3kgbGF0ZXJcclxubGV0IG15U3dpcGVyID0gW107XHJcbmxldCBteVN3aXBlclBjID0gW107XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IGJyZWFrcG9pbnRDaGVja2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAvLyBpZiBsYXJnZXIgdmlld3BvcnQgYW5kIG11bHRpLXJvdyBsYXlvdXQgbmVlZGVkXHJcbiAgIGlmIChicmVha3BvaW50Lm1hdGNoZXMgPT09IHRydWUpIHtcclxuICAgICAgLy8gY2xlYW4gdXAgb2xkIGluc3RhbmNlcyBhbmQgaW5saW5lIHN0eWxlcyB3aGVuIGF2YWlsYWJsZVxyXG4gICAgICBpZiAobXlTd2lwZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICBkaXNhYmxlU3dpcGVyKG15U3dpcGVyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobXlTd2lwZXJQYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIGVuYWJsZVN3aXBlclBjKCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gb3IvYW5kIGRvIG5vdGhpbmdcclxuICAgICAgcmV0dXJuO1xyXG4gICAgICAvLyBlbHNlIGlmIGEgc21hbGwgdmlld3BvcnQgYW5kIHNpbmdsZSBjb2x1bW4gbGF5b3V0IG5lZWRlZFxyXG4gICB9IGVsc2UgaWYgKGJyZWFrcG9pbnQubWF0Y2hlcyA9PT0gZmFsc2UpIHtcclxuICAgICAgLy8gZmlyZSBzbWFsbCB2aWV3cG9ydCB2ZXJzaW9uIG9mIHN3aXBlclxyXG4gICAgICBlbmFibGVTd2lwZXIoKTtcclxuICAgICAgZGlzYWJsZVN3aXBlcihteVN3aXBlclBjKTtcclxuXHJcbiAgIH1cclxufTtcclxuY29uc3QgZGlzYWJsZVN3aXBlciA9IGZ1bmN0aW9uIChhcnIpIHtcclxuICAgaWYgKGFyciAhPT0gdW5kZWZpbmVkICYmIGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICBlbGVtZW50LmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgZW5hYmxlU3dpcGVyUGMgPSAoKSA9PiB7XHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyc19fc2xpZGVyLm9uZScpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBteVN3aXBlclBjWzBdID0gbmV3IFN3aXBlcignLnBsYXllcnNfX3NsaWRlci5vbmUnLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcucGxheWVyc19fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgLy8gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgIC8vICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDY1MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzX19zbGlkZXIudHdvJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIG15U3dpcGVyUGNbMV0gPSBuZXcgU3dpcGVyKCcucGxheWVyc19fc2xpZGVyLnR3bycsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5wbGF5ZXJzX19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNjUwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICB9LFxyXG5cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MtbGF0ZXN0X19zbGlkZXInKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbXlTd2lwZXJQY1syXSA9IG5ldyBTd2lwZXIoJy5uZXdzLWxhdGVzdF9fc2xpZGVyJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLm5ld3MtbGF0ZXN0X19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuY29uc3QgZW5hYmxlU3dpcGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzX19zbGlkZXInKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbXlTd2lwZXJbMF0gPSBuZXcgU3dpcGVyKCcucGFydG5lcnNfX3NsaWRlcicsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcucGFydG5lcnNfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTE6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fc2xpZGVyJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIG15U3dpcGVyWzFdID0gbmV3IFN3aXBlcignLm5ld3NfX3NsaWRlcicsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5uZXdzX19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvLW1hbnVhbF9fc2xpZGVyMicpKSB7XHJcbiAgICAgIG15U3dpcGVyWzJdID0gbmV3IFN3aXBlcignLnZpZGVvLW1hbnVhbF9fc2xpZGVyMScsIHsgLy8g0KPQutCw0LfRi9Cy0LDQtdC8INGB0LrQu9Cw0YHRgSDQvdGD0LbQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0L7QtNC60LvRjtGH0LDQtdC8INC80L7QtNGD0LvQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INGB0LvRg9GH0LDRj1xyXG5cclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDEyLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICBsb29wOiB0cnVlLFxyXG5cclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0K3RhNGE0LXQutGC0YtcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIC8vINCf0LDQs9C40L3QsNGG0LjRj1xyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvQtdCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7QuNC90YLRi1xyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAvLyDQodC+0LHRi9GC0LjRj1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlc3RfX3NsaWRlcicpKSB7XHJcbiAgICAgIG15U3dpcGVyWzNdID0gbmV3IFN3aXBlcignLmJlc3RfX3NsaWRlcicsIHsgLy8g0KPQutCw0LfRi9Cy0LDQtdC8INGB0LrQu9Cw0YHRgSDQvdGD0LbQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0L7QtNC60LvRjtGH0LDQtdC8INC80L7QtNGD0LvQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INGB0LvRg9GH0LDRj1xyXG4gICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5iZXN0X19wYWdpbmF0aW9uJ1xyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQrdGE0YTQtdC60YLRi1xyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0J/QsNCz0LjQvdCw0YbQuNGPXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9C10LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtC40L3RgtGLXHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIC8vINCh0L7QsdGL0YLQuNGPXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW8tbWFudWFsX19zbGlkZXIxJykpIHtcclxuICAgICAgbXlTd2lwZXJbNF0gPSBuZXcgU3dpcGVyKCcudmlkZW8tbWFudWFsX19zbGlkZXIyJywgeyAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YHQutC70LDRgdGBINC90YPQttC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQu9GD0YfQsNGPXHJcblxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMTIsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcblxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQrdGE0YTQtdC60YLRi1xyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0J/QsNCz0LjQvdCw0YbQuNGPXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9C10LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtC40L3RgtGLXHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIC8vINCh0L7QsdGL0YLQuNGPXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn07XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBrZWVwIGFuIGV5ZSBvbiB2aWV3cG9ydCBzaXplIGNoYW5nZXNcclxuYnJlYWtwb2ludC5hZGRMaXN0ZW5lcihicmVha3BvaW50Q2hlY2tlcik7XHJcbi8vIGtpY2tzdGFydFxyXG5icmVha3BvaW50Q2hlY2tlcigpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI0NTUyNGQ2OGMzYzFlNmY4MjAxXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9