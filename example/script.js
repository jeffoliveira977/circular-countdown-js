document.addEventListener('DOMContentLoaded', () => {
    
  const timer = new window.CountdownTimer(".timer-container", {
    duration: 20,
    color: "#ff6347",
    backgroundColor: "#f0f0f0",
    size: 300,
    strokeWidth: 12,
    fontSize: 0.3,
    onComplete: () => {
      console.log("Countdown complete!");
    },
    onTick: (timeLeft) => {
      console.log("Time left:", timeLeft);
    }
  });

  document.getElementById("set-time").addEventListener("click", () => {
    const newTime = parseInt(document.getElementById("time-input").value, 10);

    if (newTime && newTime > 0) {
      timer.settings.duration = newTime;
      timer.reset();
    }
  });

  document.getElementById("pause").addEventListener("click", () => timer.pause());
  document
    .getElementById("resume")
    .addEventListener("click", () => timer.resume());
  document.getElementById("reset").addEventListener("click", () => timer.reset());
});