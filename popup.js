let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const timerDisplay = document.getElementById('timer');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            timeLeft = 25 * 60; // reset to 25 minutes after completion
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
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

updateTimerDisplay();