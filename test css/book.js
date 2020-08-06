const firstPrevBtn = document.querySelector(".firstPrevBtn");

const firstNextBtn = document.querySelector(".firstNextBtn");

firstNextBtn.addEventListener("click", turnPage);

const firstBook = document.querySelector(".book");

let reset = 1;
let counter = 1;

function turnPage() {
  let animateTurning = setInterval(function () {
    counter++;
    reset++;
    console.log(counter);
    firstBook.style.backgroundImage = `url('test-images/turn-${counter}.jpg')`;

    if (reset === 4) {
      console.log("buns");
      clearInterval(animateTurning);
    }
  }, 250);
  reset = 0;
}
