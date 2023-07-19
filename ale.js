// CLOCK //

const timer = document.querySelector("header div p:nth-of-type(2)"); //todo use class

const maxTimer = 999999;
let secondsRemaining = maxTimer;
timer.innerText = secondsRemaining;

const decreaseTimer = () => {
  if (secondsRemaining) {
    secondsRemaining -= 1;
    timer.innerText = secondsRemaining;
  } else {
    alert("time is up"); //todo remove and prevent answerForm change instead
    secondsRemaining = maxTimer;
    selectQuestion();
  }
};

// ANSWER FORM //

const answerForm = document.querySelector("form");
const formQuestion = document.querySelector("h2");
let correctAnswers = 0;
const totalQuestions = questions.length;
let remainingQuestions = totalQuestions;
let question = null;
let questionNumber = 1;

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
  formQuestion.innerText = question.question;
  //replace question and answers with the newly selected question
  answerForm.innerHTML = "";
  for (let i = 0; i < randomizedAnswers.length; i++) {
    const answerFormInput = document.createElement("input");
    answerFormInput.setAttribute("type", "radio");
    answerFormInput.setAttribute("id", `answer${i + 1}`);
    answerFormInput.setAttribute("name", "answer");
    answerFormInput.setAttribute("value", randomizedAnswers[`${i}`]);
    answerForm.appendChild(answerFormInput);
    //todo change setattribute
    const answerFormLabel = document.createElement("label");
    answerFormLabel.setAttribute("for", `answer${i + 1}`);
    answerFormLabel.innerText = randomizedAnswers[i];
    answerFormLabel.addEventListener("click", highlightSelectedAnswer);
    answerForm.appendChild(answerFormLabel);
    // answerFormLabel.addEventListener("click", answerFormInput.classList.add("selectedAnswer"));
  }
  const formBr = document.createElement("br");
  answerForm.appendChild(formBr);
  const formQuestionNumber = document.createElement("p");
  formQuestionNumber.classList.add("numberOfQuestions");
  formQuestionNumber.innerHTML = `QUESTION ${questionNumber} <span>/ ${totalQuestions}</span>`;
  answerForm.appendChild(formQuestionNumber);
  const btn = document.createElement("input");
  btn.setAttribute("type", "submit");
  btn.setAttribute("value", "PROSSIMA"); //todo add right arrow
  btn.classList.add("submit");
  answerForm.appendChild(btn);
};

const highlightSelectedAnswer = e => {
  const prevAnswer = document.getElementById("selectedAnswer");
  //todo remove the if somehow
  if (prevAnswer) {
    prevAnswer.removeAttribute("id");
  }
  e.target.setAttribute("id", "selectedAnswer"); //todo use another method
};

const nextQuestion = e => {
  e.preventDefault();
  // check if answer is correct
  const answerGiven = document.querySelector('input[name="answer"]:checked').value;
  //   selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
  if (question.correct_answer === answerGiven) {
    correctAnswers += 1;
  }
  remainingQuestions--;
  questionNumber++;
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

answerForm.addEventListener("submit", nextQuestion);

// let timerIntervalID = null;

window.onload = () => {
  selectQuestion();
  timerIntervalID = setInterval(decreaseTimer, 1000);
};

//todo question number
