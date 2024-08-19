const array = [
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
const container = document.getElementsByClassName("container")[0];
const container1 = document.getElementsByClassName("container")[1];
const countryList = [
  "france",
  "southkorea",
  "spain",
  "germany",
  "turkey",
  "southafrica",
  "mexico",
  "switzerland",
  "norway",
  "italy",
  "china",
  "mongolia",
  "japan",
  "austria",
  "thailand",
  "unitedstates",
  "canada",
  "unitedkingdom",
  "ireland",
  "russia",
  "portugal",
  "israel",
  "netherlands",
  "croatia",
  "denmark",
];
function random() {
  let num = Math.floor(Math.random() * countryList.length);
  return num;
}
let index = random();
let end = "GAME OVER!";
let end2 = "YOU WON!";
const word = countryList[index];
// const length = document.getElementById("length");
// length.innerHTML = word.length;
const underscore = document.createElement("div");
const spaceUnderscore = "_ ";
let num = 0;
let num1 = 0;
underscore.className = "underscore";
container1.appendChild(underscore);
for (let j = 0; j < word.length; j++) {
  underscore.innerHTML = underscore.innerHTML + spaceUnderscore;
}
underscore.innerHTML.toString();
const live = document.getElementById("lives");
live.innerHTML = 10;

for (let i = 0; i < array.length; i++) {
  const alphabet = document.createElement("div");
  alphabet.className = "alphabet";
  alphabet.innerHTML = array[i];
  container.appendChild(alphabet);
  alphabet.addEventListener("click", function () {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === array[i]) {
        const arr = underscore.innerHTML.toString().split(" ");
        arr[j] = array[i];
        const test = arr.join(" ");
        underscore.innerHTML = test;
        alphabet.style.backgroundColor = "green";
        alphabet.style.pointerEvents = "none";
        if (underscore == word.split(" ")) {
          document.body.innerHTML += end2;
        }
      } else {
        alphabet.style.backgroundColor = "green";
        alphabet.style.pointerEvents = "none";
        num++;
      }
    }
    for (let k = 0; k < underscore.innerHTML.length; k++) {
      if (underscore.innerHTML[k] != "_") {
        num1++;
      }
    }
    if (num1 == underscore.innerHTML.length) {
      document.body.innerHTML += end2;
    }
    num1 = 0;
    if (num === word.length) {
      live.innerHTML--;
      num = 0;
    }
    if (live.innerHTML == 0) {
      document.body.innerHTML += end;
    }
    underscore.innerHTML.toString();
    num = 0;
  });
}
