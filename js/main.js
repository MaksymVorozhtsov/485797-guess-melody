import welcomeElement from "./modules/welcome.js";
import gameGenreElement from "./modules/game-genre.js";
import gameArtistElement from "./modules/game-artist.js";
import resultSuccessElement from "./modules/result-success.js";
import headerElement from "./modules/header.js";

const mainSection = document.querySelector(`.main`);

const appendToMain = (element) => {
  mainSection.innerHTML = ``;
  mainSection.appendChild(element);
};

appendToMain(welcomeElement);

const backButtonFunction = () => {
  const backButton = document.querySelector(`.game__back`);
  backButton.addEventListener(`click`, function () {
    appendToMain(welcomeElement);
  });
};

const playButton = document.querySelector(`.welcome__button`);

playButton.addEventListener(`click`, () => {
  appendToMain(gameGenreElement);
  const gameGenreSection = document.querySelector(`.game--genre`);
  gameGenreSection.insertBefore(headerElement, gameGenreSection.firstChild);
  backButtonFunction();

  const submitButton = document.querySelector(`.game__submit`);
  const tracksArray = document.querySelectorAll(`.game__input`);

  const trackCheck = () => {
    let checkedTracksCounter = 0;
    for (let i = 0; i < tracksArray.length; i++) {
      if (tracksArray[i].checked) {
        checkedTracksCounter++;
      }
    }
    if (checkedTracksCounter >= 1) {
      submitButton.removeAttribute(`disabled`);
    } else {
      submitButton.setAttribute(`disabled`, true);
    }
  };

  trackCheck();

  for (let i = 0; i < tracksArray.length; i++) {
    tracksArray[i].addEventListener(`change`, function () {
      trackCheck();
    });
  }

  submitButton.addEventListener(`click`, () => {
    appendToMain(gameArtistElement);
    const gameArtistSection = document.querySelector(`.game--artist`);
    gameArtistSection.insertBefore(headerElement, gameArtistSection.firstChild);
    backButtonFunction();

    const artistBlock = document.querySelector(`.game__artist`);

    artistBlock.addEventListener(`click`, () => {
      appendToMain(resultSuccessElement);

      const replayButton = document.querySelector(`.result__replay`);

      replayButton.addEventListener(`click`, () => {
        appendToMain(welcomeElement);
      });
    });
  });
});
