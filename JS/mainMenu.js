const LETTER_TITLE = document.getElementById("letter");
const LETTER_BUTTON = document.getElementById("new_letter_button");
const LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
LETTER_BUTTON.addEventListener("click", function () {
  getLetter(LETTER_TITLE);
});
function getLetter(title) {
  let random_digit = Math.floor(Math.random() * 25);
  title.innerText = "Letter: " + LETTERS[random_digit].toUpperCase();
}
