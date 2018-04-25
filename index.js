var start = false;
var countDownStart = false;
var minutes = "25";
var seconds = "0";

function toogleColor() {
  start = !start;
}

function toogleCountDown() {
  var show_seconds = document.getElementById("seconds");
  show_seconds.innerHTML = "00";
  var show_minutes = document.getElementById("minutes");

  minutes = Number(minutes);
  seconds = Number(seconds);
  if (seconds === 0 && minutes === 0) {
      minutes = 25;
      seconds = 0;
      document.getElementById("alarm").play()
    start = false;
  }
  if (minutes < 10) {
      var minuteShow = minutes.toString();
      show_minutes.innerHTML = "0" + minuteShow;
    } else {
        var minuteShow = minutes.toString();
      show_minutes.innerHTML = minuteShow;
    }

  if (seconds === 0) {
    minutes = minutes - 1;
    var minuteShow = minutes.toString();
    seconds = 59;
    show_seconds.innerHTML = seconds;
    show_minutes.innerHTML = minuteShow;
  }
  if (seconds > 1) {
    seconds = seconds - 1;
    var secondShow = seconds.toString();

    if (seconds < 10) {
      show_seconds.innerHTML = "0" + secondShow;
    } else {
      show_seconds.innerHTML = secondShow;
    }
  }
  if (seconds === 1) {
    seconds = 0;
  }
}

function toogleTimer() {
  var timerContainer = document.getElementById("timer_container");
  start
    ? document.getElementById("alarm").play()
    : document.getElementById("tick-tack").play();
  toogleColor();
  setInterval(toogleCountDown, 1000);
  start
    ? (timerContainer.style.background = "#8e44ad")
    : (timerContainer.style.background = "#2980b9");
}
