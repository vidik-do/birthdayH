function showMessage() {
    // Find the surprise element
    const surprise = document.getElementById('surprise');
    // Make it visible
    surprise.style.display = 'block';
} // Countdown Timer Logic
function startCountdown() {
  const eventDate = new Date("Dec 9, 2024 00:00:00").getTime(); // Set the target date
  const timerElement = document.getElementById("timer");

  const interval = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      timerElement.innerHTML = "🎉 It's here! 🎉"; // Message after countdown ends
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      timerElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }
  }, 1000);
}

// Call the function when the page loads
startCountdown();

