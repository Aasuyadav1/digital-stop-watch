let hours = 0;
let minutes = 0;
let seconds = 0;
let timeFuc = null;

let displayHours = document.querySelector(".disHour");
let displayMinutes = document.querySelector(".disMinutes");
let displaySeconds = document.querySelector(".disSeconds");
let progressTimer = document.querySelector('.progress-circle');

let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTime);

// Start the time
function startTimer() {
    progressTimer.style.display = 'block';
    if (timeFuc === null) {
        timeFuc = setInterval(() => {
            seconds++;
            progressTimer.style.background = `conic-gradient(rgb(116,8,212) ${seconds*1.67}%,rgb(247,143,253) ${seconds}% 100%)`;
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes >= 60) {
                hours++;
                minutes = 0;
            }

            let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            let formattedHours = hours < 10 ? "0" + hours : hours;

            displayHours.innerHTML = formattedHours;
            displayMinutes.innerHTML = formattedMinutes;
            displaySeconds.innerHTML = formattedSeconds;
        }, 1000);
    }
}

// Stop the time
function stopTimer() {
    clearInterval(timeFuc);
    timeFuc = null;
}

// Restart the time
function resetTime() {
    progressTimer.style.display = 'none';
    progressTimer.style.background = `conic-gradient(rgb(116,8,212) 1%,rgb(247,143,253) 1% 100%)`;
    stopTimer();
    displayHours.innerHTML = "00";
    displayMinutes.innerHTML = "00";
    displaySeconds.innerHTML = "00";
    hours = 0;
    minutes = 0;
    seconds = 0;
}