// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

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