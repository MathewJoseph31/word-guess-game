let secsRem = 10,
  start = false,
  wins = 0,
  loses = 0;
let startBtn = document.querySelector(".startBtn");
let secRemEle = document.querySelector("#secRem");
let strGuessedEle = document.querySelector("#strGuessed");
let winsEle = document.querySelector("#wins");
let losesEle = document.querySelector("#loses");
let decInterval;
let words = [
  "javascript",
  "string",
  "array",
  "object",
  "boolean",
  "closure",
  "array",
];
let wordSelected;
let arrWordSelected;
let wordMatched,
  arrWordMatched = [];

function init() {
  secsRem = 10;
  secRemEle.textContent = 10;
  winsEle.textContent = wins;
  losesEle.textContent = loses;
  let index = Math.floor(Math.random() * words.length);
  wordSelected = words[index];
  arrWordSelected = wordSelected.split("");
}

function decrementSeconds() {
  // console.log(secsRem);
  if (secsRem === 0) {
    clearInterval(decInterval);
    strGuessedEle.textContent = "GAME OVER!";
    loses++;
    losesEle.textContent = loses;
    start = false;
  } else {
    secsRem--;
    secRemEle.textContent = secsRem;
  }
}

document.body.addEventListener("keyup", function (event) {
  let char = event.key;
  if (start && arrWordSelected.includes(char)) {
    for (let i = 0; i < arrWordSelected.length; i++) {
      if (arrWordMatched[i] === "_" && arrWordSelected[i] === char) {
        arrWordMatched[i] = char;
      }
    }
    wordMatched = arrWordMatched.join("");
    strGuessedEle.textContent = wordMatched;
    if (wordMatched === wordSelected) {
      wins++;
      winsEle.textContent = wins;
      strGuessedEle.textContent = "YOU WON!!! 🏆";
      start = false;
      clearInterval(decInterval);
    }
  }
});

startBtn.addEventListener("click", function (event) {
  if (!start) {
    start = true;
    init();
    arrWordMatched = Array(arrWordSelected.length).fill("_");
    wordMatched = arrWordMatched.join("");
    decInterval = setInterval(decrementSeconds, 1000);
    strGuessedEle.textContent = wordMatched;
  }
});

init();
