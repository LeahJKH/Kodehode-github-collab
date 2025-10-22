function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);
updateClock();

// Add this in the html?:
// <div id="clock"></div>
// <script src="clock.js"></script>
