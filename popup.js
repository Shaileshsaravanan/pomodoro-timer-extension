let timer;
let defaultTime = 25 * 60;
let timeLeft = defaultTime;
let isRunning = false;

const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const timerDisplay = document.getElementById('timer');
const customTimeInput = document.getElementById('custom-time');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    const customTime = parseInt(customTimeInput.value);
    if (!isNaN(customTime) && customTime > 0) {
        timeLeft = customTime * 60;
    } else {
        timeLeft = defaultTime;
    }

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            timeLeft = defaultTime; // reset to default time after completion
            updateTimerDisplay();
            alert("Pomodoro Complete!");
        } else {
            timeLeft--;
            updateTimerDisplay();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = defaultTime;
    updateTimerDisplay();
    customTimeInput.value = ''; // clear custom time input
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateTimerDisplay();