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
   if (document.querySelector('.about2__slider')) { // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.about2__slider', { // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 'auto',
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


         // Брейкпоінти
         breakpoints: {
            640: {
               slidesPerView: 'auto',
               spaceBetween: 20,
            },
            992: {

               spaceBetween: 30,
            },

         },

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
/******/ 	__webpack_require__.h = () => ("5eee586de19ea9dce37c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNzQxNGE0ZWJmZGVhZDMyMzBkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFLGNBQWM7QUFDb0Q7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLFVBQVUsOENBQU0sY0FBYztBQUM5QjtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLFVBQVUsOENBQU0sc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQSxtQkFBbUIsOENBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQU0sNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFNLG9CQUFvQjtBQUNsRDtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFNLDZCQUE2QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDampDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9zbGlkZXJzLmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINC/0L4g0YDQvtCx0L7RgtGWINGDINGI0LDQsdC70L7QvdGWOiBcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINGB0LvQsNC50LTQtdGA0LA6IGh0dHBzOi8vc3dpcGVyanMuY29tL1xyXG7QodC90ZbQv9C/0LXRgihIVE1MKTogc3dpcGVyXHJcbiovXHJcblxyXG4vLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INGB0LvQsNC50LTQtdGAIFN3aXBlciDQtyBub2RlX21vZHVsZXNcclxuLy8g0J/RgNC4INC90LXQvtCx0YXRltC00L3QvtGB0YLRliDQv9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC00L7QtNCw0YLQutC+0LLRliDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsCwg0LLQutCw0LfRg9GO0YfQuCDRl9GFINGDIHt9INGH0LXRgNC10Lcg0LrQvtC80YNcclxuLy8g0J/RgNC40LrQu9Cw0LQ6IHsgTmF2aWdhdGlvbiwgQXV0b3BsYXkgfVxyXG5pbXBvcnQgU3dpcGVyLCB7IEF1dG9wbGF5LCBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuLypcclxu0J7RgdC90L7QstC90ZYg0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LA6XHJcbk5hdmlnYXRpb24sIFBhZ2luYXRpb24sIEF1dG9wbGF5LCBcclxuRWZmZWN0RmFkZSwgTGF6eSwgTWFuaXB1bGF0aW9uXHJcbtCU0LXRgtCw0LvRjNC90ZbRiNC1INC00LjQstC40YHRjCBodHRwczovL3N3aXBlcmpzLmNvbS9cclxuKi9cclxuXHJcbi8vINCh0YLQuNC70ZYgU3dpcGVyXHJcbi8vINCR0LDQt9C+0LLRliDRgdGC0LjQu9GWXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvYmFzZS9zd2lwZXIuc2Nzc1wiO1xyXG4vLyDQn9C+0LLQvdC40Lkg0L3QsNCx0ZbRgCDRgdGC0LjQu9GW0LIg0Lcgc2Nzcy9saWJzL3N3aXBlci5zY3NzXHJcbi8vIGltcG9ydCBcIi4uLy4uL3Njc3MvbGlicy9zd2lwZXIuc2Nzc1wiO1xyXG4vLyDQn9C+0LLQvdC40Lkg0L3QsNCx0ZbRgCDRgdGC0LjQu9GW0LIg0Lcgbm9kZV9tb2R1bGVzXHJcbi8vIGltcG9ydCAnc3dpcGVyL2Nzcyc7XHJcblxyXG4vLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDRgdC70LDQudC00LXRgNGW0LJcclxuZnVuY3Rpb24gaW5pdFNsaWRlcnMoKSB7XHJcbiAgIC8vINCh0L/QuNGB0L7QuiDRgdC70LDQudC00LXRgNGW0LJcclxuICAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDRlCDRgdC70LDQudC00LXRgCDQvdCwINGB0YLQvtGA0ZbQvdGG0ZZcclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXIyJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW05hdmlnYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuICAgICAgICAgLypcclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMjY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dDJfX3NsaWRlcicpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBuZXcgU3dpcGVyKCcuYWJvdXQyX19zbGlkZXInLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5hYm91dDJfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG5cclxuXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcblxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLWxhdGVzdDJfX3NsaWRlcicpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBuZXcgU3dpcGVyKCcubmV3cy1sYXRlc3QyX19zbGlkZXInLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcubmV3cy1sYXRlc3QyX19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuXHJcblxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1NTA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJsb2NrX19zbGlkZXInKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbmV3IFN3aXBlcignLm1haW4tYmxvY2tfX3NsaWRlcicsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgQXV0b3BsYXksIFBhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcGVkU2xpZGVzOiAwLFxyXG4gICAgICAgICAvLyBhdXRvcGxheToge1xyXG4gICAgICAgICAvLyAgICBkZWxheTogNTAwMCxcclxuICAgICAgICAgLy8gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICAvLyB9LFxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5tYWluLWJsb2NrX19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMjY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZV9fc2xpZGVyJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIG5ldyBTd2lwZXIoJy5wbGFjZV9fc2xpZGVyJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG5cclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5wbGFjZV9fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgLy8gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgIC8vICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAvLyB9LFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTI2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG5cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19zbGlkZXInKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbmV3IFN3aXBlcignLmdhbGxlcnlfX3NsaWRlcicsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcuZ2FsbGVyeV9fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgLy8gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgIC8vICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAvLyB9LFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTI2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuLy8g0KHQutGA0L7Qu9C7INC90LAg0LHQsNC30ZYg0YHQu9Cw0LnQtNC10YDQsCAo0LfQsCDQutC70LDRgdC+0Lwgc3dpcGVyIHNjcm9sbCDQtNC70Y8g0L7QsdC+0LvQvtC90LrQuCDRgdC70LDQudC00LXRgNCwKVxyXG5mdW5jdGlvbiBpbml0U2xpZGVyc1Njcm9sbCgpIHtcclxuICAgbGV0IHNsaWRlclNjcm9sbEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlcl9zY3JvbGwnKTtcclxuICAgaWYgKHNsaWRlclNjcm9sbEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNsaWRlclNjcm9sbEl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICBjb25zdCBzbGlkZXJTY3JvbGxJdGVtID0gc2xpZGVyU2Nyb2xsSXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICBjb25zdCBzbGlkZXJTY3JvbGxCYXIgPSBzbGlkZXJTY3JvbGxJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2Nyb2xsYmFyJyk7XHJcbiAgICAgICAgIGNvbnN0IHNsaWRlclNjcm9sbCA9IG5ldyBTd2lwZXIoc2xpZGVyU2Nyb2xsSXRlbSwge1xyXG4gICAgICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBmcmVlTW9kZToge1xyXG4gICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgICAgZWw6IHNsaWRlclNjcm9sbEJhcixcclxuICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICBzbmFwT25SZWxlYXNlOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb3VzZXdoZWVsOiB7XHJcbiAgICAgICAgICAgICAgIHJlbGVhc2VPbkVkZ2VzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9KTtcclxuICAgICAgICAgc2xpZGVyU2Nyb2xsLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgLy8g0JfQsNC/0YPRgdC6INGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGXINGB0LvQsNC50LTQtdGA0ZbQslxyXG4gICBpbml0U2xpZGVycygpO1xyXG4gICAvLyDQl9Cw0L/Rg9GB0Log0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Zcg0YHQutGA0L7Qu9C70LAg0L3QsCDQsdCw0LfRliDRgdC70LDQudC00LXRgNCwICjQt9CwINC60LvQsNGB0L7QvCBzd2lwZXJfc2Nyb2xsKVxyXG4gICAvL2luaXRTbGlkZXJzU2Nyb2xsKCk7XHJcbn0pO1xyXG5jb25zdCBicmVha3BvaW50ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6NzY3cHgpJyk7XHJcbi8vIGtlZXAgdHJhY2sgb2Ygc3dpcGVyIGluc3RhbmNlcyB0byBkZXN0cm95IGxhdGVyXHJcbmxldCBteVN3aXBlciA9IFtdO1xyXG5sZXQgbXlTd2lwZXJQYyA9IFtdO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBicmVha3BvaW50Q2hlY2tlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgLy8gaWYgbGFyZ2VyIHZpZXdwb3J0IGFuZCBtdWx0aS1yb3cgbGF5b3V0IG5lZWRlZFxyXG4gICBpZiAoYnJlYWtwb2ludC5tYXRjaGVzID09PSB0cnVlKSB7XHJcbiAgICAgIC8vIGNsZWFuIHVwIG9sZCBpbnN0YW5jZXMgYW5kIGlubGluZSBzdHlsZXMgd2hlbiBhdmFpbGFibGVcclxuICAgICAgaWYgKG15U3dpcGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgZGlzYWJsZVN3aXBlcihteVN3aXBlcik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG15U3dpcGVyUGMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICBlbmFibGVTd2lwZXJQYygpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIG9yL2FuZCBkbyBub3RoaW5nXHJcbiAgICAgIHJldHVybjtcclxuICAgICAgLy8gZWxzZSBpZiBhIHNtYWxsIHZpZXdwb3J0IGFuZCBzaW5nbGUgY29sdW1uIGxheW91dCBuZWVkZWRcclxuICAgfSBlbHNlIGlmIChicmVha3BvaW50Lm1hdGNoZXMgPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIGZpcmUgc21hbGwgdmlld3BvcnQgdmVyc2lvbiBvZiBzd2lwZXJcclxuICAgICAgZW5hYmxlU3dpcGVyKCk7XHJcbiAgICAgIGRpc2FibGVTd2lwZXIobXlTd2lwZXJQYyk7XHJcblxyXG4gICB9XHJcbn07XHJcbmNvbnN0IGRpc2FibGVTd2lwZXIgPSBmdW5jdGlvbiAoYXJyKSB7XHJcbiAgIGlmIChhcnIgIT09IHVuZGVmaW5lZCAmJiBhcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICBhcnIuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgZWxlbWVudC5kZXN0cm95KHRydWUsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IGVuYWJsZVN3aXBlclBjID0gKCkgPT4ge1xyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnNfX3NsaWRlci5vbmUnKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbXlTd2lwZXJQY1swXSA9IG5ldyBTd2lwZXIoJy5wbGF5ZXJzX19zbGlkZXIub25lJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnBsYXllcnNfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA2NTA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyc19fc2xpZGVyLnR3bycpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBteVN3aXBlclBjWzFdID0gbmV3IFN3aXBlcignLnBsYXllcnNfX3NsaWRlci50d28nLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcucGxheWVyc19fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgLy8gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgIC8vICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDY1MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLWxhdGVzdF9fc2xpZGVyJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIG15U3dpcGVyUGNbMl0gPSBuZXcgU3dpcGVyKCcubmV3cy1sYXRlc3RfX3NsaWRlcicsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5uZXdzLWxhdGVzdF9fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgLy8gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgIC8vICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICB9LFxyXG5cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcbmNvbnN0IGVuYWJsZVN3aXBlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVyc19fc2xpZGVyJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIG15U3dpcGVyWzBdID0gbmV3IFN3aXBlcignLnBhcnRuZXJzX19zbGlkZXInLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcblxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnBhcnRuZXJzX19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkxOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3NfX3NsaWRlcicpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBteVN3aXBlclsxXSA9IG5ldyBTd2lwZXIoJy5uZXdzX19zbGlkZXInLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcubmV3c19fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgLy8gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgIC8vICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICB9LFxyXG5cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlby1tYW51YWxfX3NsaWRlcjInKSkge1xyXG4gICAgICBteVN3aXBlclsyXSA9IG5ldyBTd2lwZXIoJy52aWRlby1tYW51YWxfX3NsaWRlcjEnLCB7IC8vINCj0LrQsNC30YvQstCw0LXQvCDRgdC60LvQsNGB0YEg0L3Rg9C20L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC70YPRh9Cw0Y9cclxuXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCt0YTRhNC10LrRgtGLXHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAvLyDQn9Cw0LPQuNC90LDRhtC40Y9cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70LXQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0LjQvdGC0YtcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgLy8g0KHQvtCx0YvRgtC40Y9cclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXN0X19zbGlkZXInKSkge1xyXG4gICAgICBteVN3aXBlclszXSA9IG5ldyBTd2lwZXIoJy5iZXN0X19zbGlkZXInLCB7IC8vINCj0LrQsNC30YvQstCw0LXQvCDRgdC60LvQsNGB0YEg0L3Rg9C20L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC70YPRh9Cw0Y9cclxuICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMTIsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcuYmVzdF9fcGFnaW5hdGlvbidcclxuICAgICAgICAgfSxcclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0K3RhNGE0LXQutGC0YtcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIC8vINCf0LDQs9C40L3QsNGG0LjRj1xyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvQtdCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7QuNC90YLRi1xyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAvLyDQodC+0LHRi9GC0LjRj1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvLW1hbnVhbF9fc2xpZGVyMScpKSB7XHJcbiAgICAgIG15U3dpcGVyWzRdID0gbmV3IFN3aXBlcignLnZpZGVvLW1hbnVhbF9fc2xpZGVyMicsIHsgLy8g0KPQutCw0LfRi9Cy0LDQtdC8INGB0LrQu9Cw0YHRgSDQvdGD0LbQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0L7QtNC60LvRjtGH0LDQtdC8INC80L7QtNGD0LvQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INGB0LvRg9GH0LDRj1xyXG5cclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDEyLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICBsb29wOiB0cnVlLFxyXG5cclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0K3RhNGE0LXQutGC0YtcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIC8vINCf0LDQs9C40L3QsNGG0LjRj1xyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvQtdCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7QuNC90YLRi1xyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAvLyDQodC+0LHRi9GC0LjRj1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG59O1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8ga2VlcCBhbiBleWUgb24gdmlld3BvcnQgc2l6ZSBjaGFuZ2VzXHJcbmJyZWFrcG9pbnQuYWRkTGlzdGVuZXIoYnJlYWtwb2ludENoZWNrZXIpO1xyXG4vLyBraWNrc3RhcnRcclxuYnJlYWtwb2ludENoZWNrZXIoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZWVlNTg2ZGUxOWVhOWRjZTM3Y1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==