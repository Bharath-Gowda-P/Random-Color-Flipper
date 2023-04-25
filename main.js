const colors = [];
const colorName = document.querySelector(".colorName");
const btn = document.querySelector("[colorBtn]");
const numbers = "0123456789";
const alphas = "abcde";

function getRandomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRnadomAlpha() {
  return alphas[Math.floor(Math.random() * alphas.length)];
}

function getHex() {
  let arr = [];
  arr.push(getRandomNumber());
  arr.push(getRnadomAlpha());
  return arr[Math.floor(Math.random() * arr.length)];
}

btn.addEventListener("click", () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += getHex();
  }
  document.body.style.backgroundColor = hex;
  colorName.textContent = hex;
});
