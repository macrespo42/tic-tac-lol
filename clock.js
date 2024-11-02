window.addEventListener("DOMContentLoaded", () => {
  let tick = 10;

  clock = document.getElementById("timer");
  if (clock) clock.innerText = tick;

  const updateTick = () => {
    if (tick <= 0) {
      tick = 10;
    } else {
      tick -= 1;
    }
    clock = document.getElementById("timer");
    if (clock) clock.innerText = tick;
  };

  setInterval(updateTick, 1000);
});