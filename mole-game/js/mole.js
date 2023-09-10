let totalScore = 0;
const allHoles = document.querySelectorAll(".hole");
const score = document.querySelector(".score");
const sound = new Audio("./images/assets_smash.mp3");
const winImage = document.querySelector(".win");
const secHoles = document.querySelector(".feed-holes");
const body = document.querySelector("body");

function run() {
  let timer = null;
  let timer1 = null;
  const i = Math.floor(Math.random() * allHoles.length);

  const currentHole = allHoles[i];
  const img = document.createElement("img");
  img.src = "./images/king-mole-hungry.png";
  img.alt = "Hungry mole";
  img.classList.add("mole");
  img.addEventListener("click", function () {
    totalScore += 10;
    score.textContent = totalScore;
    sound.play();
    img.src = "./images/king-mole-fed.png";
    clearTimeout(timer);
    timer1 = setTimeout(() => {
      currentHole.removeChild(img);
      run();
    }, 200);
    setTimeout(() => {
      if (totalScore >= 100) {
        winImage.classList.add("show");
        secHoles.classList.add("hide");
        clearTimeout(timer1);
      }
    }, 0);
  });
  currentHole.appendChild(img);
  timer = setTimeout(() => {
    currentHole.removeChild(img);
    run();
  }, 1500);
}
run();
