'use strict';

const week = ['日', '月', '火', '水', '木', '金', '土'];
// object = {name(key): value}
const today = new Date();
let showDate = new Date(today.getFullYear(), today.getMonth(), 1);

// first condition
window.onload = function() {
  showProcess(today, calendar);
}

//previous month
function prev() {
  showDate.setMonth(showDate.getMonth() -1);
  showProcess(showDate);
}

//next month 
function next() {
  showDate.setMonth(showDate.getMonth() +1);
  showProcess(showDate);
}



