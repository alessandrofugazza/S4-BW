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

const questionForm = document.querySelector("h1");

const answersForm = document.querySelectorAll("label");

const [a1, a2, a3, a4] = answersForm;

const correctAnswers = 0;

let remainingQuestions = questions.length;

// const question = questions[0];

let question = null;

const selectQuestion = () => {
  console.log("HERE");
  const randIndex = Math.floor(Math.random() * remainingQuestions);
  question = questions[randIndex];
  questions.splice(randIndex, 1);
  console.log(questions);
  //   return question;
  const answers = [question.correct_answer, ...question.incorrect_answers];
  const randomizedAnswers = [];
  for (let i = answers.length; i; i--) {
    const randIndex = Math.floor(Math.random() * i - 1);
    const answer = answers.splice(randIndex, 1);
    randomizedAnswers.push(answer[0]);
  }
  questionForm.innerText = question.question;
  for (let i = 0; i < randomizedAnswers.length; i++) {
    answersForm[i].innerText = randomizedAnswers[i];
  }
};

const nextQuestion = e => {
  e.preventDefault();
  if (question.correct_answer === 'input[name="answer"]:checked') {
    correctAnswers += 1;
  } // !todo fix
  remainingQuestions--;
  if (remainingQuestions === 0) {
    alert("done");
  }
  selectQuestion();
};

form.addEventListener("submit", nextQuestion);

window.onload = selectQuestion();
