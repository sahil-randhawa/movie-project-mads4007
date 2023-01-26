const showDate = localStorage.getItem('showDate');
const showTime = localStorage.getItem('showTime');

console.log("showdate : " + showDate);
console.log("Show time : " + showTime);

document.querySelector("#showDate-text").innerText = localStorage.getItem('showDate');
document.querySelector("#showTime-text").innerText = localStorage.getItem('showTime');