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
           726: {
               slidesPerView: 1,
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
/******/ 	__webpack_require__.h = () => ("8922c3375a5cb34474f0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NmYzOGFkOTEyZTJlMmExMmMyOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFLGNBQWM7QUFDb0Q7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLFVBQVUsOENBQU0sY0FBYztBQUM5QjtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLFVBQVUsOENBQU0sc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQSxtQkFBbUIsOENBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FB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QUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBTSw2QkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JqQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvc2xpZGVycy5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C+INGA0L7QsdC+0YLRliDRgyDRiNCw0LHQu9C+0L3RljogXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDRgdC70LDQudC00LXRgNCwOiBodHRwczovL3N3aXBlcmpzLmNvbS9cclxu0KHQvdGW0L/Qv9C10YIoSFRNTCk6IHN3aXBlclxyXG4qL1xyXG5cclxuLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDRgdC70LDQudC00LXRgCBTd2lwZXIg0Lcgbm9kZV9tb2R1bGVzXHJcbi8vINCf0YDQuCDQvdC10L7QsdGF0ZbQtNC90L7RgdGC0ZYg0L/RltC00LrQu9GO0YfQsNGU0LzQviDQtNC+0LTQsNGC0LrQvtCy0ZYg0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LAsINCy0LrQsNC30YPRjtGH0Lgg0ZfRhSDRgyB7fSDRh9C10YDQtdC3INC60L7QvNGDXHJcbi8vINCf0YDQuNC60LvQsNC0OiB7IE5hdmlnYXRpb24sIEF1dG9wbGF5IH1cclxuaW1wb3J0IFN3aXBlciwgeyBBdXRvcGxheSwgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcbi8qXHJcbtCe0YHQvdC+0LLQvdGWINC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwOlxyXG5OYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBBdXRvcGxheSwgXHJcbkVmZmVjdEZhZGUsIExhenksIE1hbmlwdWxhdGlvblxyXG7QlNC10YLQsNC70YzQvdGW0YjQtSDQtNC40LLQuNGB0YwgaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbiovXHJcblxyXG4vLyDQodGC0LjQu9GWIFN3aXBlclxyXG4vLyDQkdCw0LfQvtCy0ZYg0YHRgtC40LvRllxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2Jhc2Uvc3dpcGVyLnNjc3NcIjtcclxuLy8g0J/QvtCy0L3QuNC5INC90LDQsdGW0YAg0YHRgtC40LvRltCyINC3IHNjc3MvbGlicy9zd2lwZXIuc2Nzc1xyXG4vLyBpbXBvcnQgXCIuLi8uLi9zY3NzL2xpYnMvc3dpcGVyLnNjc3NcIjtcclxuLy8g0J/QvtCy0L3QuNC5INC90LDQsdGW0YAg0YHRgtC40LvRltCyINC3IG5vZGVfbW9kdWxlc1xyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5cclxuLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0YHQu9Cw0LnQtNC10YDRltCyXHJcbmZ1bmN0aW9uIGluaXRTbGlkZXJzKCkge1xyXG4gICAvLyDQodC/0LjRgdC+0Log0YHQu9Cw0LnQtNC10YDRltCyXHJcbiAgIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0ZQg0YHQu9Cw0LnQtNC10YAg0L3QsCDRgdGC0L7RgNGW0L3RhtGWXHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyMicpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBuZXcgU3dpcGVyKCcuc3dpcGVyJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcblxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTI2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQyX19zbGlkZXInKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbmV3IFN3aXBlcignLmFib3V0Ml9fc2xpZGVyJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcuYWJvdXQyX19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuXHJcblxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgNzI2OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG5cclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1sYXRlc3QyX19zbGlkZXInKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbmV3IFN3aXBlcignLm5ld3MtbGF0ZXN0Ml9fc2xpZGVyJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLm5ld3MtbGF0ZXN0Ml9fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcblxyXG5cclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTUwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ibG9ja19fc2xpZGVyJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIG5ldyBTd2lwZXIoJy5tYWluLWJsb2NrX19zbGlkZXInLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW05hdmlnYXRpb24sIEF1dG9wbGF5LCBQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3BlZFNsaWRlczogMCxcclxuICAgICAgICAgLy8gYXV0b3BsYXk6IHtcclxuICAgICAgICAgLy8gICAgZGVsYXk6IDUwMDAsXHJcbiAgICAgICAgIC8vICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgLy8gfSxcclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcubWFpbi1ibG9ja19fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTI2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2VfX3NsaWRlcicpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBuZXcgU3dpcGVyKCcucGxhY2VfX3NsaWRlcicsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcucGxhY2VfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgLy8gfSxcclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEyNjg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuXHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fc2xpZGVyJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIG5ldyBTd2lwZXIoJy5nYWxsZXJ5X19zbGlkZXInLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcblxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLmdhbGxlcnlfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgLy8gfSxcclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEyNjg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG59XHJcbi8vINCh0LrRgNC+0LvQuyDQvdCwINCx0LDQt9GWINGB0LvQsNC50LTQtdGA0LAgKNC30LAg0LrQu9Cw0YHQvtC8IHN3aXBlciBzY3JvbGwg0LTQu9GPINC+0LHQvtC70L7QvdC60Lgg0YHQu9Cw0LnQtNC10YDQsClcclxuZnVuY3Rpb24gaW5pdFNsaWRlcnNTY3JvbGwoKSB7XHJcbiAgIGxldCBzbGlkZXJTY3JvbGxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXJfc2Nyb2xsJyk7XHJcbiAgIGlmIChzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgY29uc3Qgc2xpZGVyU2Nyb2xsSXRlbSA9IHNsaWRlclNjcm9sbEl0ZW1zW2luZGV4XTtcclxuICAgICAgICAgY29uc3Qgc2xpZGVyU2Nyb2xsQmFyID0gc2xpZGVyU2Nyb2xsSXRlbS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhcicpO1xyXG4gICAgICAgICBjb25zdCBzbGlkZXJTY3JvbGwgPSBuZXcgU3dpcGVyKHNsaWRlclNjcm9sbEl0ZW0sIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgICAgZnJlZU1vZGU6IHtcclxuICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgICAgIGVsOiBzbGlkZXJTY3JvbGxCYXIsXHJcbiAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgc25hcE9uUmVsZWFzZTogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW91c2V3aGVlbDoge1xyXG4gICAgICAgICAgICAgICByZWxlYXNlT25FZGdlczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIHNsaWRlclNjcm9sbC5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgIC8vINCX0LDQv9GD0YHQuiDRltC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRlyDRgdC70LDQudC00LXRgNGW0LJcclxuICAgaW5pdFNsaWRlcnMoKTtcclxuICAgLy8g0JfQsNC/0YPRgdC6INGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGXINGB0LrRgNC+0LvQu9CwINC90LAg0LHQsNC30ZYg0YHQu9Cw0LnQtNC10YDQsCAo0LfQsCDQutC70LDRgdC+0Lwgc3dpcGVyX3Njcm9sbClcclxuICAgLy9pbml0U2xpZGVyc1Njcm9sbCgpO1xyXG59KTtcclxuY29uc3QgYnJlYWtwb2ludCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOjc2N3B4KScpO1xyXG4vLyBrZWVwIHRyYWNrIG9mIHN3aXBlciBpbnN0YW5jZXMgdG8gZGVzdHJveSBsYXRlclxyXG5sZXQgbXlTd2lwZXIgPSBbXTtcclxubGV0IG15U3dpcGVyUGMgPSBbXTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgYnJlYWtwb2ludENoZWNrZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIC8vIGlmIGxhcmdlciB2aWV3cG9ydCBhbmQgbXVsdGktcm93IGxheW91dCBuZWVkZWRcclxuICAgaWYgKGJyZWFrcG9pbnQubWF0Y2hlcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAvLyBjbGVhbiB1cCBvbGQgaW5zdGFuY2VzIGFuZCBpbmxpbmUgc3R5bGVzIHdoZW4gYXZhaWxhYmxlXHJcbiAgICAgIGlmIChteVN3aXBlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgIGRpc2FibGVTd2lwZXIobXlTd2lwZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChteVN3aXBlclBjICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgZW5hYmxlU3dpcGVyUGMoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBvci9hbmQgZG8gbm90aGluZ1xyXG4gICAgICByZXR1cm47XHJcbiAgICAgIC8vIGVsc2UgaWYgYSBzbWFsbCB2aWV3cG9ydCBhbmQgc2luZ2xlIGNvbHVtbiBsYXlvdXQgbmVlZGVkXHJcbiAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludC5tYXRjaGVzID09PSBmYWxzZSkge1xyXG4gICAgICAvLyBmaXJlIHNtYWxsIHZpZXdwb3J0IHZlcnNpb24gb2Ygc3dpcGVyXHJcbiAgICAgIGVuYWJsZVN3aXBlcigpO1xyXG4gICAgICBkaXNhYmxlU3dpcGVyKG15U3dpcGVyUGMpO1xyXG5cclxuICAgfVxyXG59O1xyXG5jb25zdCBkaXNhYmxlU3dpcGVyID0gZnVuY3Rpb24gKGFycikge1xyXG4gICBpZiAoYXJyICE9PSB1bmRlZmluZWQgJiYgYXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgIGVsZW1lbnQuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxufVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBlbmFibGVTd2lwZXJQYyA9ICgpID0+IHtcclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzX19zbGlkZXIub25lJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICAgIG15U3dpcGVyUGNbMF0gPSBuZXcgU3dpcGVyKCcucGxheWVyc19fc2xpZGVyLm9uZScsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5wbGF5ZXJzX19wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgIC8vIH0sXHJcblxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNjUwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICB9LFxyXG5cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG4gICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnNfX3NsaWRlci50d28nKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbXlTd2lwZXJQY1sxXSA9IG5ldyBTd2lwZXIoJy5wbGF5ZXJzX19zbGlkZXIudHdvJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnBsYXllcnNfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA2NTA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1sYXRlc3RfX3NsaWRlcicpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBteVN3aXBlclBjWzJdID0gbmV3IFN3aXBlcignLm5ld3MtbGF0ZXN0X19zbGlkZXInLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6ICcubmV3cy1sYXRlc3RfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxufVxyXG5jb25zdCBlbmFibGVTd2lwZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFydG5lcnNfX3NsaWRlcicpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgICBteVN3aXBlclswXSA9IG5ldyBTd2lwZXIoJy5wYXJ0bmVyc19fc2xpZGVyJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG5cclxuICAgICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5wYXJ0bmVyc19fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgLy8gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgIC8vICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5MToge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG5cclxuICAgICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICAgICBvbjoge1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19zbGlkZXInKSkgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgICAgbXlTd2lwZXJbMV0gPSBuZXcgU3dpcGVyKCcubmV3c19fc2xpZGVyJywgeyAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLm5ld3NfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW8tbWFudWFsX19zbGlkZXIyJykpIHtcclxuICAgICAgbXlTd2lwZXJbMl0gPSBuZXcgU3dpcGVyKCcudmlkZW8tbWFudWFsX19zbGlkZXIxJywgeyAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YHQutC70LDRgdGBINC90YPQttC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQu9GD0YfQsNGPXHJcblxyXG4gICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgIHNwYWNlQmV0d2VlbjogMTIsXHJcbiAgICAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgICAgIGxvb3A6IHRydWUsXHJcblxyXG4gICAgICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgICAgLy9sYXp5OiB0cnVlLFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICAvLyDQrdGE0YTQtdC60YLRi1xyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0J/QsNCz0LjQvdCw0YbQuNGPXHJcbiAgICAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9C10LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtC40L3RgtGLXHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIC8vINCh0L7QsdGL0YLQuNGPXHJcbiAgICAgICAgIG9uOiB7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbiAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmVzdF9fc2xpZGVyJykpIHtcclxuICAgICAgbXlTd2lwZXJbM10gPSBuZXcgU3dpcGVyKCcuYmVzdF9fc2xpZGVyJywgeyAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YHQutC70LDRgdGBINC90YPQttC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQu9GD0YfQsNGPXHJcbiAgICAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICBzcGFjZUJldHdlZW46IDEyLFxyXG4gICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLmJlc3RfX3BhZ2luYXRpb24nXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCt0YTRhNC10LrRgtGLXHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAvLyDQn9Cw0LPQuNC90LDRhtC40Y9cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70LXQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0LjQvdGC0YtcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgLy8g0KHQvtCx0YvRgtC40Y9cclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlby1tYW51YWxfX3NsaWRlcjEnKSkge1xyXG4gICAgICBteVN3aXBlcls0XSA9IG5ldyBTd2lwZXIoJy52aWRlby1tYW51YWxfX3NsaWRlcjInLCB7IC8vINCj0LrQsNC30YvQstCw0LXQvCDRgdC60LvQsNGB0YEg0L3Rg9C20L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC70YPRh9Cw0Y9cclxuXHJcbiAgICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcclxuICAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICAgbG9vcDogdHJ1ZSxcclxuXHJcbiAgICAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAgICAvL2xhenk6IHRydWUsXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIC8vINCt0YTRhNC10LrRgtGLXHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAvLyDQn9Cw0LPQuNC90LDRhtC40Y9cclxuICAgICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70LXQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0LjQvdGC0YtcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA1MDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgLy8g0KHQvtCx0YvRgtC40Y9cclxuICAgICAgICAgb246IHtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxufTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGtlZXAgYW4gZXllIG9uIHZpZXdwb3J0IHNpemUgY2hhbmdlc1xyXG5icmVha3BvaW50LmFkZExpc3RlbmVyKGJyZWFrcG9pbnRDaGVja2VyKTtcclxuLy8ga2lja3N0YXJ0XHJcbmJyZWFrcG9pbnRDaGVja2VyKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODkyMmMzMzc1YTVjYjM0NDc0ZjBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=