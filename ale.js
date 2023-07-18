const timer = document.querySelector("header div p:nth-of-type(2)");

const maxTimer = 3;

let secondsRemaining = maxTimer;

timer.innerText = secondsRemaining;

const decreaseTimer = () => {
  if (secondsRemaining) {
    secondsRemaining -= 1;
    timer.innerText = secondsRemaining;
  } else {
    alert("time is up");
    secondsRemaining = maxTimer;
    selectQuestion();
  }
};

let timerIntervalID = setInterval(decreaseTimer, 1000);

const form = document.querySelector("form");

const questionForm = document.querySelector("h1");

let correctAnswers = 0;

let remainingQuestions = questions.length;

let question = null;

const selectQuestion = () => {
  const randIndex = Math.floor(Math.random() * remainingQuestions);
  question = questions[randIndex];
  questions.splice(randIndex, 1);
  console.log(questions);
  const answers = [question.correct_answer, ...question.incorrect_answers];
  const randomizedAnswers = [];
  for (let i = answers.length; i; i--) {
    const randIndex = Math.floor(Math.random() * i - 1);
    const answer = answers.splice(randIndex, 1);
    randomizedAnswers.push(answer[0]);
  }
  questionForm.innerText = question.question;
  form.innerHTML = "";
  for (let i = 0; i < randomizedAnswers.length; i++) {
    const answerFormInput = document.createElement("input");
    answerFormInput.setAttribute("type", "radio");
    answerFormInput.setAttribute("id", `answer${i + 1}`);
    answerFormInput.setAttribute("name", "answer");
    answerFormInput.setAttribute("value", randomizedAnswers[`${i}`]);
    form.appendChild(answerFormInput);

    const answerFormLabel = document.createElement("label");
    answerFormLabel.setAttribute("for", `answer${i + 1}`);
    answerFormLabel.innerText = randomizedAnswers[i];
    form.appendChild(answerFormLabel);
  }
  const btn = document.createElement("input");
  btn.setAttribute("type", "submit");
  btn.setAttribute("value", "PROSSIMA");
  form.appendChild(btn);
};

const nextQuestion = e => {
  e.preventDefault();
  const answerGiven = document.querySelector('input[name="answer"]:checked').value;
  if (question.correct_answer === answerGiven) {
    correctAnswers += 1;
  } // !todo fix
  remainingQuestions--;
  if (remainingQuestions === 0) {
    alert(`${correctAnswers}`);
  }
  selectQuestion();
  clearInterval(timerIntervalID);
  secondsRemaining = maxTimer;
  timerIntervalID = setInterval(decreaseTimer, 1000);
};

form.addEventListener("submit", nextQuestion);

window.onload = selectQuestion();
