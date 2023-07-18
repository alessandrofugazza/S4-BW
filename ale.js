const timer = document.querySelector("header div p:nth-of-type(2)");

let secondsRemaining = 60;

timer.innerText = secondsRemaining;

const decreaseTimer = () => {
  secondsRemaining -= 1;
  timer.innerText = secondsRemaining;
  if (secondsRemaining === 0) {
    clearInterval(timerIntervalID);
  }
};

// const timerIntervalID = setInterval(decreaseTimer, 1000);
