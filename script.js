const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const convertResult = document.getElementById("output");
const resultBox = document.querySelector("#result div");

const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function convert() {
  resultBox.classList.remove("hidden");
  convertResult.innerText = "";
  if (!numberInput.value) {
    resultBox.classList.add("error");
    convertResult.innerText = "Please enter a valid number";
  } else if (numberInput.value < 1) {
    resultBox.classList.add("error");
    convertResult.innerText = "Please enter a number greater than or equal to 1";
  } else if (numberInput.value > 3999) {
    resultBox.classList.add("error");
    convertResult.innerText = "Please enter a number less than or equal to 3999";
  } else {
    resultBox.classList.remove("error");
    resultOutput(symbolsNumber(numberInput.value));
  }
}

function symbolsNumber(number) {
  const symbolsArray = [];

  const m = Math.floor(number / 1000);
  number -= m * 1000;
  symbolsArray.push(m);
  const cm = Math.floor(number / 900);
  number -= cm * 900;
  symbolsArray.push(cm);
  const d = Math.floor(number / 500);
  number -= d * 500;
  symbolsArray.push(d);
  const cd = Math.floor(number / 400);
  number -= cd * 400;
  symbolsArray.push(cd);
  const c = Math.floor(number / 100);
  number -= c * 100;
  symbolsArray.push(c);
  const xc = Math.floor(number / 90);
  number -= xc * 90;
  symbolsArray.push(xc);
  const l = Math.floor(number / 50);
  number -= l * 50;
  symbolsArray.push(l);
  const xl = Math.floor(number / 40);
  number -= xl * 40;
  symbolsArray.push(xl);
  const x = Math.floor(number / 10);
  number -= x * 10;
  symbolsArray.push(x);
  const ix = Math.floor(number / 9);
  number -= ix * 9;
  symbolsArray.push(ix);
  const v = Math.floor(number / 5);
  number -= v * 5;
  symbolsArray.push(v);
  const iv = Math.floor(number / 4);
  number -= iv * 4;
  symbolsArray.push(iv);
  const i = Math.floor(number / 1);
  number -= i * 1;
  symbolsArray.push(i);

  return symbolsArray;
}

function resultOutput(arr) {
  var symbolsIndex = 0;
  arr.forEach((symboL) => {
    for (var i = 0; i < symboL; i++) {
      convertResult.innerText += symbols[symbolsIndex];
    }
    symbolsIndex ++;
  })
}

convertButton.addEventListener("click", convert);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    convert();
  }
});