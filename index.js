let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img1")
  .setAttribute("src", `images/dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img2")
  .setAttribute("src", `images/dice${randomNumber2}.png`);

let text = "";
if (randomNumber1 > randomNumber2) {
  text = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  text = "Player 2 wins!";
} else {
  text = "Draw!";
}

document.querySelector("h1").innerHTML = text;
