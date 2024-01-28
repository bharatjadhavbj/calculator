// Number
const numOne = document.querySelector("#one");
const numTwo = document.querySelector("#two");
const numThree = document.querySelector("#three");
const numFour = document.querySelector("#four");
const numFive = document.querySelector("#five");
const numSix = document.querySelector("#six");
const numSeven = document.querySelector("#seven");
const numEight = document.querySelector("#eight");
const numNine = document.querySelector("#nine");
const numZero = document.querySelector("#zero");
const dot = document.querySelector("#dot");

// Operation
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const mult = document.querySelector("#mult");
const division = document.querySelector("#division");
const equal = document.querySelector("#equal");
const sq = document.querySelector("#sq");
const cube = document.querySelector("#cube");

// Result Output
const result = document.querySelector("#output");

// Click Events
function appendToResult(value) {
  result.innerHTML += value;
}

function clearResult() {
  result.innerHTML = "";
}

function deleteLastChar() {
  result.innerHTML = result.innerHTML.slice(0, -1);
}

numOne.addEventListener("click", () => appendToResult("1"));
numTwo.addEventListener("click", () => appendToResult("2"));
numThree.addEventListener("click", () => appendToResult("3"));
numFour.addEventListener("click", () => appendToResult("4"));
numFive.addEventListener("click", () => appendToResult("5"));
numSix.addEventListener("click", () => appendToResult("6"));
numSeven.addEventListener("click", () => appendToResult("7"));
numEight.addEventListener("click", () => appendToResult("8"));
numNine.addEventListener("click", () => appendToResult("9"));
numZero.addEventListener("click", () => appendToResult("0"));
dot.addEventListener("click", () => appendToResult("."));

plus.addEventListener("click", () => appendToResult("+"));
minus.addEventListener("click", () => appendToResult("-"));
mult.addEventListener("click", () => appendToResult("*"));
division.addEventListener("click", () => appendToResult("/"));

equal.addEventListener("click", () => {
  try {
    result.innerHTML = eval(result.innerHTML);
  } catch (error) {
    result.innerHTML = "Error";
  }
});

sq.addEventListener("click", () => {
  result.innerHTML = Math.pow(parseFloat(result.innerHTML), 2);
});

cube.addEventListener("click", () => {
  result.innerHTML = Math.pow(parseFloat(result.innerHTML), 3);
});

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", clearResult);

const dlt = document.querySelector("#dlt");
dlt.addEventListener("click", deleteLastChar);