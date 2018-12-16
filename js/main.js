// modules
import resultSuccessElement from "./modules/result-success";
import headerTemplate from "./modules/header";
import {gameMistakesTemplate} from "./modules/header";

// data
import levels from "./data/levels";
import initialState from "./data/state";

// functions
import getElementFromTemplate from "./functions/functions";
import {appendBlock} from "./functions/functions";

// classes
import WelcomeView from "./classes/WelcomeView";
import GameGenre from "./classes/GameGenre";
import GameArtist from "./classes/GameArtist";

const mainSection = document.querySelector(`.main`);
let level = initialState.level;
let notes = initialState.notes;
let gameScreen = ``;

const welcomeTemplate = new WelcomeView();
const welcomeElement = getElementFromTemplate(welcomeTemplate.template);
appendBlock(mainSection, welcomeElement);

// functions for Level rendering
// function that choose what game screen to add depend of type (genre or artist)
const chooseGameScreen = () => {
  if (levels[level - 1].levelType === `genre`) {
    const newGameGenre = new GameGenre(level);
    gameScreen = getElementFromTemplate(newGameGenre.template);
  } else {
    const newGameArtist = new GameArtist(level);
    gameScreen = getElementFromTemplate(newGameArtist.template);
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
