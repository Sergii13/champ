"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/gallery.js":
/*!*********************************!*\
  !*** ./src/js/files/gallery.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.js */ "./src/js/files/modules.js");
/* harmony import */ var lightgallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/lightgallery.es5.js");
/* harmony import */ var _scss_libs_gallery_lightgallery_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scss/libs/gallery/lightgallery.scss */ "./src/scss/libs/gallery/lightgallery.scss");
/*
Документація по роботі у шаблоні: https://www.lightgalleryjs.com/docs/
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/

// Підключення функціоналу "Чертоги Фрілансера"

// Підключення списку активних модулів


// Підключення базового набору функціоналу


// Плагіни
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min.js'
//import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min.js'

// Базові стилі

// Стилі доповнень
// import '@scss/libs/gallery/lg-thumbnail.scss';
// import '@scss/libs/gallery/lg-video.scss';
// import '@scss/libs/gallery/lg-autoplay.scss';
// import '@scss/libs/gallery/lg-zoom.scss';
// import '@scss/libs/gallery/lg-pager.scss';
// import '@scss/libs/gallery/lg-fullscreen.scss';
// import '@scss/libs/gallery/lg-share.scss';
// import '@scss/libs/gallery/lg-comments.scss';s
// import '@scss/libs/gallery/lg-rotate.scss';
// import '@scss/libs/gallery/lg-medium-zoom.scss';
// import '@scss/libs/gallery/lg-relative-caption.scss';

// Усі стилі
// import '@scss/libs/gallery/lightgallery-bundle.scss';

// Запуск
const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
  let galleyItems = [];
  galleries.forEach((gallery) => {
    galleyItems.push({
      gallery,
      galleryClass: (0,lightgallery__WEBPACK_IMPORTED_MODULE_2__["default"])(gallery, {
        // plugins: [lgZoom, lgThumbnail],
        licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
        speed: 500,
        selector: 'a',
      }),
    });
  });
  // Додаємо в об'єкт модулів
  _modules_js__WEBPACK_IMPORTED_MODULE_1__.flsModules.gallery = galleyItems;
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6f9a1c2a285de1b4bd3a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMDU5YmQzNGNiZDYzYWE4NWI1OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0M7QUFDL0M7QUFDMEM7QUFDMUM7QUFDQTtBQUN3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEVBQUUsMkRBQWtCO0FBQ3BCOzs7Ozs7Ozs7VUN0REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C+INGA0L7QsdC+0YLRliDRgyDRiNCw0LHQu9C+0L3RljogaHR0cHM6Ly93d3cubGlnaHRnYWxsZXJ5anMuY29tL2RvY3MvXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly93d3cubGlnaHRnYWxsZXJ5anMuY29tL2RvY3MvXHJcbtCh0L3RltC/0L/QtdGCKEhUTUwpOlxyXG4qL1xyXG5cclxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRhNGD0L3QutGG0ZbQvtC90LDQu9GDIFwi0KfQtdGA0YLQvtCz0Lgg0KTRgNGW0LvQsNC90YHQtdGA0LBcIlxyXG5pbXBvcnQgeyBpc01vYmlsZSwgRkxTIH0gZnJvbSAnLi9mdW5jdGlvbnMuanMnO1xyXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0L/QuNGB0LrRgyDQsNC60YLQuNCy0L3QuNGFINC80L7QtNGD0LvRltCyXHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tICcuL21vZHVsZXMuanMnO1xyXG5cclxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQsdCw0LfQvtCy0L7Qs9C+INC90LDQsdC+0YDRgyDRhNGD0L3QutGG0ZbQvtC90LDQu9GDXHJcbmltcG9ydCBsaWdodEdhbGxlcnkgZnJvbSAnbGlnaHRnYWxsZXJ5JztcclxuXHJcbi8vINCf0LvQsNCz0ZbQvdC4XHJcbi8vIGxnWm9vbSwgbGdBdXRvcGxheSwgbGdDb21tZW50LCBsZ0Z1bGxzY3JlZW4sIGxnSGFzaCwgbGdQYWdlciwgbGdSb3RhdGUsIGxnU2hhcmUsIGxnVGh1bWJuYWlsLCBsZ1ZpZGVvLCBsZ01lZGl1bVpvb21cclxuLy8gaW1wb3J0IGxnVGh1bWJuYWlsIGZyb20gJ2xpZ2h0Z2FsbGVyeS9wbHVnaW5zL3RodW1ibmFpbC9sZy10aHVtYm5haWwubWluLmpzJ1xyXG4vL2ltcG9ydCBsZ1pvb20gZnJvbSAnbGlnaHRnYWxsZXJ5L3BsdWdpbnMvem9vbS9sZy16b29tLm1pbi5qcydcclxuXHJcbi8vINCR0LDQt9C+0LLRliDRgdGC0LjQu9GWXHJcbmltcG9ydCAnQHNjc3MvbGlicy9nYWxsZXJ5L2xpZ2h0Z2FsbGVyeS5zY3NzJztcclxuLy8g0KHRgtC40LvRliDQtNC+0L/QvtCy0L3QtdC90YxcclxuLy8gaW1wb3J0ICdAc2Nzcy9saWJzL2dhbGxlcnkvbGctdGh1bWJuYWlsLnNjc3MnO1xyXG4vLyBpbXBvcnQgJ0BzY3NzL2xpYnMvZ2FsbGVyeS9sZy12aWRlby5zY3NzJztcclxuLy8gaW1wb3J0ICdAc2Nzcy9saWJzL2dhbGxlcnkvbGctYXV0b3BsYXkuc2Nzcyc7XHJcbi8vIGltcG9ydCAnQHNjc3MvbGlicy9nYWxsZXJ5L2xnLXpvb20uc2Nzcyc7XHJcbi8vIGltcG9ydCAnQHNjc3MvbGlicy9nYWxsZXJ5L2xnLXBhZ2VyLnNjc3MnO1xyXG4vLyBpbXBvcnQgJ0BzY3NzL2xpYnMvZ2FsbGVyeS9sZy1mdWxsc2NyZWVuLnNjc3MnO1xyXG4vLyBpbXBvcnQgJ0BzY3NzL2xpYnMvZ2FsbGVyeS9sZy1zaGFyZS5zY3NzJztcclxuLy8gaW1wb3J0ICdAc2Nzcy9saWJzL2dhbGxlcnkvbGctY29tbWVudHMuc2Nzcyc7c1xyXG4vLyBpbXBvcnQgJ0BzY3NzL2xpYnMvZ2FsbGVyeS9sZy1yb3RhdGUuc2Nzcyc7XHJcbi8vIGltcG9ydCAnQHNjc3MvbGlicy9nYWxsZXJ5L2xnLW1lZGl1bS16b29tLnNjc3MnO1xyXG4vLyBpbXBvcnQgJ0BzY3NzL2xpYnMvZ2FsbGVyeS9sZy1yZWxhdGl2ZS1jYXB0aW9uLnNjc3MnO1xyXG5cclxuLy8g0KPRgdGWINGB0YLQuNC70ZZcclxuLy8gaW1wb3J0ICdAc2Nzcy9saWJzL2dhbGxlcnkvbGlnaHRnYWxsZXJ5LWJ1bmRsZS5zY3NzJztcclxuXHJcbi8vINCX0LDQv9GD0YHQulxyXG5jb25zdCBnYWxsZXJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1nYWxsZXJ5XScpO1xyXG5pZiAoZ2FsbGVyaWVzLmxlbmd0aCkge1xyXG4gIGxldCBnYWxsZXlJdGVtcyA9IFtdO1xyXG4gIGdhbGxlcmllcy5mb3JFYWNoKChnYWxsZXJ5KSA9PiB7XHJcbiAgICBnYWxsZXlJdGVtcy5wdXNoKHtcclxuICAgICAgZ2FsbGVyeSxcclxuICAgICAgZ2FsbGVyeUNsYXNzOiBsaWdodEdhbGxlcnkoZ2FsbGVyeSwge1xyXG4gICAgICAgIC8vIHBsdWdpbnM6IFtsZ1pvb20sIGxnVGh1bWJuYWlsXSxcclxuICAgICAgICBsaWNlbnNlS2V5OiAnN0VDNDUyQTktMENGRDQ0MUMtQkQ5ODRDN0MtMTdDODQ1NkUnLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgc2VsZWN0b3I6ICdhJyxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICB9KTtcclxuICAvLyDQlNC+0LTQsNGU0LzQviDQsiDQvtCxJ9GU0LrRgiDQvNC+0LTRg9C70ZbQslxyXG4gIGZsc01vZHVsZXMuZ2FsbGVyeSA9IGdhbGxleUl0ZW1zO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZmOWExYzJhMjg1ZGUxYjRiZDNhXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9