const stars = document.querySelectorAll(".stars");
// console.log(stars);
// per click
// stars.forEach((stars) => {
//   stars.addEventListener("click", () => {
//     const rating = parseInt(stars.dataset.rating, 10); // ottenereil rating di proprietà "data-rating" della stella cliccata

// Seleziona l'elemento input nascosto dove salvato  rating selezionato
// const ratingInput = document.getElementById("ratingInput");

// Imposta il rating selezionato nell'input nascosto
// ratingInput.value = rating;

// Rimuovere la classe "active" da tutte le stelle
// stars.forEach((s) => s.classList.remove("active"));

// aggiongere la classe "active" per stelle rating selezionato
//     for (let i = 0; i < rating; i++) {
//       stars[i].classList.add("active");
//     }
//   });
// });
let reatingUser = null;
stars.forEach((singleStar, index) => {
  singleStar.addEventListener("click", () => {
    // console.log(index + 1);
    for (let i = 0; i <= index; i++) {}
    reatingUser = index + 1;
    // return index + 1;
    console.log(reatingUser);
    for (let i = index + 1; i < reatingUser; i++) {
      stars[i].classList.add("filter");
    }
  });
});
//"MORE INFO" per catturare il rating e il commento
// const moreInfoButton = document.querySelector(".inputButton");
// const commentInput = document.getElementById("commentInput");

// moreInfoButton.addEventListener("click", () => {
//   const rating = parseInt(document.getElementById("ratingInput").value, 10);
//   const comment = commentInput.value;

//   console.log(`Rating: ${rating}`);
//   console.log(`Commento: ${comment}`);
// });
