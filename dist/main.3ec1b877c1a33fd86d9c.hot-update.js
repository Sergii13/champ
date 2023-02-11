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
      lazy: true,
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
/******/ 	__webpack_require__.h = () => ("289b5fc6ef0f9701aec9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxZQUFZO0FBQ1osS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUNqaUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6IFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0YHQu9Cw0LnQtNC10YDQsDogaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbtCh0L3RltC/0L/QtdGCKEhUTUwpOiBzd2lwZXJcclxuKi9cclxuXHJcbi8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0YHQu9Cw0LnQtNC10YAgU3dpcGVyINC3IG5vZGVfbW9kdWxlc1xyXG4vLyDQn9GA0Lgg0L3QtdC+0LHRhdGW0LTQvdC+0YHRgtGWINC/0ZbQtNC60LvRjtGH0LDRlNC80L4g0LTQvtC00LDRgtC60L7QstGWINC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwLCDQstC60LDQt9GD0Y7Rh9C4INGX0YUg0YMge30g0YfQtdGA0LXQtyDQutC+0LzRg1xyXG4vLyDQn9GA0LjQutC70LDQtDogeyBOYXZpZ2F0aW9uLCBBdXRvcGxheSB9XHJcbmltcG9ydCBTd2lwZXIsIHsgQXV0b3BsYXksIExhenksIE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG4vKlxyXG7QntGB0L3QvtCy0L3RliDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsDpcclxuTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgQXV0b3BsYXksIFxyXG5FZmZlY3RGYWRlLCBMYXp5LCBNYW5pcHVsYXRpb25cclxu0JTQtdGC0LDQu9GM0L3RltGI0LUg0LTQuNCy0LjRgdGMIGh0dHBzOi8vc3dpcGVyanMuY29tL1xyXG4qL1xyXG5cclxuLy8g0KHRgtC40LvRliBTd2lwZXJcclxuLy8g0JHQsNC30L7QstGWINGB0YLQuNC70ZZcclxuaW1wb3J0ICcuLi8uLi9zY3NzL2Jhc2Uvc3dpcGVyLnNjc3MnO1xyXG4vLyDQn9C+0LLQvdC40Lkg0L3QsNCx0ZbRgCDRgdGC0LjQu9GW0LIg0Lcgc2Nzcy9saWJzL3N3aXBlci5zY3NzXHJcbi8vaW1wb3J0IFwiLi4vLi4vc2Nzcy9saWJzL3N3aXBlci5zY3NzXCI7XHJcbi8vINCf0L7QstC90LjQuSDQvdCw0LHRltGAINGB0YLQuNC70ZbQsiDQtyBub2RlX21vZHVsZXNcclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuXHJcbi8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINGB0LvQsNC50LTQtdGA0ZbQslxyXG5mdW5jdGlvbiBpbml0U2xpZGVycygpIHtcclxuICAvLyDQodC/0LjRgdC+0Log0YHQu9Cw0LnQtNC10YDRltCyXHJcbiAgLy8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDRlCDRgdC70LDQudC00LXRgCDQvdCwINGB0YLQvtGA0ZbQvdGG0ZZcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcjInKSkge1xyXG4gICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgbmV3IFN3aXBlcignLnN3aXBlcicsIHtcclxuICAgICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICBtb2R1bGVzOiBbTmF2aWdhdGlvbl0sXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICBzcGVlZDogODAwLFxyXG5cclxuICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG4gICAgICAvKlxyXG4gICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgNjQwOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMjY4OiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcbiAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgb246IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXQyX19zbGlkZXInKSkge1xyXG4gICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgbmV3IFN3aXBlcignLmFib3V0Ml9fc2xpZGVyJywge1xyXG4gICAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uLCBMYXp5XSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIGxhenk6IHRydWUsXHJcbiAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5hYm91dDJfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuXHJcbiAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzI2OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICBvbjoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLWxhdGVzdDJfX3NsaWRlcicpKSB7XHJcbiAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICBuZXcgU3dpcGVyKCcubmV3cy1sYXRlc3QyX19zbGlkZXInLCB7XHJcbiAgICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5uZXdzLWxhdGVzdDJfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuXHJcbiAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTUwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTI6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgIG9uOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYmxvY2tfX3NsaWRlcicpKSB7XHJcbiAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICBuZXcgU3dpcGVyKCcubWFpbi1ibG9ja19fc2xpZGVyJywge1xyXG4gICAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgIG1vZHVsZXM6IFtOYXZpZ2F0aW9uLCBBdXRvcGxheSwgUGFnaW5hdGlvbiwgTGF6eV0sXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICBzcGVlZDogODAwLFxyXG4gICAgICBsYXp5OiB0cnVlLFxyXG4gICAgICBsb29wZWRTbGlkZXM6IDAsXHJcbiAgICAgIC8vIGF1dG9wbGF5OiB7XHJcbiAgICAgIC8vICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAvLyAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcubWFpbi1ibG9ja19fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG5cclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG4gICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEyNjg6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICBvbjoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZV9fc2xpZGVyJykpIHtcclxuICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgIG5ldyBTd2lwZXIoJy5wbGFjZV9fc2xpZGVyJywge1xyXG4gICAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzcGVlZDogODAwLFxyXG5cclxuICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnBsYWNlX19wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgLy8gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIC8vICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTI2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgIG9uOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19zbGlkZXInKSkge1xyXG4gICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgbmV3IFN3aXBlcignLmdhbGxlcnlfX3NsaWRlcicsIHtcclxuICAgICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5nYWxsZXJ5X19wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQodC60YDQvtC70LvQsdCw0YBcclxuICAgICAgLypcclxuICAgICAgICAgc2Nyb2xsYmFyOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgIC8vIG5hdmlnYXRpb246IHtcclxuICAgICAgLy8gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIC8vICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA5OTI6IHtcclxuICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTI2ODoge1xyXG4gICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgIG9uOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4vLyDQodC60YDQvtC70Lsg0L3QsCDQsdCw0LfRliDRgdC70LDQudC00LXRgNCwICjQt9CwINC60LvQsNGB0L7QvCBzd2lwZXIgc2Nyb2xsINC00LvRjyDQvtCx0L7Qu9C+0L3QutC4INGB0LvQsNC50LTQtdGA0LApXHJcbmZ1bmN0aW9uIGluaXRTbGlkZXJzU2Nyb2xsKCkge1xyXG4gIGxldCBzbGlkZXJTY3JvbGxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXJfc2Nyb2xsJyk7XHJcbiAgaWYgKHNsaWRlclNjcm9sbEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3Qgc2xpZGVyU2Nyb2xsSXRlbSA9IHNsaWRlclNjcm9sbEl0ZW1zW2luZGV4XTtcclxuICAgICAgY29uc3Qgc2xpZGVyU2Nyb2xsQmFyID1cclxuICAgICAgICBzbGlkZXJTY3JvbGxJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItc2Nyb2xsYmFyJyk7XHJcbiAgICAgIGNvbnN0IHNsaWRlclNjcm9sbCA9IG5ldyBTd2lwZXIoc2xpZGVyU2Nyb2xsSXRlbSwge1xyXG4gICAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgZnJlZU1vZGU6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgIGVsOiBzbGlkZXJTY3JvbGxCYXIsXHJcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICBzbmFwT25SZWxlYXNlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdXNld2hlZWw6IHtcclxuICAgICAgICAgIHJlbGVhc2VPbkVkZ2VzOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzbGlkZXJTY3JvbGwuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGUpIHtcclxuICAvLyDQl9Cw0L/Rg9GB0Log0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Zcg0YHQu9Cw0LnQtNC10YDRltCyXHJcbiAgaW5pdFNsaWRlcnMoKTtcclxuICAvLyDQl9Cw0L/Rg9GB0Log0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Zcg0YHQutGA0L7Qu9C70LAg0L3QsCDQsdCw0LfRliDRgdC70LDQudC00LXRgNCwICjQt9CwINC60LvQsNGB0L7QvCBzd2lwZXJfc2Nyb2xsKVxyXG4gIC8vaW5pdFNsaWRlcnNTY3JvbGwoKTtcclxufSk7XHJcbmNvbnN0IGJyZWFrcG9pbnQgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDo3NjdweCknKTtcclxuLy8ga2VlcCB0cmFjayBvZiBzd2lwZXIgaW5zdGFuY2VzIHRvIGRlc3Ryb3kgbGF0ZXJcclxubGV0IG15U3dpcGVyID0gW107XHJcbmxldCBteVN3aXBlclBjID0gW107XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IGJyZWFrcG9pbnRDaGVja2VyID0gZnVuY3Rpb24gKCkge1xyXG4gIC8vIGlmIGxhcmdlciB2aWV3cG9ydCBhbmQgbXVsdGktcm93IGxheW91dCBuZWVkZWRcclxuICBpZiAoYnJlYWtwb2ludC5tYXRjaGVzID09PSB0cnVlKSB7XHJcbiAgICAvLyBjbGVhbiB1cCBvbGQgaW5zdGFuY2VzIGFuZCBpbmxpbmUgc3R5bGVzIHdoZW4gYXZhaWxhYmxlXHJcbiAgICBpZiAobXlTd2lwZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkaXNhYmxlU3dpcGVyKG15U3dpcGVyKTtcclxuICAgIH1cclxuICAgIGlmIChteVN3aXBlclBjICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZW5hYmxlU3dpcGVyUGMoKTtcclxuICAgIH1cclxuICAgIC8vIG9yL2FuZCBkbyBub3RoaW5nXHJcbiAgICByZXR1cm47XHJcbiAgICAvLyBlbHNlIGlmIGEgc21hbGwgdmlld3BvcnQgYW5kIHNpbmdsZSBjb2x1bW4gbGF5b3V0IG5lZWRlZFxyXG4gIH0gZWxzZSBpZiAoYnJlYWtwb2ludC5tYXRjaGVzID09PSBmYWxzZSkge1xyXG4gICAgLy8gZmlyZSBzbWFsbCB2aWV3cG9ydCB2ZXJzaW9uIG9mIHN3aXBlclxyXG4gICAgZW5hYmxlU3dpcGVyKCk7XHJcbiAgICBkaXNhYmxlU3dpcGVyKG15U3dpcGVyUGMpO1xyXG4gIH1cclxufTtcclxuY29uc3QgZGlzYWJsZVN3aXBlciA9IGZ1bmN0aW9uIChhcnIpIHtcclxuICBpZiAoYXJyICE9PSB1bmRlZmluZWQgJiYgYXJyLmxlbmd0aCA+IDApIHtcclxuICAgIGFyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuZGVzdHJveSh0cnVlLCB0cnVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgZW5hYmxlU3dpcGVyUGMgPSAoKSA9PiB7XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzX19zbGlkZXIub25lJykpIHtcclxuICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuICAgIG15U3dpcGVyUGNbMF0gPSBuZXcgU3dpcGVyKCcucGxheWVyc19fc2xpZGVyLm9uZScsIHtcclxuICAgICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgLy90b3VjaFJhdGlvOiAwLFxyXG4gICAgICAvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAvL2xvb3A6IHRydWUsXHJcbiAgICAgIC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcbiAgICAgIC8vbGF6eTogdHJ1ZSxcclxuXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIC8vINCV0YTQtdC60YLQuFxyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCf0LDQs9GW0L3QsNGG0ZbRj1xyXG5cclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnBsYXllcnNfX3BhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgIC8vINCa0L3QvtC/0LrQuCBcItCy0LvRltCy0L4v0LLQv9GA0LDQstC+XCJcclxuICAgICAgLy8gbmF2aWdhdGlvbjoge1xyXG4gICAgICAvLyAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgLy8gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIC8vIH0sXHJcblxyXG4gICAgICAvLyDQkdGA0LXQudC60L/QvtGW0L3RgtC4XHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2NTA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgIG9uOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnNfX3NsaWRlci50d28nKSkge1xyXG4gICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgbXlTd2lwZXJQY1sxXSA9IG5ldyBTd2lwZXIoJy5wbGF5ZXJzX19zbGlkZXIudHdvJywge1xyXG4gICAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICBzcGVlZDogODAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcucGxheWVyc19fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgLy8gfSxcclxuXHJcbiAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDY1MDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgb246IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cy1sYXRlc3RfX3NsaWRlcicpKSB7XHJcbiAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgLy8g0KHRgtCy0L7RgNGO0ZTQvNC+INGB0LvQsNC50LTQtdGAXHJcbiAgICBteVN3aXBlclBjWzJdID0gbmV3IFN3aXBlcignLm5ld3MtbGF0ZXN0X19zbGlkZXInLCB7XHJcbiAgICAgIC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuICAgICAgbW9kdWxlczogW1BhZ2luYXRpb25dLFxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTUsXHJcbiAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5uZXdzLWxhdGVzdF9fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgLy8gfSxcclxuXHJcbiAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0J/QvtC00ZbRl1xyXG4gICAgICBvbjoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbmNvbnN0IGVuYWJsZVN3aXBlciA9IGZ1bmN0aW9uICgpIHtcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcnRuZXJzX19zbGlkZXInKSkge1xyXG4gICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgbXlTd2lwZXJbMF0gPSBuZXcgU3dpcGVyKCcucGFydG5lcnNfX3NsaWRlcicsIHtcclxuICAgICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG4gICAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbl0sXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQldGE0LXQutGC0LhcclxuICAgICAgICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgICovXHJcblxyXG4gICAgICAvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5wYXJ0bmVyc19fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgLy8gfSxcclxuXHJcbiAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA2NDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5OTE6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDQn9C+0LTRltGXXHJcbiAgICAgIG9uOiB7fSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19zbGlkZXInKSkge1xyXG4gICAgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgIC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG4gICAgbXlTd2lwZXJbMV0gPSBuZXcgU3dpcGVyKCcubmV3c19fc2xpZGVyJywge1xyXG4gICAgICAvLyDQktC60LDQt9GD0ZTQvNC+INGB0LrQu9Cw0YEg0L/QvtGC0YDRltCx0L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwXHJcbiAgICAgIC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQv9Cw0LTQutGDXHJcbiAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICBzcGVlZDogODAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG5cclxuICAgICAgLypcclxuICAgICAgICAgLy8g0JXRhNC10LrRgtC4XHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0J/QsNCz0ZbQvdCw0YbRltGPXHJcblxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcubmV3c19fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG5cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9GW0LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAvLyBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIC8vICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICAvLyAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgLy8gfSxcclxuXHJcbiAgICAgIC8vINCR0YDQtdC50LrQv9C+0ZbQvdGC0LhcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA2NDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vINCf0L7QtNGW0ZdcclxuICAgICAgb246IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZGVvLW1hbnVhbF9fc2xpZGVyMicpKSB7XHJcbiAgICBteVN3aXBlclsyXSA9IG5ldyBTd2lwZXIoJy52aWRlby1tYW51YWxfX3NsaWRlcjEnLCB7XHJcbiAgICAgIC8vINCj0LrQsNC30YvQstCw0LXQvCDRgdC60LvQsNGB0YEg0L3Rg9C20L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC70YPRh9Cw0Y9cclxuXHJcbiAgICAgIG9ic2VydmVyOiB0cnVlLFxyXG4gICAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMixcclxuICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIC8vINCt0YTRhNC10LrRgtGLXHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAvLyDQn9Cw0LPQuNC90LDRhtC40Y9cclxuICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70LXQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgIC8vINCR0YDQtdC50LrQv9C+0LjQvdGC0YtcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAvLyDQodC+0LHRi9GC0LjRj1xyXG4gICAgICBvbjoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXN0X19zbGlkZXInKSkge1xyXG4gICAgbXlTd2lwZXJbM10gPSBuZXcgU3dpcGVyKCcuYmVzdF9fc2xpZGVyJywge1xyXG4gICAgICAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YHQutC70LDRgdGBINC90YPQttC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQu9GD0YfQsNGPXHJcbiAgICAgIG1vZHVsZXM6IFtQYWdpbmF0aW9uXSxcclxuICAgICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDEyLFxyXG4gICAgICBzcGVlZDogODAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuYmVzdF9fcGFnaW5hdGlvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vdG91Y2hSYXRpbzogMCxcclxuICAgICAgLy9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuICAgICAgLy9sb29wOiB0cnVlLFxyXG4gICAgICAvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICAvL2xhenk6IHRydWUsXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIC8vINCt0YTRhNC10LrRgtGLXHJcbiAgICAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogMzAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAvLyDQn9Cw0LPQuNC90LDRhtC40Y9cclxuICAgICAgLy8g0KHQutGA0L7Qu9C70LHQsNGAXHJcbiAgICAgIC8qXHJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICB9LFxyXG4gICAgICAgICAqL1xyXG4gICAgICAvLyDQmtC90L7Qv9C60LggXCLQstC70LXQstC+L9Cy0L/RgNCw0LLQvlwiXHJcbiAgICAgIC8vINCR0YDQtdC50LrQv9C+0LjQvdGC0YtcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDUwMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICAvLyDQodC+0LHRi9GC0LjRj1xyXG4gICAgICBvbjoge30sXHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWRlby1tYW51YWxfX3NsaWRlcjEnKSkge1xyXG4gICAgbXlTd2lwZXJbNF0gPSBuZXcgU3dpcGVyKCcudmlkZW8tbWFudWFsX19zbGlkZXIyJywge1xyXG4gICAgICAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YHQutC70LDRgdGBINC90YPQttC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LBcclxuICAgICAgLy8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQu9GD0YfQsNGPXHJcblxyXG4gICAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgICAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTIsXHJcbiAgICAgIHNwZWVkOiA4MDAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcblxyXG4gICAgICAvL3RvdWNoUmF0aW86IDAsXHJcbiAgICAgIC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIC8vbG9vcDogdHJ1ZSxcclxuICAgICAgLy9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuICAgICAgLy9sYXp5OiB0cnVlLFxyXG4gICAgICAvKlxyXG4gICAgICAgICAvLyDQrdGE0YTQtdC60YLRi1xyXG4gICAgICAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgLy8g0J/QsNCz0LjQvdCw0YbQuNGPXHJcbiAgICAgIC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG4gICAgICAvKlxyXG4gICAgICAgICBzY3JvbGxiYXI6IHtcclxuICAgICAgICAgICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICAgfSxcclxuICAgICAgICAgKi9cclxuICAgICAgLy8g0JrQvdC+0L/QutC4IFwi0LLQu9C10LLQvi/QstC/0YDQsNCy0L5cIlxyXG4gICAgICAvLyDQkdGA0LXQudC60L/QvtC40L3RgtGLXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1MDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgLy8g0KHQvtCx0YvRgtC40Y9cclxuICAgICAgb246IHt9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8ga2VlcCBhbiBleWUgb24gdmlld3BvcnQgc2l6ZSBjaGFuZ2VzXHJcbmJyZWFrcG9pbnQuYWRkTGlzdGVuZXIoYnJlYWtwb2ludENoZWNrZXIpO1xyXG4vLyBraWNrc3RhcnRcclxuYnJlYWtwb2ludENoZWNrZXIoKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjg5YjVmYzZlZjBmOTcwMWFlYzlcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=