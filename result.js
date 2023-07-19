// percentuali = percentuali.toString();

const resetQuestions = () => {
  const main = document.getElementsByTagName("main");
  // alert(`${correctAnswers}`);
  let percentuali = Math.round((correctAnswers / totalQuestions) * 100 * 100) / 100;
  console.log(percentuali);
  main[0].innerHTML = "";
  main[0].innerHTML = `<img src=".\\assets\\img\\epicode_logo.png" class="epicode_logo" />
  <article class="articleresults">
    <h2 class="title">Results</h2>
    <p class="summary">The summary of your answers:</p>
    <div class="inblock correct">
      <h3 class="corwro">Correct</h3>
      <h3 class="corwro percentuali">${percentuali}%</h3>
      <p>${correctAnswers}/${totalQuestions} questions</p>
    </div>
    <div class="inblock circle">
      <h5 class="cong">Congratulations!</h5>
      <h5 class="pass">You passed the exam.</h5>
      <p class="send">
        We'll send you the certificate<br />
        in few minutes
      </p>
      <p class="email">
        Check your email (including<br />
        promotions/spam folder)
      </p>
    </div>
    <div class="inblock wrong">
      <h3 class="corwro">Wrong</h3>
      <h3 class="corwro percentuali">${100 - percentuali}%</h3>
      <p>${totalQuestions - correctAnswers}/${totalQuestions} questions</p>
    </div>
    <button type="button" class="button">RATE US</button>
  </article>`;
  const rateUs = document.getElementsByClassName("button");
  // console.log(rateUs);
  rateUs[0].addEventListener("click", () => {
    window.location.href = "index.feedback.html";
  });
};
