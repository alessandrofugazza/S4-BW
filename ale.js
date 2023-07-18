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

// nextQuestionButton.addEventListener("click", test);

const questionFrom = document.querySelector("h1");

const answersForm = document.querySelectorAll("label");

const [a1, a2, a3, a4] = answersForm;

const nextQuestion = e => {
  e.preventDefault();
  console.log(document.querySelector('input[name="answer"]:checked').value); // !todo fix
  const nextQuestion = selectQuestion();
  const answers = [nextQuestion.correct_answer, ...nextQuestion.incorrect_answers];
  const randomizedAnswers = [];
  for (let i = answers.length; i; i--) {
    const randIndex = Math.floor(Math.random() * i - 1);
    const answer = answers.splice(randIndex, 1);
    randomizedAnswers.push(answer[0]);
  }
  questionFrom.innerText = nextQuestion.question;
  for (let i = 0; i < randomizedAnswers.length; i++) {
    answersForm[i].innerText = randomizedAnswers[i];
  }
};

form.addEventListener("submit", nextQuestion);

let remainingQuestions = questions.length;
console.log(remainingQuestions);

const selectQuestion = () => {
  const nextQuestion = questions[Math.floor(Math.random()) * remainingQuestions];
  console.log(nextQuestion);
  return nextQuestion;
};
