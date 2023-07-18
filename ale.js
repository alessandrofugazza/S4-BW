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

const form = document.querySelector("form");

const test = () => {
  console.log("asdas");
};

// nextQuestionButton.addEventListener("click", test);

const question = document.querySelector("h1");

const answers = document.querySelectorAll("label");

const [a1, a2, a3, a4] = answers;

console.log(a1.innerText);

const nextQuestion = e => {
  e.preventDefault();
  console.log(document.querySelector('input[name="answer"]:checked').value); // !todo fix
};

form.addEventListener("submit", nextQuestion);
