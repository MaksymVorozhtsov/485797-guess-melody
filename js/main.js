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

// functions for Level rendering
// function that choose what game screen to add depend of type (genre or artist)
const chooseGameScreen = () => {
  if (levels[level - 1].levelType === `genre`) {
    gameScreen = getElementFromTemplate(gameGenreTemplate(level));
  } else {
    gameScreen = getElementFromTemplate(gameArtistTemplate(level));
  }
};

// function that refresh header depends of notes number
const refreshHeader = () => {
  const headerElement = getElementFromTemplate(headerTemplate);
  gameScreen.insertBefore(headerElement, gameScreen.firstChild);
  let gameMistakesElement = getElementFromTemplate(gameMistakesTemplate(notes));
  appendBlock(document.querySelector(`.game__mistakes-wrap`), gameMistakesElement);
};

// function that refreshes game screen
const refreshGameScreen = () => {
  appendBlock(mainSection, gameScreen);
  refreshHeader();
  document.querySelector(`.game__back`).addEventListener(`click`, () => {
    appendBlock(mainSection, welcomeElement);
  });
};

// function that check - do we have more levels
const finalGameScreen = () => {
  if (level <= levels.length - 1) {
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
};

// function that change document listeners depends on type of level (genre or artist)
const refreshGameListeners = () => {
  if (levels[level - 1].levelType === `genre`) {
    const submitButton = document.querySelector(`.game__submit`);
    const tracksArray = document.querySelectorAll(`.game__input`);

    const trackCheck = () => {
      let checkedTracksCounter = 0;
      for (let checkbox of tracksArray) {
        if (checkbox.checked) {
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

    for (let checkbox of tracksArray) {
      checkbox.addEventListener(`change`, () => {
        trackCheck();
      });
    }

    const formElement = document.querySelector(`.game__tracks`);

    formElement.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      const formData = new FormData(evt.currentTarget);
      let obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      finalGameScreen();
    });
  } else {
    const formElement = document.querySelector(`.game__artist`);
    formElement.addEventListener(`change`, (evt) => {
      evt.preventDefault();
      const formData = new FormData(evt.currentTarget);
      let obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      finalGameScreen();
    });
  }
};

// main game function
document.querySelector(`.welcome__button`).addEventListener(`click`, () => {
  chooseGameScreen();
  refreshGameScreen();
  refreshGameListeners();
});
