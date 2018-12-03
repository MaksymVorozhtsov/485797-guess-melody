import welcomeElement from "js/welcome.js";
import gameGenreElement from "js/game-genre.js";
import gameArtistElement from "js/game-artist.js";
import resultSuccessElement from "js/result-success.js";

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

playButton.addEventListener(`click`, function () {
  appendToMain(gameGenreElement);
  backButtonFunction();

  const submitButton = document.querySelector(`.game__submit`);
  const tracksArray = document.querySelectorAll(`.game__input`);

  const trackCheck = () => {
    let checkedTracksCounter = 0;
    for (let i = 0; i<tracksArray.length; i++) {
      if (!tracksArray[i].checked) {
        checkedTracksCounter++;
      }
    }
    if (checkedTracksCounter === 0) {
      submitButton.removeAttribute(`disabled`);
    } else {
      submitButton.setAttribute(`disabled`, true);
    }
  };

  trackCheck();

  for (let i = 0; i<tracksArray.length; i++) {
    tracksArray[i].addEventListener(`change`, function () {
      trackCheck();
    });
  }

  submitButton.addEventListener(`click`, function () {
    appendToMain(gameArtistElement);
    backButtonFunction();

    const artistBlock = document.querySelector(`.game__artist`);

    artistBlock.addEventListener(`click`, function () {
      appendToMain(resultSuccessElement);

      const replayButton = document.querySelector(`.result__replay`);

      replayButton.addEventListener(`click`, function () {
        appendToMain(welcomeElement);
      });
    });
  });
});
