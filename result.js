document.getElementById("result-button").addEventListener("click", function () {
  window.location.href = "index.feedback.html";
});

const resetQuestions = () => {
  const main = document.getElementsByTagName("main");
  main.innerHTML = "";
};
