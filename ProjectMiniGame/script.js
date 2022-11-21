//overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function GameOver() {
  document.getElementById("overlayGameOver").style.display = "Block";
}

function Win() {
  document.getElementById("overlayWin").style.display = "Block";
}
//Pemanggilan
const container = document.querySelector(".container");
const bullet = document.querySelector(".bullet");
const startBtn = document.querySelector(".startBtn");
const point = document.querySelector(".point");

//Memanggil Monster
const rimuru = document.createElement("img");
rimuru.setAttribute("class", "rimuru");
rimuru.setAttribute("src", "Monster.png");

const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;

//Interval Waktu Keluar
setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  rimuru.style.position = "absolute";
  rimuru.style.top = randTop + "px";
  rimuru.style.left = randLeft + "px";
}, 1000);

//Score
let score = 1;

startBtn.addEventListener("click", () => {
  container.appendChild(rimuru);

  point.innerText = "SCORE: " + score;
});

window.addEventListener("click", (e) => {
  bullet.style.top = e.pageY + "px";
  bullet.style.left = e.pageX + "px";

  if (e.target === rimuru) score++;
  if (e.target !== rimuru) score--;
  point.innerText = "SCORE: " + score;

  if (score > 9) {
  Win();
}
  else if (score < -1){
  GameOver();
}
});
//Cursor
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});