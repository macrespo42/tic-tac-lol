const tickSelector = document.getElementById("timer-select");

let interval = null;
let tick = parseInt(tickSelector.value);

const startElt = document.getElementById("start");
const stopElt = document.getElementById("stop");
const clockElt = document.getElementById("timer");

window.addEventListener("DOMContentLoaded", () => {
  clockElt.innerText = tick;
});

tickSelector.addEventListener("onChange", (e) => {
  tick = parseInt(e.target.value);
  clockElt.innerText = tick;
});

const updateTick = () => {
  if (tick <= 0) {
    if (tick === 0) {
      const beeperElt = document.getElementById("beep");
      if (beep) beeperElt.play();
    }
    tick = parseInt(tickSelector.value);
  } else {
    tick -= 1;
  }
  if (clockElt) clockElt.innerText = tick;
};

stopElt.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  tick = parseInt(tickSelector.value);
  if (clockElt) clockElt.innerText = tick;
});

startElt.addEventListener("click", () => {
  tick = parseInt(tickSelector.value);
  if (!interval) interval = setInterval(updateTick, 1000);
});
