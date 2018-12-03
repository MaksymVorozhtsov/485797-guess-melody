import welcomeElement from "js/welcome.js";
import gameGenreElement from "js/game-genre.js";
import gameArtistElement from "js/game-artist.js";

const mainSection = document.querySelector(`.main`);

mainSection.appendChild(welcomeElement);

const appendToMain = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};

const backButtonFunction = () => {
  const backButton = document.querySelector(`.game__back`);
  backButton.addEventListener(`click`, function () {
    appendToMain(welcomeElement);
  });
};

const playButton = document.querySelector(`.welcome__button`);

playButton.addEventListener(`click`, function () {
  appendToMain(gameGenreElement);
  backButtonFunction();

  const submitButton = document.querySelector(`.game__submit`);

  submitButton.addEventListener(`click`, function () {
    appendToMain(gameArtistElement);
    backButtonFunction();
  });
});
