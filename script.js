var startTime;
var elapsedTime = 0;
var timerInterval;
var lapTimes = [];

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
}

function stop() {
    try {
      clearInterval(timerInterval);
    } catch (error) {
      console.error("Error stopping the timer:", error);
    }
  }
  

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
 
}

function lap() {
  var lapTime = elapsedTime;
  lapTimes.push(lapTime);
  var lapItem = document.createElement("li");
  lapItem.textContent = formatTime(lapTime);
  document.getElementById("lapTimes").appendChild(lapItem);
}
function resetlap() {
    lapTimes = [];
    document.getElementById("lapTimes").innerHTML = "";
}

  function updateDisplay() {
    var seconds = Math.floor(elapsedTime / 1000) % 60;
    var minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    var hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    var timeString =
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);

    document.getElementById("time").textContent = timeString;
  }

  function updateTime() {
    var currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    updateDisplay();
  }
  function formatTime(time) {
    var seconds = Math.floor(time / 1000) % 60;
    var minutes = Math.floor(time / (1000 * 60)) % 60;
    var hours = Math.floor(time / (1000 * 60 * 60));

    var timeString =
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);

    return timeString;
  }
/*var startTime;
var elapsedTime = 0;
var timerInterval;
var lapTimes = [];

// Function to start the stopwatch
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
}

// Function to stop the stopwatch
function stop() {
  clearInterval(timerInterval);
}

// Function to reset the stopwatch
function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}

// Function to record a lap time
function lap() {
  var lapTime = elapsedTime;
  lapTimes.push(lapTime);
  displayLap(lapTime);
}

// Function to reset lap times
function resetlap() {
  lapTimes = [];
  clearLapDisplay();
}

// Function to update the displayed time
function updateDisplay() {
  var timeString = formatTime(elapsedTime);
  document.getElementById("time").textContent = timeString;
}

// Function to update the elapsed time
function updateTime() {
  var currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  updateDisplay();
}

// Function to format time in HH:MM:SS format
function formatTime(time) {
  var seconds = Math.floor(time / 1000) % 60;
  var minutes = Math.floor(time / (1000 * 60)) % 60;
  var hours = Math.floor(time / (1000 * 60 * 60));

  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
}

// Function to display a lap time
function displayLap(lapTime) {
  var lapItem = document.createElement("li");
  lapItem.textContent = formatTime(lapTime);
  document.getElementById("lapTimes").appendChild(lapItem);
}

// Function to clear lap time display
function clearLapDisplay() {
  document.getElementById("lapTimes").innerHTML = "";
}
*/