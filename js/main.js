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

  const track01 = document.getElementById(`answer-1`);
  const track02 = document.getElementById(`answer-2`);
  const track03 = document.getElementById(`answer-3`);
  const track04 = document.getElementById(`answer-4`);

  const trackCheck = () => {
    if (track01.checked || track02.checked || track03.checked || track04.checked) {
      submitButton.removeAttribute(`disabled`);
    } else {
      submitButton.setAttribute(`disabled`, true);
    }
  };

  trackCheck();

  track01.addEventListener(`click`, function () {
    trackCheck();
  });

  track02.addEventListener(`click`, function () {
    trackCheck();
  });

  track03.addEventListener(`click`, function () {
    trackCheck();
  });

  track04.addEventListener(`click`, function () {
    trackCheck();
  });

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
