const levelSelector = document.getElementById("timer-select");

let interval = null;
let tick = parseInt(levelSelector.value);

const startElt = document.getElementById("start");
const stopElt = document.getElementById("stop");
const clockElt = document.getElementById("timer");

window.addEventListener("DOMContentLoaded", () => {
  clockElt.innerText = tick;
});

window.addEventListener("keypress", (e) => {
  console.log(e.code);
  if (e.code === "Space") {
    if (interval) {
      clearInterval(interval);
      interval = null;
    } else {
      interval = setInterval(updateTick, 1000);
    }
  }
  if (e.code === "KeyR") {
    clearInterval(interval);
    interval = null;
    tick = parseInt(levelSelector.value);
    if (clockElt) clockElt.innerText = tick;
  }
  if (e.code == "Digit1") {
    levelSelector.value = "15";
    tick = parseInt(levelSelector.value);
    clockElt.innerText = tick;
  }
  if (e.code === "Digit2") {
    levelSelector.value = "10";
    tick = parseInt(levelSelector.value);
    clockElt.innerText = tick;
  }
  if (e.code === "Digit3") {
    levelSelector.value = "5";
    tick = parseInt(levelSelector.value);
    clockElt.innerText = tick;
  }
});

levelSelector.addEventListener("change", (e) => {
  tick = parseInt(e.target.value);
  clockElt.innerText = tick;
});

const updateTick = () => {
  if (tick <= 0) {
    if (tick === 0) {
      const beeperElt = document.getElementById("beep");
      if (beep) beeperElt.play();
    }
    tick = parseInt(levelSelector.value);
  } else {
    tick -= 1;
  }
  if (clockElt) clockElt.innerText = tick;
};

stopElt.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  tick = parseInt(levelSelector.value);
  if (clockElt) clockElt.innerText = tick;
});

startElt.addEventListener("click", () => {
  tick = parseInt(levelSelector.value);
  if (!interval) interval = setInterval(updateTick, 1000);
});
