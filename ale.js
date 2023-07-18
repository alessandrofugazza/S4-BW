const timer = document.querySelector("header div p:nth-of-type(2)");

let secondsRemaining = 5;

timer.innerText = secondsRemaining;

const decreaseTimer = () => {
  // while(secondsRemaining) {}
  secondsRemaining -= 1;
  timer.innerText = secondsRemaining;
  if (secondsRemaining === 0) {
    clearInterval(timerIntervalID);
    // nextQuestion();
    alert("time is up");
  }
};

const timerIntervalID = setInterval(decreaseTimer, 1000);

const form = document.querySelector("form");

const questionForm = document.querySelector("h1");

// const answersForm = document.querySelectorAll("label");

// const [a1, a2, a3, a4] = answersForm;

let correctAnswers = 0;

let remainingQuestions = questions.length;

// const question = questions[0];

let question = null;

const selectQuestion = () => {
  console.log("HERE");
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
};

form.addEventListener("submit", nextQuestion);

window.onload = selectQuestion();
