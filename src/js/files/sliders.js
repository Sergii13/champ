/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Autoplay, Lazy, Navigation, Pagination } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import '../../scss/base/swiper.scss';
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
    new Swiper('.swiper', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
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
    new Swiper('.about2__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination, Lazy],
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
    new Swiper('.news-latest2__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination],
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
    new Swiper('.main-block__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Autoplay, Pagination, Lazy],
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
    new Swiper('.place__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination],
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
    new Swiper('.gallery__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination],
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
    mySwiperPc[0] = new Swiper('.players__slider.one', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination],
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
    mySwiperPc[1] = new Swiper('.players__slider.two', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination],
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
    mySwiperPc[2] = new Swiper('.news-latest__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination],
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
    mySwiper[0] = new Swiper('.partners__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination],
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
    mySwiper[1] = new Swiper('.news__slider', {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination],
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
    mySwiper[2] = new Swiper('.video-manual__slider1', {
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
    mySwiper[3] = new Swiper('.best__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Pagination],
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
    mySwiper[4] = new Swiper('.video-manual__slider2', {
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
