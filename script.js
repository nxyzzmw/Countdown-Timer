 let timer;
    let timeLeft = 0;

    const timerValue = document.getElementById("timerValue");
    const countdownTimeInput = document.getElementById("countdownTime");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const resetButton = document.getElementById("resetButton");

    startButton.addEventListener("click", startTimer);
    stopButton.addEventListener("click", stopTimer);
    resetButton.addEventListener("click", resetTimer);

    function startTimer() {
      const countdownTime = parseInt(countdownTimeInput.value, 10);
      if (isNaN(countdownTime) || countdownTime <= 0) {
        alert("Please enter a valid countdown time.");
        return;
      }

      timeLeft = countdownTime;
      updateDisplay();
      startButton.disabled = true;
      stopButton.disabled = false;
      resetButton.disabled = false;

      timer = setInterval(function () {
        timeLeft -= 1;
        if (timeLeft <= 0) {
          stopTimer();
        }
        updateDisplay();
      }, 1000);
    }

    function stopTimer() {
      clearInterval(timer);
      startButton.disabled = false;
      stopButton.disabled = true;
    }

    function resetTimer() {
      clearInterval(timer);
      timeLeft = 0;
      updateDisplay();
      startButton.disabled = false;
      stopButton.disabled = true;
      resetButton.disabled = true;
    }

    function updateDisplay() {
      timerValue.textContent = timeLeft;
    }
