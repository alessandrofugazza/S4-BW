// CLOCK //

const timer = document.querySelector("header div p:nth-of-type(2)"); //todo use class

const maxTimer = 60;
let secondsRemaining = maxTimer;
timer.innerText = secondsRemaining;
let timerIntervalID = null;
const decreaseTimer = () => {
  if (secondsRemaining) {
    secondsRemaining -= 1;
    timer.innerText = secondsRemaining;
  } else {
    remainingQuestions--; //todo make a function
    if (remainingQuestions === 0) {
      resetQuestions();
    }
    questionNumber++;
    selectQuestion();
    clearInterval(timerIntervalID);
    secondsRemaining = maxTimer;
    timer.innerText = secondsRemaining;
    timerIntervalID = setInterval(decreaseTimer, 1000);
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
    answerFormInput.classList.add("answer");
    answerForm.appendChild(answerFormInput);
    //todo change setattribute
    const answerFormLabel = document.createElement("label");
    answerFormLabel.setAttribute("for", `answer${i + 1}`);
    answerFormLabel.innerText = randomizedAnswers[i];
    answerFormLabel.addEventListener("click", highlightSelectedAnswer);
    answerForm.appendChild(answerFormLabel);
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
  clearInterval(timerIntervalID);
  // check if answer is correct
  const answerGiven = document.querySelector('input[name="answer"]:checked').value;
  if (question.correct_answer === answerGiven) {
    correctAnswers += 1;
    const test = document.getElementById("selectedAnswer");
    test.setAttribute("id", "green");
  } else {
    const test = document.getElementById("selectedAnswer");
    test.setAttribute("id", "red");
  }
  setTimeout(testFunction, 1000);
};

const testFunction = function () {
  questionNumber++;
  remainingQuestions--;
  if (remainingQuestions === 0) {
    // placeholder when there are no more questions
    resetQuestions();
    return;
  }
  // pull another question from the array
  selectQuestion();
  // reset the timer
  // clearInterval(timerIntervalID);
  secondsRemaining = maxTimer;
  timer.innerText = secondsRemaining;
  timerIntervalID = setInterval(decreaseTimer, 1000);
};

answerForm.addEventListener("submit", nextQuestion);

window.onload = () => {
  selectQuestion();
  timerIntervalID = setInterval(decreaseTimer, 1000);
};
