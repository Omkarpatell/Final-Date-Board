function updateCurrentDate() {
  const now = new Date();
  const dateElem = document.getElementById('date');
  const dateStr = now.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});
  dateElem.textContent = dateStr;
}
setInterval(updateCurrentDate, 1000);

function updateCurrentWeekday() {
  const now = new Date();
  const weekdayElem = document.getElementById('day');
  const weekdayStr = now.toLocaleDateString('en-US', {weekday: 'long'});
  weekdayElem.textContent = weekdayStr;
}
setInterval(updateCurrentWeekday, 1000);


function Time() {
  const now = new Date();
  let hours = now.getHours();
  
  hours = hours ? hours : 12 ;
  const timeElem = document.getElementById('hours');
  const timeStr = hours;
  timeElem.textContent = timeStr;
}
setInterval(Time, 1000);


function Minute() {
  const now = new Date();
  let minutes = now.getMinutes();
 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const timeElem = document.getElementById('minutes');
  const timeStr = minutes;
  timeElem.textContent = timeStr;
}
setInterval(Minute, 1000);

function Seconds() {
  const now = new Date();
  let seconds = now.getSeconds();
  seconds = seconds < 10 ? '0' + seconds : seconds;
  const timeElem = document.getElementById('seconds');
  const timeStr = seconds;
  timeElem.textContent = timeStr;
}
setInterval(Seconds, 1000);


function DayNight() {
  const now = new Date();
  let ampm = hours >= 12 ? 'AM' : 'PM';
  const timeElem = document.getElementById('session');
  const timeStr =ampm;
  timeElem.textContent = timeStr;
}
setInterval(DayNight, 1000);

