console.log(questions[0].correct_answer);

const timer = document.querySelector("header div p:nth-of-type(2)");

const maxTimer = 9999;

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

// let timerIntervalID = setInterval(decreaseTimer, 1000);

const form = document.querySelector("form");

const questionForm = document.querySelector("h2");

let correctAnswers = 0;

let remainingQuestions = questions.length;

let question = null;

const selectQuestion = () => {
  // pull a random question from an array of questions
  const randIndex = Math.floor(Math.random() * remainingQuestions);
  question = questions[randIndex];
  questions.splice(randIndex, 1);
  // randomize the answers' order
  const answers = [question.correct_answer, ...question.incorrect_answers];
  const randomizedAnswers = [];
  for (let i = answers.length; i; i--) {
    const randIndex = Math.floor(Math.random() * i - 1);
    const answer = answers.splice(randIndex, 1);
    randomizedAnswers.push(answer[0]);
  }
  questionForm.innerText = question.question;
  //replace question and answers with the newly selected question
  form.innerHTML = "";
  for (let i = 0; i < randomizedAnswers.length; i++) {
    const answerFormInput = document.createElement("input");
    answerFormInput.setAttribute("type", "radio");
    answerFormInput.setAttribute("id", `answer${i + 1}`);
    answerFormInput.setAttribute("name", "answer");
    answerFormInput.setAttribute("value", randomizedAnswers[`${i}`]);
    form.appendChild(answerFormInput);
    //todo change setattribute
    const answerFormLabel = document.createElement("label");
    answerFormLabel.setAttribute("for", `answer${i + 1}`);
    answerFormLabel.innerText = randomizedAnswers[i];
    form.appendChild(answerFormLabel);
    // answerFormLabel.addEventListener("click", answerFormInput.classList.add("selectedAnswer"));
    answerFormLabel.addEventListener("click", test);
  }
  const btn = document.createElement("input");
  btn.setAttribute("type", "submit");
  btn.setAttribute("value", "PROSSIMA");
  form.appendChild(btn);
};

const test = e => {
  // e.target.classList.add("selectedAnswer");
  const prevAnswer = document.getElementById("selectedAnswer");
  if (prevAnswer) {
    prevAnswer.removeAttribute("id");
  } //!todo remove if
  e.target.setAttribute("id", "selectedAnswer");
  //   console.log(e);
};

// const selectedAnswer = document.querySelector('input[name="answer"]:checked');
// selectedAnswer.classList.add("selectedAnswer");

const nextQuestion = e => {
  e.preventDefault();
  // check if answer is correct
  const answerGiven = document.querySelector('input[name="answer"]:checked').value;
  //   selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
  if (question.correct_answer === answerGiven) {
    correctAnswers += 1;
  }
  remainingQuestions--;
  if (remainingQuestions === 0) {
    // placeholder when there are no more questions
    alert(`${correctAnswers}`);
  }
  // pull another question from the array
  selectQuestion();
  // reset the timer
  clearInterval(timerIntervalID);
  secondsRemaining = maxTimer;
  timerIntervalID = setInterval(decreaseTimer, 1000);
};

form.addEventListener("submit", nextQuestion);

// window.onload = selectQuestion();

let timerIntervalID = null;

window.onload = () => {
  selectQuestion();
  timerIntervalID = setInterval(decreaseTimer, 1000);
};

//todo question number
