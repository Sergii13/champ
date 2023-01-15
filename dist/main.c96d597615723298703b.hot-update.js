"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/script.js":
/*!********************************!*\
  !*** ./src/js/files/script.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules.js */ "./src/js/files/modules.js");
// Підключення функціоналу "Чертоги Фрілансера"

// Підключення списку активних модулів


window.addEventListener('load', () => {
   const mq = window.matchMedia("(max-width: 768px)");

   if (!mq.matches) {
      const searchButton = document.querySelector('[data-search-button]');
      document.addEventListener('click', (e) => {
         const target = null;
         if (e.target.closest('[data-search-button]')) {
            e.preventDefault();
            searchButton.closest('[data-search]').classList.add('active')
         }
         else if (!e.target.closest('[data-search]') && document.querySelector('[data-search].active')) {
            document.querySelector('[data-search].active').classList.remove('active');
         }
      })
   }

})

class CountdownTimer {
   constructor(deadline, cbChange, cbComplete) {
      this._deadline = deadline;
      this._cbChange = cbChange;
      this._cbComplete = cbComplete;
      this._timerId = null;
      this._out = {
         days: '', hours: '', minutes: '', seconds: '',
         daysTitle: '', hoursTitle: '', minutesTitle: '', secondsTitle: ''
      };
      this._start();
   }
   static declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
   }
   _start() {
      this._calc();
      this._timerId = setInterval(this._calc.bind(this), 1000);
   }
   _calc() {
      const diff = this._deadline - new Date();
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      this._out.days = days < 10 ? '0' + days : days;
      this._out.hours = hours < 10 ? '0' + hours : hours;
      this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
      this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
      this._out.daysTitle = CountdownTimer.declensionNum(days, ['день', 'дня', 'дней']);
      this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['час', 'часа', 'часов']);
      this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['минута', 'минуты', 'минут']);
      this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
      this._cbChange ? this._cbChange(this._out) : null;
      if (diff <= 0) {
         clearInterval(this._timerId);
         this._cbComplete ? this._cbComplete() : null;
      }
   }
}

document.addEventListener('DOMContentLoaded', () => {

   var date = new Date();
   date.setDate(date.getDate() + 103);
   const deadline2 = date;
   const allTimer = document.querySelectorAll('[data-time]')
   if (allTimer) {
      allTimer.forEach(element => {
         let timerDay = element.querySelector('[data-days]');
         let timerHour = element.querySelector('[data-hours]');
         let timerMinutes = element.querySelector('[data-minutes]');
         let timerSeconds = element.querySelector('[data-seconds]');
         if (timerDay && timerHour && timerMinutes && timerSeconds) {
            new CountdownTimer(deadline2, (timer) => {
               timerDay.textContent = timer.days;
               timerHour.textContent = timer.hours;
               timerMinutes.textContent = timer.minutes;
               timerSeconds.textContent = timer.seconds;
            }, () => {
               alert('finish timer');
            });
         }
      });
   }


});
const updateList = (arr, index, count, bodyEl) => {
   bodyEl.innerHTML = '';
   for (let i = index; i < index + count; i++) {
      if (arr[i]) {
         bodyEl.appendChild(arr[i]);
      }
   }

}

const allDrawsColumn = document.querySelectorAll('.draws__column');
const allButtons = document.querySelectorAll('.draws__nav-button'
);
const bodyColumn = document.querySelector('.draws__row');

let countToVisible = 3;
let indexButton = 0;

const breakpointTablet = window.matchMedia('(max-width:1150px)');
console.log(breakpointTablet)
if (breakpointTablet == true) {

   countToVisible = 2;
}

if (allButtons.length > 0) {
   updateList(allDrawsColumn, indexButton, countToVisible, bodyColumn);
   allButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
         (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.removeClasses)(allButtons, 'active')
         button.classList.add('active');
         indexButton = index;
         updateList(allDrawsColumn, indexButton, countToVisible, bodyColumn);
      })
   });
}
if (allDrawsColumn.length > 0) {

}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("be8f815ec8e76a8351cb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jOTZkNTk3NjE1NzIzMjk4NzAzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3lEO0FBQ3pEO0FBQzBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNERBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDbElBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YTRg9C90LrRhtGW0L7QvdCw0LvRgyBcItCn0LXRgNGC0L7Qs9C4INCk0YDRltC70LDQvdGB0LXRgNCwXCJcclxuaW1wb3J0IHsgaXNNb2JpbGUsIHJlbW92ZUNsYXNzZXMgfSBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcclxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdC/0LjRgdC60YMg0LDQutGC0LjQstC90LjRhSDQvNC+0LTRg9C70ZbQslxyXG5pbXBvcnQgeyBmbHNNb2R1bGVzIH0gZnJvbSBcIi4vbW9kdWxlcy5qc1wiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjhweClcIik7XHJcblxyXG4gICBpZiAoIW1xLm1hdGNoZXMpIHtcclxuICAgICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VhcmNoLWJ1dHRvbl0nKTtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICBjb25zdCB0YXJnZXQgPSBudWxsO1xyXG4gICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtc2VhcmNoLWJ1dHRvbl0nKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNlYXJjaEJ1dHRvbi5jbG9zZXN0KCdbZGF0YS1zZWFyY2hdJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmICghZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtc2VhcmNoXScpICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlYXJjaF0uYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VhcmNoXS5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICB9XHJcblxyXG59KVxyXG5cclxuY2xhc3MgQ291bnRkb3duVGltZXIge1xyXG4gICBjb25zdHJ1Y3RvcihkZWFkbGluZSwgY2JDaGFuZ2UsIGNiQ29tcGxldGUpIHtcclxuICAgICAgdGhpcy5fZGVhZGxpbmUgPSBkZWFkbGluZTtcclxuICAgICAgdGhpcy5fY2JDaGFuZ2UgPSBjYkNoYW5nZTtcclxuICAgICAgdGhpcy5fY2JDb21wbGV0ZSA9IGNiQ29tcGxldGU7XHJcbiAgICAgIHRoaXMuX3RpbWVySWQgPSBudWxsO1xyXG4gICAgICB0aGlzLl9vdXQgPSB7XHJcbiAgICAgICAgIGRheXM6ICcnLCBob3VyczogJycsIG1pbnV0ZXM6ICcnLCBzZWNvbmRzOiAnJyxcclxuICAgICAgICAgZGF5c1RpdGxlOiAnJywgaG91cnNUaXRsZTogJycsIG1pbnV0ZXNUaXRsZTogJycsIHNlY29uZHNUaXRsZTogJydcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc3RhcnQoKTtcclxuICAgfVxyXG4gICBzdGF0aWMgZGVjbGVuc2lvbk51bShudW0sIHdvcmRzKSB7XHJcbiAgICAgIHJldHVybiB3b3Jkc1sobnVtICUgMTAwID4gNCAmJiBudW0gJSAxMDAgPCAyMCkgPyAyIDogWzIsIDAsIDEsIDEsIDEsIDJdWyhudW0gJSAxMCA8IDUpID8gbnVtICUgMTAgOiA1XV07XHJcbiAgIH1cclxuICAgX3N0YXJ0KCkge1xyXG4gICAgICB0aGlzLl9jYWxjKCk7XHJcbiAgICAgIHRoaXMuX3RpbWVySWQgPSBzZXRJbnRlcnZhbCh0aGlzLl9jYWxjLmJpbmQodGhpcyksIDEwMDApO1xyXG4gICB9XHJcbiAgIF9jYWxjKCkge1xyXG4gICAgICBjb25zdCBkaWZmID0gdGhpcy5fZGVhZGxpbmUgLSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBkYXlzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYgLyAxMDAwIC8gNjAgLyA2MCAvIDI0KSA6IDA7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYgLyAxMDAwIC8gNjAgLyA2MCkgJSAyNCA6IDA7XHJcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkaWZmID4gMCA/IE1hdGguZmxvb3IoZGlmZiAvIDEwMDAgLyA2MCkgJSA2MCA6IDA7XHJcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBkaWZmID4gMCA/IE1hdGguZmxvb3IoZGlmZiAvIDEwMDApICUgNjAgOiAwO1xyXG4gICAgICB0aGlzLl9vdXQuZGF5cyA9IGRheXMgPCAxMCA/ICcwJyArIGRheXMgOiBkYXlzO1xyXG4gICAgICB0aGlzLl9vdXQuaG91cnMgPSBob3VycyA8IDEwID8gJzAnICsgaG91cnMgOiBob3VycztcclxuICAgICAgdGhpcy5fb3V0Lm1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyAnMCcgKyBtaW51dGVzIDogbWludXRlcztcclxuICAgICAgdGhpcy5fb3V0LnNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyAnMCcgKyBzZWNvbmRzIDogc2Vjb25kcztcclxuICAgICAgdGhpcy5fb3V0LmRheXNUaXRsZSA9IENvdW50ZG93blRpbWVyLmRlY2xlbnNpb25OdW0oZGF5cywgWyfQtNC10L3RjCcsICfQtNC90Y8nLCAn0LTQvdC10LknXSk7XHJcbiAgICAgIHRoaXMuX291dC5ob3Vyc1RpdGxlID0gQ291bnRkb3duVGltZXIuZGVjbGVuc2lvbk51bShob3VycywgWyfRh9Cw0YEnLCAn0YfQsNGB0LAnLCAn0YfQsNGB0L7QsiddKTtcclxuICAgICAgdGhpcy5fb3V0Lm1pbnV0ZXNUaXRsZSA9IENvdW50ZG93blRpbWVyLmRlY2xlbnNpb25OdW0obWludXRlcywgWyfQvNC40L3Rg9GC0LAnLCAn0LzQuNC90YPRgtGLJywgJ9C80LjQvdGD0YInXSk7XHJcbiAgICAgIHRoaXMuX291dC5zZWNvbmRzVGl0bGUgPSBDb3VudGRvd25UaW1lci5kZWNsZW5zaW9uTnVtKHNlY29uZHMsIFsn0YHQtdC60YPQvdC00LAnLCAn0YHQtdC60YPQvdC00YsnLCAn0YHQtdC60YPQvdC0J10pO1xyXG4gICAgICB0aGlzLl9jYkNoYW5nZSA/IHRoaXMuX2NiQ2hhbmdlKHRoaXMuX291dCkgOiBudWxsO1xyXG4gICAgICBpZiAoZGlmZiA8PSAwKSB7XHJcbiAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXJJZCk7XHJcbiAgICAgICAgIHRoaXMuX2NiQ29tcGxldGUgPyB0aGlzLl9jYkNvbXBsZXRlKCkgOiBudWxsO1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMTAzKTtcclxuICAgY29uc3QgZGVhZGxpbmUyID0gZGF0ZTtcclxuICAgY29uc3QgYWxsVGltZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10aW1lXScpXHJcbiAgIGlmIChhbGxUaW1lcikge1xyXG4gICAgICBhbGxUaW1lci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICBsZXQgdGltZXJEYXkgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRheXNdJyk7XHJcbiAgICAgICAgIGxldCB0aW1lckhvdXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWhvdXJzXScpO1xyXG4gICAgICAgICBsZXQgdGltZXJNaW51dGVzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1taW51dGVzXScpO1xyXG4gICAgICAgICBsZXQgdGltZXJTZWNvbmRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWNvbmRzXScpO1xyXG4gICAgICAgICBpZiAodGltZXJEYXkgJiYgdGltZXJIb3VyICYmIHRpbWVyTWludXRlcyAmJiB0aW1lclNlY29uZHMpIHtcclxuICAgICAgICAgICAgbmV3IENvdW50ZG93blRpbWVyKGRlYWRsaW5lMiwgKHRpbWVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgIHRpbWVyRGF5LnRleHRDb250ZW50ID0gdGltZXIuZGF5cztcclxuICAgICAgICAgICAgICAgdGltZXJIb3VyLnRleHRDb250ZW50ID0gdGltZXIuaG91cnM7XHJcbiAgICAgICAgICAgICAgIHRpbWVyTWludXRlcy50ZXh0Q29udGVudCA9IHRpbWVyLm1pbnV0ZXM7XHJcbiAgICAgICAgICAgICAgIHRpbWVyU2Vjb25kcy50ZXh0Q29udGVudCA9IHRpbWVyLnNlY29uZHM7XHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgYWxlcnQoJ2ZpbmlzaCB0aW1lcicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuXHJcbn0pO1xyXG5jb25zdCB1cGRhdGVMaXN0ID0gKGFyciwgaW5kZXgsIGNvdW50LCBib2R5RWwpID0+IHtcclxuICAgYm9keUVsLmlubmVySFRNTCA9ICcnO1xyXG4gICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBpbmRleCArIGNvdW50OyBpKyspIHtcclxuICAgICAgaWYgKGFycltpXSkge1xyXG4gICAgICAgICBib2R5RWwuYXBwZW5kQ2hpbGQoYXJyW2ldKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBhbGxEcmF3c0NvbHVtbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmF3c19fY29sdW1uJyk7XHJcbmNvbnN0IGFsbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhd3NfX25hdi1idXR0b24nXHJcbik7XHJcbmNvbnN0IGJvZHlDb2x1bW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhd3NfX3JvdycpO1xyXG5cclxubGV0IGNvdW50VG9WaXNpYmxlID0gMztcclxubGV0IGluZGV4QnV0dG9uID0gMDtcclxuXHJcbmNvbnN0IGJyZWFrcG9pbnRUYWJsZXQgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDoxMTUwcHgpJyk7XHJcbmNvbnNvbGUubG9nKGJyZWFrcG9pbnRUYWJsZXQpXHJcbmlmIChicmVha3BvaW50VGFibGV0ID09IHRydWUpIHtcclxuXHJcbiAgIGNvdW50VG9WaXNpYmxlID0gMjtcclxufVxyXG5cclxuaWYgKGFsbEJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICB1cGRhdGVMaXN0KGFsbERyYXdzQ29sdW1uLCBpbmRleEJ1dHRvbiwgY291bnRUb1Zpc2libGUsIGJvZHlDb2x1bW4pO1xyXG4gICBhbGxCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICByZW1vdmVDbGFzc2VzKGFsbEJ1dHRvbnMsICdhY3RpdmUnKVxyXG4gICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgIGluZGV4QnV0dG9uID0gaW5kZXg7XHJcbiAgICAgICAgIHVwZGF0ZUxpc3QoYWxsRHJhd3NDb2x1bW4sIGluZGV4QnV0dG9uLCBjb3VudFRvVmlzaWJsZSwgYm9keUNvbHVtbik7XHJcbiAgICAgIH0pXHJcbiAgIH0pO1xyXG59XHJcbmlmIChhbGxEcmF3c0NvbHVtbi5sZW5ndGggPiAwKSB7XHJcblxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJlOGY4MTVlYzhlNzZhODM1MWNiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9