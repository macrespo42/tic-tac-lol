let interval = null;
let tick = 10;

const startElt = document.getElementById("start");
const stopElt = document.getElementById("stop");
const clockElt = document.getElementById("timer");

window.addEventListener("DOMContentLoaded", () => {
  clockElt.innerText = tick;
});

const updateTick = () => {
  if (tick <= 0) {
    if (tick === 0) {
      const beeperElt = document.getElementById("beep");
      if (beep) beeperElt.play();
    }
    tick = 10;
  } else {
    tick -= 1;
  }
  if (clockElt) clockElt.innerText = tick;
};

stopElt.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  tick = 10;
  if (clockElt) clockElt.innerText = tick;
});

startElt.addEventListener("click", () => {
  tick = 10;
  if (!interval) interval = setInterval(updateTick, 1000);
});
