// modules
import welcomeElement from "./modules/welcome.js";
import gameGenreTemplate from "./modules/game-genre.js";
import gameArtistTemplate from "./modules/game-artist.js";
import resultSuccessElement from "./modules/result-success.js";
import headerTemplate from "./modules/header.js";
import {gameMistakesTemplate} from "./modules/header.js";

// data
import levels from "./data/levels.js";
import initialState from "./data/state.js";

// functions
import getElementFromTemplate from "./functions/functions.js";
import {appendBlock} from "./functions/functions.js";

const mainSection = document.querySelector(`.main`);
let level = initialState.level;
let notes = initialState.notes;
let gameScreen = ``;

appendBlock(mainSection, welcomeElement);

document.querySelector(`.welcome__button`).addEventListener(`click`, () => {

  const chooseGameScreen = () => {
    if (levels[level-1].levelType === `genre`) {
      gameScreen = getElementFromTemplate(gameGenreTemplate(level));
    } else {
      gameScreen = getElementFromTemplate(gameArtistTemplate(level));
    }
  }

  const refreshGameScreen = () => {
    appendBlock(mainSection, gameScreen);
    const headerElement = getElementFromTemplate(headerTemplate);
    gameScreen.insertBefore(headerElement, gameScreen.firstChild);

    let gameMistakesElement = getElementFromTemplate(gameMistakesTemplate(notes));
    appendBlock(document.querySelector(`.game__mistakes-wrap`), gameMistakesElement);

    document.querySelector(`.game__back`).addEventListener(`click`, function () {
      appendBlock(mainSection, welcomeElement);
    });
  }

  const finalGameScreen = () => {
    if (level <= 9) {
      level = level + 1;
      chooseGameScreen();
      refreshGameScreen();
      refreshGameListeners();
    } else {
      appendBlock(mainSection, resultSuccessElement);
      const replayButton = document.querySelector(`.result__replay`);
      replayButton.addEventListener(`click`, () => {
        appendBlock(mainSection, welcomeElement);
        level = initialState.level;
        notes = initialState.notes;
      });
    }
  }

  const refreshGameListeners = () => {
    if (levels[level-1].levelType === `genre`) {
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

      submitButton.addEventListener(`click`, function () {
        finalGameScreen();
      });
    } else {
      const artistBlock = document.querySelector(`.game__artist`);
      artistBlock.addEventListener(`click`, () => {
        finalGameScreen();
      });
    }
  }

  chooseGameScreen();
  refreshGameScreen();
  refreshGameListeners();
});
