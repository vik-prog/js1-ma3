//Question 1
const subtract = (a, b) => a - b;

//Question 2
const gamesUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(gamesUrl)
   .then((response) => {
      return response.json();
   })
   .then((result) => {
      logGameSportNames(result);
   })
   .catch((error) => {
      window.location = "./error.html";
   });

function logGameSportNames(games) {
   if (games.results.length > 0) {
      games.results.forEach((game) => {
         console.log(game.name);
      });
   }
}

//Question 3
let animalSentence = "These cats are outrageous.";
animalSentence = animalSentence.replace("cats", "giraffes");
console.log(animalSentence);

// Question 4
const queryStringCheck = document.location.search;
const params = new URLSearchParams(queryStringCheck);

let userId;

if (params.has("userId")) {
   userId = params.get("userId");
}

if (userId === undefined) {
   document.location.href = "./third.html";
} else if (userId < 10) {
   document.location.href = "/first.html";
} else if (userId >= 10) {
   document.location.href = "/second.html";
}

// Question 5
const containerClass = document.querySelector(".container");
const buttonClass = document.querySelector(".btn");
containerClass.removeChild(buttonClass);

// Question 6
let addParrot = document.createElement("li");
addParrot.className = "parrots";
addParrot.innerText = "Parrots";

const animalClass = document.querySelector(".animals");
const animalElement = animalClass.querySelector("li");
animalElement.after(addParrot);

// Question 7
const gamesUrl = "https://api.rawg.io/api/games/3801";

fetch(gamesUrl)
   .then((response) => {
      return response.json();
   })
   .then((result) => {
      getRating(result);
   })
   .catch((error) => {
      console.error(error);
   });

function getRating(gamesArray) {
   let ratingClass = document.querySelector(".rating");
   ratingClass.innerText = gamesArray.rating;
}
