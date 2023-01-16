"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _files_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files/forms/forms.js */ "./src/js/files/forms/forms.js");
/* harmony import */ var _libs_select_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/select.js */ "./src/js/libs/select.js");
/* harmony import */ var _files_sliders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/sliders.js */ "./src/js/files/sliders.js");
/* harmony import */ var _files_scroll_simplebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/scroll/simplebar.js */ "./src/js/files/scroll/simplebar.js");
/* harmony import */ var _libs_watcher_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs/watcher.js */ "./src/js/libs/watcher.js");
/* harmony import */ var _libs_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./libs/parallax.js */ "./src/js/libs/parallax.js");
/* harmony import */ var _files_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./files/scroll/scroll.js */ "./src/js/files/scroll/scroll.js");
/* harmony import */ var _files_gallery_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./files/gallery.js */ "./src/js/files/gallery.js");
/* harmony import */ var _libs_dynamic_adapt_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./libs/dynamic_adapt.js */ "./src/js/libs/dynamic_adapt.js");
/* harmony import */ var _files_script_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./files/script.js */ "./src/js/files/script.js");
/*
(i) Код потрапляє у підсумковий файл,
тільки коли викликана функція,
наприклад flsFunctions.spollers();
Або коли імпортовано весь файл,
наприклад, import "files/script.js";
Невикористовуваний (не викликаний)
код у підсумковий файл не потрапляє.

Якщо ми хочемо додати модуль
слід його розкоментувати
*/

// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
window['FLS'] = false;

// Підключення основного файлу стилів


// ========================================================================================================================================================================================================================================================
// Функціонал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================


/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
// flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.addLoadedClass();
/* Модуль для роботи з меню (Бургер) */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.menuInit();
/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.fullVHfix();

/*
Модуль "Спойлери"
Документація: https://template.fls.guru/template-docs/modul-spojlery.html
Сніппет (HTML): spollers
*/
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.spollers();

/*
Модуль "Таби"
Документація: https://template.fls.guru/template-docs/modul-taby.html
Сніппет (HTML): tabs
*/
// flsFunctions.tabs();

/*
Модуль "Показати ще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Модуль "Ефект хвиль"
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль "Кастомний курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль "Попапи"
Документація: https://template.fls.guru/template-docs/funkcional-popup.html
Сніппет (HTML): pl, pop
*/
// import './libs/popup.js'

/*
Модуль паралаксу мишею
Документація: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================


/* Робота з полями форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */

_files_forms_forms_js__WEBPACK_IMPORTED_MODULE_2__.formFieldsInit({
   viewPass: false,
   autoHeight: false
});

/* Надсилання форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль форми "кількість" */
// flsForms.formQuantity();

/* Модуль зіркового рейтингу */
// flsForms.formRating();

/* Модуль роботи з select. */


/* Модуль роботи з календарем */
// import './files/forms/datepicker.js'

/* (У роботі) Модуль роботи з масками.*/
/*
Підключення та налаштування виконується у файлі js/files/forms/inputmask.js
Документація по роботі у шаблоні:
Документація плагіна: https://github.com/RobinHerbots/inputmask
Сніппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль роботи з повзунком */
/*
Підключення та налаштування виконується у файлі js/files/forms/range.js
Документація по роботі у шаблоні:
Документація плагіна: https://refreshless.com/nouislider/
Сніппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль роботи з підказками (tippy) */
/*
Підключення плагіна Tippy.js та налаштування виконується у файлі js/files/tippy.js
Документація по роботі у шаблоні:
Документація плагіна: https://atomiks.github.io/tippyjs/
Сніппет (HTML): tip (додає атрибут з підказкою для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Робота зі слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Налаштування підключення плагіна слайдера Swiper та нових слайдерів виконується у файлі js/files/sliders.js
Документація по роботі у шаблоні: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документація плагіна: https://swiperjs.com/
Сніппет(HTML): swiper
*/


// ========================================================================================================================================================================================================================================================
// Модулі роботи з прокручуванням сторінки ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Зміна дизайну скроллбару
Документація по роботі у шаблоні: У HTML додаємо до блоку атрибут data-simplebar
Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сніппет(HTML): 
*/


// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// Спостерігач за об'єктами з атрибутом data-watch
// Документація: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):


// Модуль поекранної прокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
// import './libs/fullpage.js'

// Модуль паралаксу
// Документація: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):


// Функції роботи скролом


// Плавна навігація по сторінці
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
_files_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_8__.pageNavigation();

// Функціонал додавання класів до хедеру під час прокручування
// Документація: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
_files_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_8__.headerScroll();

// Функціонал липкого блоку
// flsScroll.stickyBlock();

// Модуль анімація цифрового лічильника
// Документація: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сніппет(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні: 
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/


// ========================================================================================================================================================================================================================================================
// Інші плагіни ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамічний адаптив */
// Документація: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html


/* Форматування чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Інше ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Підключаємо файли зі своїм кодом */

//============================================================================================================================================================================================================================================

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("071bf07e5f1b83f3d8a0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMTRhMDg0NmQwYmVjNDc3MmVjNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ3FEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHVEQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSwrREFBMkI7QUFDM0I7QUFDQSx5REFBcUI7QUFDckI7QUFDQSwwREFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUF1QjtBQUN2QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQjtBQUMzQjtBQUNBO0FBQ3NEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLG1FQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxpRUFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQzNCOzs7Ozs7OztVQ3JPQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4oaSkg0JrQvtC0INC/0L7RgtGA0LDQv9C70Y/RlCDRgyDQv9GW0LTRgdGD0LzQutC+0LLQuNC5INGE0LDQudC7LFxyXG7RgtGW0LvRjNC60Lgg0LrQvtC70Lgg0LLQuNC60LvQuNC60LDQvdCwINGE0YPQvdC60YbRltGPLFxyXG7QvdCw0L/RgNC40LrQu9Cw0LQgZmxzRnVuY3Rpb25zLnNwb2xsZXJzKCk7XHJcbtCQ0LHQviDQutC+0LvQuCDRltC80L/QvtGA0YLQvtCy0LDQvdC+INCy0LXRgdGMINGE0LDQudC7LFxyXG7QvdCw0L/RgNC40LrQu9Cw0LQsIGltcG9ydCBcImZpbGVzL3NjcmlwdC5qc1wiO1xyXG7QndC10LLQuNC60L7RgNC40YHRgtC+0LLRg9Cy0LDQvdC40LkgKNC90LUg0LLQuNC60LvQuNC60LDQvdC40LkpXHJcbtC60L7QtCDRgyDQv9GW0LTRgdGD0LzQutC+0LLQuNC5INGE0LDQudC7INC90LUg0L/QvtGC0YDQsNC/0LvRj9GULlxyXG5cclxu0K/QutGJ0L4g0LzQuCDRhdC+0YfQtdC80L4g0LTQvtC00LDRgtC4INC80L7QtNGD0LvRjFxyXG7RgdC70ZbQtCDQudC+0LPQviDRgNC+0LfQutC+0LzQtdC90YLRg9Cy0LDRgtC4XHJcbiovXHJcblxyXG4vLyDQo9Cy0ZbQvNC60L3Rg9GC0Lgv0LLQuNC80LrQvdGD0YLQuCBGTFMgKEZ1bGwgTG9nZ2luZyBTeXN0ZW0pICjQsiDRgNC+0LHQvtGC0ZYpXHJcbndpbmRvd1snRkxTJ10gPSBmYWxzZTtcclxuXHJcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0L7RgdC90L7QstC90L7Qs9C+INGE0LDQudC70YMg0YHRgtC40LvRltCyXHJcbmltcG9ydCBcIi4uL3Njc3Mvc3R5bGUuc2Nzc1wiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0KTRg9C90LrRhtGW0L7QvdCw0LsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0ICogYXMgZmxzRnVuY3Rpb25zIGZyb20gXCIuL2ZpbGVzL2Z1bmN0aW9ucy5qc1wiO1xyXG5cclxuLyog0J/QtdGA0LXQstGW0YDQutCwINC/0ZbQtNGC0YDQuNC80LrQuCB3ZWJwLCDQtNC+0LTQsNCy0LDQvdC90Y8g0LrQu9Cw0YHRgyB3ZWJwINCw0LHQviBuby13ZWJwINC00LvRjyBIVE1MICovXHJcbi8qIChpKSDQvdC10L7QsdGF0ZbQtNC90L4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyB3ZWJwINGW0LcgY3NzICovXHJcbmZsc0Z1bmN0aW9ucy5pc1dlYnAoKTtcclxuLyog0JTQvtC00LDQstCw0L3QvdGPINC60LvQsNGB0YMgdG91Y2gg0LTQu9GPIEhUTUwg0Y/QutGJ0L4g0LHRgNCw0YPQt9C10YAg0LzQvtCx0ZbQu9GM0L3QuNC5ICovXHJcbi8vIGZsc0Z1bmN0aW9ucy5hZGRUb3VjaENsYXNzKCk7XHJcbi8qINCU0L7QtNCw0LLQsNC90L3RjyBsb2FkZWQg0LTQu9GPIEhUTUwg0L/RltGB0LvRjyDQv9C+0LLQvdC+0LPQviDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0YHRgtC+0YDRltC90LrQuCAqL1xyXG5mbHNGdW5jdGlvbnMuYWRkTG9hZGVkQ2xhc3MoKTtcclxuLyog0JzQvtC00YPQu9GMINC00LvRjyDRgNC+0LHQvtGC0Lgg0Lcg0LzQtdC90Y4gKNCR0YPRgNCz0LXRgCkgKi9cclxuZmxzRnVuY3Rpb25zLm1lbnVJbml0KCk7XHJcbi8qINCS0YDQsNGF0L7QstGD0LLQsNC90L3RjyDQv9C70LDQstCw0Y7Rh9C+0Zcg0L/QsNC90LXQu9GWINC90LAg0LzQvtCx0ZbQu9GM0L3QuNGFINC/0YDQuNGB0YLRgNC+0Y/RhSDQv9GA0LggMTAwdmggKi9cclxuZmxzRnVuY3Rpb25zLmZ1bGxWSGZpeCgpO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMIFwi0KHQv9C+0LnQu9C10YDQuFwiXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXNwb2psZXJ5Lmh0bWxcclxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBzcG9sbGVyc1xyXG4qL1xyXG5mbHNGdW5jdGlvbnMuc3BvbGxlcnMoKTtcclxuXHJcbi8qXHJcbtCc0L7QtNGD0LvRjCBcItCi0LDQsdC4XCJcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtdGFieS5odG1sXHJcbtCh0L3RltC/0L/QtdGCIChIVE1MKTogdGFic1xyXG4qL1xyXG4vLyBmbHNGdW5jdGlvbnMudGFicygpO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMIFwi0J/QvtC60LDQt9Cw0YLQuCDRidC1XCJcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtcG9rYXphdC1lc2hoam8uaHRtbFxyXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IHNob3dtb3JlXHJcbiovXHJcbi8vIGZsc0Z1bmN0aW9ucy5zaG93TW9yZSgpO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMIFwi0JXRhNC10LrRgiDRhdCy0LjQu9GMXCJcclxu0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtcmlwcGxlLWVmZmVjdC5odG1sXHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTpcclxuKi9cclxuLy8gZmxzRnVuY3Rpb25zLnJpcHBsZUVmZmVjdCgpO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMIFwi0JrQsNGB0YLQvtC80L3QuNC5INC60YPRgNGB0L7RgFwiXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzpcclxu0KHQvdC40L/Qv9C10YIgKEhUTUwpOlxyXG4qL1xyXG4vLyBmbHNGdW5jdGlvbnMuY3VzdG9tQ3Vyc29yKHRydWUpO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMIFwi0J/QvtC/0LDQv9C4XCJcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvZnVua2Npb25hbC1wb3B1cC5odG1sXHJcbtCh0L3RltC/0L/QtdGCIChIVE1MKTogcGwsIHBvcFxyXG4qL1xyXG4vLyBpbXBvcnQgJy4vbGlicy9wb3B1cC5qcydcclxuXHJcbi8qXHJcbtCc0L7QtNGD0LvRjCDQv9Cw0YDQsNC70LDQutGB0YMg0LzQuNGI0LXRjlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1hbmltYWNpaS1wYXJhbGxha3Mtb2Jla3Rvdi1wcmktZHZpemhlbmlpLW15c2hpLmh0bWxcclxuKi9cclxuLy8gaW1wb3J0ICcuL2xpYnMvcGFyYWxsYXgtbW91c2UuanMnXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQoNC+0LHQvtGC0LAg0Lcg0YTQvtGA0LzQsNC80LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0ICogYXMgZmxzRm9ybXMgZnJvbSBcIi4vZmlsZXMvZm9ybXMvZm9ybXMuanNcIjtcclxuXHJcbi8qINCg0L7QsdC+0YLQsCDQtyDQv9C+0LvRj9C80Lgg0YTQvtGA0LzQuCAqL1xyXG4vKiDQlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9yYWJvdGEtcy1mb3JtYW1pLmh0bWwgKi9cclxuXHJcbmZsc0Zvcm1zLmZvcm1GaWVsZHNJbml0KHtcclxuICAgdmlld1Bhc3M6IGZhbHNlLFxyXG4gICBhdXRvSGVpZ2h0OiBmYWxzZVxyXG59KTtcclxuXHJcbi8qINCd0LDQtNGB0LjQu9Cw0L3QvdGPINGE0L7RgNC80LggKi9cclxuLyog0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcmFib3RhLXMtZm9ybWFtaS5odG1sICovXHJcbi8vIGZsc0Zvcm1zLmZvcm1TdWJtaXQoKTtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRhNC+0YDQvNC4IFwi0LrRltC70YzQutGW0YHRgtGMXCIgKi9cclxuLy8gZmxzRm9ybXMuZm9ybVF1YW50aXR5KCk7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0LfRltGA0LrQvtCy0L7Qs9C+INGA0LXQudGC0LjQvdCz0YMgKi9cclxuLy8gZmxzRm9ybXMuZm9ybVJhdGluZygpO1xyXG5cclxuLyog0JzQvtC00YPQu9GMINGA0L7QsdC+0YLQuCDQtyBzZWxlY3QuICovXHJcbmltcG9ydCAnLi9saWJzL3NlbGVjdC5qcydcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRgNC+0LHQvtGC0Lgg0Lcg0LrQsNC70LXQvdC00LDRgNC10LwgKi9cclxuLy8gaW1wb3J0ICcuL2ZpbGVzL2Zvcm1zL2RhdGVwaWNrZXIuanMnXHJcblxyXG4vKiAo0KMg0YDQvtCx0L7RgtGWKSDQnNC+0LTRg9C70Ywg0YDQvtCx0L7RgtC4INC3INC80LDRgdC60LDQvNC4LiovXHJcbi8qXHJcbtCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YLQsCDQvdCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0LLQuNC60L7QvdGD0ZTRgtGM0YHRjyDRgyDRhNCw0LnQu9GWIGpzL2ZpbGVzL2Zvcm1zL2lucHV0bWFzay5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6XHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9pbnB1dG1hc2tcclxu0KHQvdGW0L/Qv9C10YIoSFRNTCk6XHJcbiovXHJcbi8vIGltcG9ydCBcIi4vZmlsZXMvZm9ybXMvaW5wdXRtYXNrLmpzXCI7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YDQvtCx0L7RgtC4INC3INC/0L7QstC30YPQvdC60L7QvCAqL1xyXG4vKlxyXG7Qn9GW0LTQutC70Y7Rh9C10L3QvdGPINGC0LAg0L3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCy0LjQutC+0L3Rg9GU0YLRjNGB0Y8g0YMg0YTQsNC50LvRliBqcy9maWxlcy9mb3Jtcy9yYW5nZS5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6XHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly9yZWZyZXNobGVzcy5jb20vbm91aXNsaWRlci9cclxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiByYW5nZVxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL2Zvcm1zL3JhbmdlLmpzXCI7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YDQvtCx0L7RgtC4INC3INC/0ZbQtNC60LDQt9C60LDQvNC4ICh0aXBweSkgKi9cclxuLypcclxu0J/RltC00LrQu9GO0YfQtdC90L3RjyDQv9C70LDQs9GW0L3QsCBUaXBweS5qcyDRgtCwINC90LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDQstC40LrQvtC90YPRlNGC0YzRgdGPINGDINGE0LDQudC70ZYganMvZmlsZXMvdGlwcHkuanNcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINC/0L4g0YDQvtCx0L7RgtGWINGDINGI0LDQsdC70L7QvdGWOlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/Qu9Cw0LPRltC90LA6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy9cclxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiB0aXAgKNC00L7QtNCw0ZQg0LDRgtGA0LjQsdGD0YIg0Lcg0L/RltC00LrQsNC30LrQvtGOINC00LvRjyBodG1sINGC0LXQs9CwKVxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL3RpcHB5LmpzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQoNC+0LHQvtGC0LAg0LfRliDRgdC70LDQudC00LXRgNC+0LwgKFN3aXBlcikgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLypcclxu0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8g0L/Qu9Cw0LPRltC90LAg0YHQu9Cw0LnQtNC10YDQsCBTd2lwZXIg0YLQsCDQvdC+0LLQuNGFINGB0LvQsNC50LTQtdGA0ZbQsiDQstC40LrQvtC90YPRlNGC0YzRgdGPINGDINGE0LDQudC70ZYganMvZmlsZXMvc2xpZGVycy5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9yYWJvdGEtc28tc2xhamRlcm9tLXN3aXBlci5odG1sXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbtCh0L3RltC/0L/QtdGCKEhUTUwpOiBzd2lwZXJcclxuKi9cclxuaW1wb3J0IFwiLi9maWxlcy9zbGlkZXJzLmpzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQnNC+0LTRg9C70ZYg0YDQvtCx0L7RgtC4INC3INC/0YDQvtC60YDRg9GH0YPQstCw0L3QvdGP0Lwg0YHRgtC+0YDRltC90LrQuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLypcclxu0JfQvNGW0L3QsCDQtNC40LfQsNC50L3RgyDRgdC60YDQvtC70LvQsdCw0YDRg1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6INCjIEhUTUwg0LTQvtC00LDRlNC80L4g0LTQviDQsdC70L7QutGDINCw0YLRgNC40LHRg9GCIGRhdGEtc2ltcGxlYmFyXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly9naXRodWIuY29tL0dyc210by9zaW1wbGViYXIvdHJlZS9tYXN0ZXIvcGFja2FnZXMvc2ltcGxlYmFyXHJcbtCh0L3RltC/0L/QtdGCKEhUTUwpOiBcclxuKi9cclxuaW1wb3J0ICcuL2ZpbGVzL3Njcm9sbC9zaW1wbGViYXIuanMnO1xyXG5cclxuLy8g0JvRltC90LjQstC1ICjQstGW0LTQutC70LDQtNC10L3QtSkg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC60LDRgNGC0LjQvdC+0LpcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINC/0L4g0YDQvtCx0L7RgtGWINGDINGI0LDQsdC70L7QvdGWOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtbGVuaXZheWEtcG9kZ3J1emthLWxhenktbG9hZGluZy5odG1sXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly9naXRodWIuY29tL3Zlcmxvay92YW5pbGxhLWxhenlsb2FkXHJcbi8vINCh0L3RltC/0L/QtdGCKEhUTUwpOlxyXG4vLyBpbXBvcnQgJy4vZmlsZXMvc2Nyb2xsL2xhenlsb2FkLmpzJztcclxuXHJcbi8vINCh0L/QvtGB0YLQtdGA0ZbQs9Cw0Ycg0LfQsCDQvtCxJ9GU0LrRgtCw0LzQuCDQtyDQsNGC0YDQuNCx0YPRgtC+0LwgZGF0YS13YXRjaFxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1uYWJsanVkYXRlbC16YS1wb3lhdmxlbmllbS1lbGVtZW50YS1wcmktc2tyb2xsZS5odG1sXHJcbi8vINCh0L3RltC/0L/QtdGCKEhUTUwpOlxyXG5pbXBvcnQgJy4vbGlicy93YXRjaGVyLmpzJ1xyXG5cclxuLy8g0JzQvtC00YPQu9GMINC/0L7QtdC60YDQsNC90L3QvtGXINC/0YDQvtC60YDRg9GC0LrQuFxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1wb2VrcmFubm9qLXByb2tydXRraS1zdHJhbmljeS1mdWxscGFnZS5odG1sXHJcbi8vINCh0L3RltC/0L/QtdGCKEhUTUwpOlxyXG4vLyBpbXBvcnQgJy4vbGlicy9mdWxscGFnZS5qcydcclxuXHJcbi8vINCc0L7QtNGD0LvRjCDQv9Cw0YDQsNC70LDQutGB0YNcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcGFyYWxha3MtcHJpLXNrcm9saS5odG1sXHJcbi8vINCh0L3RltC/0L/QtdGCKEhUTUwpOlxyXG5pbXBvcnQgJy4vbGlicy9wYXJhbGxheC5qcydcclxuXHJcbi8vINCk0YPQvdC60YbRltGXINGA0L7QsdC+0YLQuCDRgdC60YDQvtC70L7QvFxyXG5pbXBvcnQgKiBhcyBmbHNTY3JvbGwgZnJvbSBcIi4vZmlsZXMvc2Nyb2xsL3Njcm9sbC5qc1wiO1xyXG5cclxuLy8g0J/Qu9Cw0LLQvdCwINC90LDQstGW0LPQsNGG0ZbRjyDQv9C+INGB0YLQvtGA0ZbQvdGG0ZZcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtcGxhdm5vai1uYXZpZ2FjaWktcG8tc3RyYW5pY2UuaHRtbFxyXG5mbHNTY3JvbGwucGFnZU5hdmlnYXRpb24oKTtcclxuXHJcbi8vINCk0YPQvdC60YbRltC+0L3QsNC7INC00L7QtNCw0LLQsNC90L3RjyDQutC70LDRgdGW0LIg0LTQviDRhdC10LTQtdGA0YMg0L/RltC0INGH0LDRgSDQv9GA0L7QutGA0YPRh9GD0LLQsNC90L3Rj1xyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1kb2Jhdmxlbml5YS1rbGFzc292LWstc2hhcGtlLXByaS1wcm9rcnV0a2Utc3RyYW5pY3kuaHRtbFxyXG5mbHNTY3JvbGwuaGVhZGVyU2Nyb2xsKCk7XHJcblxyXG4vLyDQpNGD0L3QutGG0ZbQvtC90LDQuyDQu9C40L/QutC+0LPQviDQsdC70L7QutGDXHJcbi8vIGZsc1Njcm9sbC5zdGlja3lCbG9jaygpO1xyXG5cclxuLy8g0JzQvtC00YPQu9GMINCw0L3RltC80LDRhtGW0Y8g0YbQuNGE0YDQvtCy0L7Qs9C+INC70ZbRh9C40LvRjNC90LjQutCwXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLWFuaW1hY2lpLWNpZnJvdm9nby1saWNoaWxuaWthLmh0bWxcclxuLy8g0KHQvdGW0L/Qv9C10YIoSFRNTCk6XHJcbi8vIGZsc1Njcm9sbC5kaWdpdHNDb3VudGVyKCk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQk9Cw0LvQtdGA0LXRjyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6IFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/Qu9Cw0LPRltC90LA6IGh0dHBzOi8vd3d3LmxpZ2h0Z2FsbGVyeWpzLmNvbS9kb2NzL1xyXG7QodC90ZbQv9C/0LXRgihIVE1MKTpcclxuKi9cclxuaW1wb3J0IFwiLi9maWxlcy9nYWxsZXJ5LmpzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQhtC90YjRliDQv9C70LDQs9GW0L3QuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qINCU0LjQvdCw0LzRltGH0L3QuNC5INCw0LTQsNC/0YLQuNCyICovXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL2RpbmFtaWNoZXNraWotYWRhcHRpdi5odG1sXHJcbmltcG9ydCBcIi4vbGlicy9keW5hbWljX2FkYXB0LmpzXCI7XHJcblxyXG4vKiDQpNC+0YDQvNCw0YLRg9Cy0LDQvdC90Y8g0YfQuNGB0LXQuyAqL1xyXG4vLyBpbXBvcnQgJy4vbGlicy93TnVtYi5taW4uanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0IbQvdGI0LUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLyog0J/RltC00LrQu9GO0YfQsNGU0LzQviDRhNCw0LnQu9C4INC30ZYg0YHQstC+0ZfQvCDQutC+0LTQvtC8ICovXHJcbmltcG9ydCBcIi4vZmlsZXMvc2NyaXB0LmpzXCI7XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNzFiZjA3ZTVmMWI4M2YzZDhhMFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==