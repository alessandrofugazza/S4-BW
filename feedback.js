const stars = document.querySelectorAll(".stars");

let ratingUser = null;
stars.forEach((singleStar, index) => {
  singleStar.addEventListener("click", () => {
    if (ratingUser) {
      for (let i = index + 1; i < ratingUser; i++) {
        stars[i].classList.add("filter");
      }
    }
    for (let i = 0; i <= index; i++) {
      stars[i].classList.remove("filter");
    }
    ratingUser = index + 1;
  });
});

// "MORE INFO" per catturare il rating e il commento
const moreInfoButton = document.querySelector(".inputButton");
const commentInput = document.querySelector(".inputText");

moreInfoButton.addEventListener("click", () => {
  const comment = commentInput.value;

  console.log(`Rating: ${ratingUser}`);
  console.log(`Commento: ${comment}`);
});
