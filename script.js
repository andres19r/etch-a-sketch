const div = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  div.appendChild(pixel);
}
const pixels = document.querySelectorAll(".pixel");
addHover(pixels);
const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {
  clear();
  let howManySquares;
  do {
    howManySquares = parseInt(
      prompt("How many squares per side do you want? limit: 100")
    );
  } while (howManySquares > 64);
});

function addHover(p) {
  p.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.background = "black";
    });
  });
}
function clear() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((p) => (p.style.background = "white"));
}
function createGrid(n) {
  const div = document.createElement("div");
  div.classList.add("container");
  const body = document.querySelector("body");
  body.appendChild(div);
  const total = n * n;
  div.style.cssText = `grid-template-columns: repeat(${n},1fr);grid-template-rows: repeat(${n},1fr)`;
  for (let i = 0; i < total; i++) {
    let p = document.createElement("div");
    p.classList.add("pixel");
    div.appendChild(p);
  }
}
function removePixels() {
  const p = document.querySelectorAll(".pixel");
  p.forEach((p) => div.remove(p));
}
