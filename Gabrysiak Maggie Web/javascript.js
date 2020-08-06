const bookTrack = document.querySelector(".imageContainer");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
let counter = 0;
prevBtn.addEventListener("click", function () {
  let position = bookTrack.getBoundingClientRect();
  counter++;
  let positionX = position.left;
  bookTrack.style.transform = `translateX(${counter * 100}%)`;

  console.log(positionX);
});

nextBtn.addEventListener("click", function () {
  let position = bookTrack.getBoundingClientRect();

  counter--;
  let positionX = position.right;
  bookTrack.style.transform = `translateX(${counter * 100}%)`;
  console.log(counter);
  console.log(positionX);
});
