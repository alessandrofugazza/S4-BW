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

const questionForm = document.querySelector("h1");

const answersForm = document.querySelectorAll("label");

const [a1, a2, a3, a4] = answersForm;

const correctAnswers = 0;

let remainingQuestions = questions.length;

const question = questions[0];

const selectQuestion = () => {
  const randIndex = Math.floor(Math.random() * remainingQuestions);
  const nextQuestion = questions[randIndex];
  questions.splice(randIndex, 1);
  remainingQuestions--;
  console.log(questions);
  return nextQuestion;
};

const nextQuestion = e => {
  e.preventDefault();
  if (question.correct_answer === 'input[name="answer"]:checked') {
    correctAnswers += 1;
  } // !todo fix
  if (remainingQuestions === 0) {
    alert("done");
  }
  const nextQuestion = selectQuestion();
  const answers = [nextQuestion.correct_answer, ...nextQuestion.incorrect_answers];
  const randomizedAnswers = [];
  for (let i = answers.length; i; i--) {
    const randIndex = Math.floor(Math.random() * i - 1);
    const answer = answers.splice(randIndex, 1);
    randomizedAnswers.push(answer[0]);
  }
  questionForm.innerText = nextQuestion.question;
  for (let i = 0; i < randomizedAnswers.length; i++) {
    answersForm[i].innerText = randomizedAnswers[i];
  }
};

form.addEventListener("submit", nextQuestion);
