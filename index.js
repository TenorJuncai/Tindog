// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import { dogs } from "./data.js";
let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);
document.getElementById("yes").addEventListener("click", likeDog);
document.getElementById("no").addEventListener("click", dislikeDog);

function getNewDog() {
  currentDogIndex += 1;
  currentDog = new Dog(dogs[currentDogIndex]);
  render();
}

function likeDog() {
  currentDog.setMatchStatus(true);
  setTimeout(() => {
    document.getElementById("like").style.display = "flex";
  }, 100);
  setTimeout(() => {
    getNewDog();
  }, 200);
}

function dislikeDog() {
  currentDog.setMatchStatus(false);
  setTimeout(() => {
    document.getElementById("dislike").style.display = "flex";
  }, 100);
  setTimeout(() => {
    getNewDog();
  }, 200);
}

function getEmptyMessage() {
  if (currentDogIndex > 6) {
    return `<div class="empty-message-box">
              <h3 class="empty-message">There are no more dogs in your area...</h3>
            </div>`;
  }
  render();
}

function render() {
  document.getElementById("card-body").innerHTML = currentDog.getDogsHtml();
  document.getElementById("card-body").innerHTML = getEmptyMessage();
}
render();
