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
//import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector('.swiper2')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', {
      // Вказуємо склас потрібного слайдера
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
      on: {},
    });
  }
  if (document.querySelector('.about2__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.about2__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Lazy],
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
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        726: {
          slidesPerView: 'auto',

          spaceBetween: 20,
        },
        992: {
          spaceBetween: 30,
        },
      },

      // Події
      on: {},
    });
  }
  if (document.querySelector('.news-latest2__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.news-latest2__slider', {
      // Вказуємо склас потрібного слайдера
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
      on: {},
    });
  }
  if (document.querySelector('.main-block__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.main-block__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Lazy],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      lazy: true,
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
      on: {},
    });
  }
  if (document.querySelector('.place__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.place__slider', {
      // Вказуємо склас потрібного слайдера
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
      on: {},
    });
  }

  if (document.querySelector('.gallery__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.gallery__slider', {
      // Вказуємо склас потрібного слайдера
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
      on: {},
    });
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector('.swiper-scrollbar');
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
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
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
    arr.forEach((element) => {
      element.destroy(true, true);
    });
  }
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const enableSwiperPc = () => {
  if (document.querySelector('.players__slider.one')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    mySwiperPc[0] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.players__slider.one', {
      // Вказуємо склас потрібного слайдера
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
      on: {},
    });
  }
  if (document.querySelector('.players__slider.two')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    mySwiperPc[1] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.players__slider.two', {
      // Вказуємо склас потрібного слайдера
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
      on: {},
    });
  }
  if (document.querySelector('.news-latest__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    mySwiperPc[2] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.news-latest__slider', {
      // Вказуємо склас потрібного слайдера
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
      on: {},
    });
  }
};
const enableSwiper = function () {
  if (document.querySelector('.partners__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    mySwiper[0] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.partners__slider', {
      // Вказуємо склас потрібного слайдера
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
      on: {},
    });
  }

  if (document.querySelector('.news__slider')) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    mySwiper[1] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.news__slider', {
      // Вказуємо склас потрібного слайдера
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
      on: {},
    });
  }

  if (document.querySelector('.video-manual__slider2')) {
    mySwiper[2] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.video-manual__slider1', {
      // Указываем скласс нужного слайдера
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
      on: {},
    });
  }
  if (document.querySelector('.best__slider')) {
    mySwiper[3] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.best__slider', {
      // Указываем скласс нужного слайдера
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
        el: '.best__pagination',
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
      on: {},
    });
  }
  if (document.querySelector('.video-manual__slider1')) {
    mySwiper[4] = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.video-manual__slider2', {
      // Указываем скласс нужного слайдера
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
      on: {},
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
/******/ 	__webpack_require__.h = () => ("3ec1b877c1a33fd86d9c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYzQ3ZmRiZWFlOTBjZDY1YmY3ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFLGNBQWM7QUFDMEQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQVUsRUFBRSx3Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxZQUFZO0FBQ1osS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBVSxFQUFFLDRDQUFRLEVBQUUsOENBQVUsRUFBRSx3Q0FBSTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBLFlBQVk7QUFDWixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOENBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxZQUFZO0FBQ1osS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxZQUFZO0FBQ1osS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOENBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxZQUFZO0FBQ1osS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLFlBQVk7QUFDWixLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOENBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDhDQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsWUFBWTtBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDaGlDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9zbGlkZXJzLmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINC/0L4g0YDQvtCx0L7RgtGWINGDINGI0LDQsdC70L7QvdGWOiBcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINGB0LvQsNC50LTQtdGA0LA6IGh0dHBzOi8vc3dpcGVyanMuY29tL1xyXG7QodC90ZbQv9C/0LXRgihIVE1MKTogc3dpcGVyXHJcbiovXHJcblxyXG4vLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INGB0LvQsNC50LTQtdGAIFN3aXBlciDQtyBub2RlX21vZHVsZXNcclxuLy8g0J/RgNC4INC90LXQvtCx0YXRltC00L3QvtGB0YLRliDQv9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC00L7QtNCw0YLQutC+0LLRliDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsCwg0LLQutCw0LfRg9GO0YfQuCDRl9GFINGDIHt9INGH0LXRgNC10Lcg0LrQvtC80YNcclxuLy8g0J/RgNC40LrQu9Cw0LQ6IHsgTmF2aWdhdGlvbiwgQXV0b3BsYXkgfVxyXG5pbXBvcnQgU3dpcGVyLCB7IEF1dG9wbGF5LCBMYXp5LCBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuLypcclxu0J7RgdC90L7QstC90ZYg0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LA6XHJcbk5hdmlnYXRpb24sIFBhZ2luYXRpb24sIEF1dG9wbGF5LCBcclxuRWZmZWN0RmFkZSwgTGF6eSwgTWFuaXB1bGF0aW9uXHJcbtCU0LXRgtCw0LvRjNC90ZbRiNC1INC00LjQstC40YHRjCBodHRwczovL3N3aXBlcmpzLmNvbS9cclxuKi9cclxuXHJcbi8vINCh0YLQuNC70ZYgU3dpcGVyXHJcbi8vINCR0LDQt9C+0LLRliDRgdGC0LjQu9GWXHJcbmltcG9ydCAnLi4vLi4vc2Nzcy9iYXNlL3N3aXBlci5zY3NzJztcclxuLy8g0J/QvtCy0L3QuNC5INC90LDQsdGW0YAg0YHRgtC40LvRltCyINC3IHNjc3MvbGlicy9zd2lwZXIuc2Nzc1xyXG4vL2ltcG9ydCBcIi4uLy4uL3Njc3MvbGlicy9zd2lwZXIuc2Nzc1wiO1xyXG4vLyDQn9C+0LLQvdC40Lkg0L3QsNCx0ZbRgCDRgdGC0LjQu9GW0LIg0Lcgbm9kZV9tb2R1bGVzXHJcbi8vIGltcG9ydCAnc3dpcGVyL2Nzcyc7XHJcblxyXG4vLyDQhtC90ZbRhtGW0LDQu9GW0LfQsNGG0ZbRjyDRgdC70LDQudC00LXRgNGW0LJcclxuZnVuY3Rpb24gaW5pdFNsaWRlcnMoKSB7XHJcbiAgLy8g0KHQv9C40YHQvtC6INGB0LvQsNC50LTQtdGA0ZbQslxyXG4gIC8vINCf0LXRgNC10LLRltGA0Y/RlNC80L4sINGH0Lgg0ZQg0YHQu9Cw0LnQtNC10YAg0L3QsCDRgdGC0L7RgNGW0L3RhtGWXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXIyJykpIHtcclxuICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgIG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgbW9kdWxlczogW05hdmlnYXRpb25dLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuICAgICAgLypcclxuICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICB9LFxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTI2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgIG9uOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Ml9fc2xpZGVyJykpIHtcclxuICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgIG5ldyBTd2lwZXIoJy5hYm91dDJfX3NsaWRlcicsIHtcclxuICAgICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbiwgTGF6eV0sXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICBzcGVlZDogODAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuYWJvdXQyX19wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcblxyXG4gICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDcyNjoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgb246IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1sYXRlc3QyX19zbGlkZXInKSkge1xyXG4gICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgbmV3IFN3aXBlcignLm5ld3MtbGF0ZXN0Ml9fc2xpZGVyJywge1xyXG4gICAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICBzcGVlZDogODAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcubmV3cy1sYXRlc3QyX19wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcblxyXG4gICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU1MDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICBvbjoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJsb2NrX19zbGlkZXInKSkge1xyXG4gICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgbmV3IFN3aXBlcignLm1haW4tYmxvY2tfX3NsaWRlcicsIHtcclxuICAgICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgQXV0b3BsYXksIFBhZ2luYXRpb24sIExhenldLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgbGF6eTogdHJ1ZSxcclxuICAgICAgbG9vcGVkU2xpZGVzOiAwLFxyXG4gICAgICAvLyBhdXRvcGxheToge1xyXG4gICAgICAvLyAgICBkZWxheTogNTAwMCxcclxuICAgICAgLy8gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLm1haW4tYmxvY2tfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMjY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgb246IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxhY2VfX3NsaWRlcicpKSB7XHJcbiAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICBuZXcgU3dpcGVyKCcucGxhY2VfX3NsaWRlcicsIHtcclxuICAgICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5wbGFjZV9fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgLy8gfSxcclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEyNjg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICBvbjoge30sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fc2xpZGVyJykpIHtcclxuICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgIG5ldyBTd2lwZXIoJy5nYWxsZXJ5X19zbGlkZXInLCB7XHJcbiAgICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcblxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuZ2FsbGVyeV9fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgLy8gfSxcclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEyNjg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICBvbjoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuLy8g0KHQutGA0L7Qu9C7INC90LAg0LHQsNC30ZYg0YHQu9Cw0LnQtNC10YDQsCAo0LfQsCDQutC70LDRgdC+0Lwgc3dpcGVyIHNjcm9sbCDQtNC70Y8g0L7QsdC+0LvQvtC90LrQuCDRgdC70LDQudC00LXRgNCwKVxyXG5mdW5jdGlvbiBpbml0U2xpZGVyc1Njcm9sbCgpIHtcclxuICBsZXQgc2xpZGVyU2Nyb2xsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyX3Njcm9sbCcpO1xyXG4gIGlmIChzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2xpZGVyU2Nyb2xsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IHNsaWRlclNjcm9sbEl0ZW0gPSBzbGlkZXJTY3JvbGxJdGVtc1tpbmRleF07XHJcbiAgICAgIGNvbnN0IHNsaWRlclNjcm9sbEJhciA9XHJcbiAgICAgICAgc2xpZGVyU2Nyb2xsSXRlbS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhcicpO1xyXG4gICAgICBjb25zdCBzbGlkZXJTY3JvbGwgPSBuZXcgU3dpcGVyKHNsaWRlclNjcm9sbEl0ZW0sIHtcclxuICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIGZyZWVNb2RlOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICBlbDogc2xpZGVyU2Nyb2xsQmFyLFxyXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgc25hcE9uUmVsZWFzZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VzZXdoZWVsOiB7XHJcbiAgICAgICAgICByZWxlYXNlT25FZGdlczogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgc2xpZGVyU2Nyb2xsLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8g0JfQsNC/0YPRgdC6INGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGXINGB0LvQsNC50LTQtdGA0ZbQslxyXG4gIGluaXRTbGlkZXJzKCk7XHJcbiAgLy8g0JfQsNC/0YPRgdC6INGW0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGXINGB0LrRgNC+0LvQu9CwINC90LAg0LHQsNC30ZYg0YHQu9Cw0LnQtNC10YDQsCAo0LfQsCDQutC70LDRgdC+0Lwgc3dpcGVyX3Njcm9sbClcclxuICAvL2luaXRTbGlkZXJzU2Nyb2xsKCk7XHJcbn0pO1xyXG5jb25zdCBicmVha3BvaW50ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6NzY3cHgpJyk7XHJcbi8vIGtlZXAgdHJhY2sgb2Ygc3dpcGVyIGluc3RhbmNlcyB0byBkZXN0cm95IGxhdGVyXHJcbmxldCBteVN3aXBlciA9IFtdO1xyXG5sZXQgbXlTd2lwZXJQYyA9IFtdO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBicmVha3BvaW50Q2hlY2tlciA9IGZ1bmN0aW9uICgpIHtcclxuICAvLyBpZiBsYXJnZXIgdmlld3BvcnQgYW5kIG11bHRpLXJvdyBsYXlvdXQgbmVlZGVkXHJcbiAgaWYgKGJyZWFrcG9pbnQubWF0Y2hlcyA9PT0gdHJ1ZSkge1xyXG4gICAgLy8gY2xlYW4gdXAgb2xkIGluc3RhbmNlcyBhbmQgaW5saW5lIHN0eWxlcyB3aGVuIGF2YWlsYWJsZVxyXG4gICAgaWYgKG15U3dpcGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGlzYWJsZVN3aXBlcihteVN3aXBlcik7XHJcbiAgICB9XHJcbiAgICBpZiAobXlTd2lwZXJQYyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGVuYWJsZVN3aXBlclBjKCk7XHJcbiAgICB9XHJcbiAgICAvLyBvci9hbmQgZG8gbm90aGluZ1xyXG4gICAgcmV0dXJuO1xyXG4gICAgLy8gZWxzZSBpZiBhIHNtYWxsIHZpZXdwb3J0IGFuZCBzaW5nbGUgY29sdW1uIGxheW91dCBuZWVkZWRcclxuICB9IGVsc2UgaWYgKGJyZWFrcG9pbnQubWF0Y2hlcyA9PT0gZmFsc2UpIHtcclxuICAgIC8vIGZpcmUgc21hbGwgdmlld3BvcnQgdmVyc2lvbiBvZiBzd2lwZXJcclxuICAgIGVuYWJsZVN3aXBlcigpO1xyXG4gICAgZGlzYWJsZVN3aXBlcihteVN3aXBlclBjKTtcclxuICB9XHJcbn07XHJcbmNvbnN0IGRpc2FibGVTd2lwZXIgPSBmdW5jdGlvbiAoYXJyKSB7XHJcbiAgaWYgKGFyciAhPT0gdW5kZWZpbmVkICYmIGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICBhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBlbGVtZW50LmRlc3Ryb3kodHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IGVuYWJsZVN3aXBlclBjID0gKCkgPT4ge1xyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyc19fc2xpZGVyLm9uZScpKSB7XHJcbiAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICBteVN3aXBlclBjWzBdID0gbmV3IFN3aXBlcignLnBsYXllcnNfX3NsaWRlci5vbmUnLCB7XHJcbiAgICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5wbGF5ZXJzX19wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgLy8gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIC8vICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAvLyB9LFxyXG5cclxuICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1MDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNjUwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICBvbjoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzX19zbGlkZXIudHdvJykpIHtcclxuICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgIG15U3dpcGVyUGNbMV0gPSBuZXcgU3dpcGVyKCcucGxheWVyc19fc2xpZGVyLnR3bycsIHtcclxuICAgICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnBsYXllcnNfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIC8vIH0sXHJcblxyXG4gICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2NTA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgIG9uOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MtbGF0ZXN0X19zbGlkZXInKSkge1xyXG4gICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgbXlTd2lwZXJQY1syXSA9IG5ldyBTd2lwZXIoJy5uZXdzLWxhdGVzdF9fc2xpZGVyJywge1xyXG4gICAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICBzcGVlZDogODAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcubmV3cy1sYXRlc3RfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIC8vIH0sXHJcblxyXG4gICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgb246IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBlbmFibGVTd2lwZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJ0bmVyc19fc2xpZGVyJykpIHtcclxuICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgIG15U3dpcGVyWzBdID0gbmV3IFN3aXBlcignLnBhcnRuZXJzX19zbGlkZXInLCB7XHJcbiAgICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgIHNwZWVkOiA4MDAsXHJcblxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcucGFydG5lcnNfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIC8vIH0sXHJcblxyXG4gICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkxOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICBvbjoge30sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3c19fc2xpZGVyJykpIHtcclxuICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgIG15U3dpcGVyWzFdID0gbmV3IFN3aXBlcignLm5ld3NfX3NsaWRlcicsIHtcclxuICAgICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLm5ld3NfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIC8vIH0sXHJcblxyXG4gICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgIG9uOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlby1tYW51YWxfX3NsaWRlcjInKSkge1xyXG4gICAgbXlTd2lwZXJbMl0gPSBuZXcgU3dpcGVyKCcudmlkZW8tbWFudWFsX19zbGlkZXIxJywge1xyXG4gICAgICAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YHQutC70LDRgdGBINC90YPQttC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQu9GD0YfQsNGPXHJcblxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTIsXHJcbiAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcblxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQrdGE0YTQtdC60YLRi1xyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgLy8g0J/QsNCz0LjQvdCw0YbQuNGPXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9C10LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAvLyDQkdGA0LXQudC60L/QvtC40L3RgtGLXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1MDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgLy8g0KHQvtCx0YvRgtC40Y9cclxuICAgICAgb246IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmVzdF9fc2xpZGVyJykpIHtcclxuICAgIG15U3dpcGVyWzNdID0gbmV3IFN3aXBlcignLmJlc3RfX3NsaWRlcicsIHtcclxuICAgICAgLy8g0KPQutCw0LfRi9Cy0LDQtdC8INGB0LrQu9Cw0YHRgSDQvdGD0LbQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCf0L7QtNC60LvRjtGH0LDQtdC8INC80L7QtNGD0LvQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INGB0LvRg9GH0LDRj1xyXG4gICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLmJlc3RfX3BhZ2luYXRpb24nLFxyXG4gICAgICB9LFxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQrdGE0YTQtdC60YLRi1xyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgLy8g0J/QsNCz0LjQvdCw0YbQuNGPXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9C10LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAvLyDQkdGA0LXQudC60L/QvtC40L3RgtGLXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1MDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgLy8g0KHQvtCx0YvRgtC40Y9cclxuICAgICAgb246IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlkZW8tbWFudWFsX19zbGlkZXIxJykpIHtcclxuICAgIG15U3dpcGVyWzRdID0gbmV3IFN3aXBlcignLnZpZGVvLW1hbnVhbF9fc2xpZGVyMicsIHtcclxuICAgICAgLy8g0KPQutCw0LfRi9Cy0LDQtdC8INGB0LrQu9Cw0YHRgSDQvdGD0LbQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCf0L7QtNC60LvRjtGH0LDQtdC8INC80L7QtNGD0LvQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INGB0LvRg9GH0LDRj1xyXG5cclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEyLFxyXG4gICAgICBzcGVlZDogODAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG5cclxuICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgIC8vbGF6eTogdHJ1ZSxcclxuICAgICAgLypcclxuICAgICAgICAgLy8g0K3RhNGE0LXQutGC0YtcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgIC8vINCf0LDQs9C40L3QsNGG0LjRj1xyXG4gICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvQtdCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgLy8g0JHRgNC10LnQutC/0L7QuNC90YLRi1xyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vINCh0L7QsdGL0YLQuNGPXHJcbiAgICAgIG9uOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGtlZXAgYW4gZXllIG9uIHZpZXdwb3J0IHNpemUgY2hhbmdlc1xyXG5icmVha3BvaW50LmFkZExpc3RlbmVyKGJyZWFrcG9pbnRDaGVja2VyKTtcclxuLy8ga2lja3N0YXJ0XHJcbmJyZWFrcG9pbnRDaGVja2VyKCk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNlYzFiODc3YzFhMzNmZDg2ZDljXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9