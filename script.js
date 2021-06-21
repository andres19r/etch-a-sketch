const btnNew = document.querySelector("#btn-new");
const btnClear = document.querySelector("#btn-clear");
const btnRainbow = document.querySelector("#btn-rainbow");
const btnBlack = document.querySelector("#btn-black");
createGrid(16);
const pixels = document.querySelectorAll(".pixel");
addHover(pixels, "black");

btnNew.addEventListener("click", () => {
  clear();
  let howManySquares;
  do {
    howManySquares = parseInt(
      prompt("How many squares per side do you want? limit: 64")
    );
  } while (howManySquares > 64);
  removePixels();
  createGrid(howManySquares);
});

btnClear.addEventListener("click", () => {
  clear();
});

btnRainbow.addEventListener("click", () => {
  const p = document.querySelectorAll(".pixel");
  p.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.background = random_rgba();
    });
  });
});

btnBlack.addEventListener("click", () => {
  const p = document.querySelectorAll(".pixel");
  addHover(p, "black");
});

function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

function addHover(p, color) {
  p.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.background = color;
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
  const p = document.querySelectorAll(".pixel");
  addHover(p, "black");
}
function removePixels() {
  const div = document.querySelector(".container");
  const p = document.querySelectorAll(".pixel");
  p.forEach((p) => div.remove(p));
}
