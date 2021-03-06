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

const welcome = new WelcomeView();
appendBlock(mainSection, welcome.element);

// functions for Level rendering
// function that choose what game screen to add depend of type (genre or artist)
const chooseGameScreen = () => {
  if (levels[level - 1].levelType === `genre`) {
    const newGameGenre = new GameGenre(level);
    gameScreen = newGameGenre.element;
  } else {
    const newGameArtist = new GameArtist(level);
    gameScreen = newGameArtist.element;
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
  chooseGameScreen();
  appendBlock(mainSection, gameScreen);
  refreshHeader();
  document.querySelector(`.game__back`).addEventListener(`click`, () => {
    appendBlock(mainSection, welcome.element);
  });

  if (levels[level - 1].levelType === `genre`) {
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

// function that check - do we have more levels
const finalGameScreen = () => {
  if (level <= levels.length - 1) {
    level = level + 1;
    refreshGameScreen();
  } else {
    appendBlock(mainSection, resultSuccessElement);
    const replayButton = document.querySelector(`.result__replay`);
    replayButton.addEventListener(`click`, () => {
      appendBlock(mainSection, welcome.element);
      level = initialState.level;
      notes = initialState.notes;
    });
  }
};

// main game function
document.querySelector(`.welcome__button`).addEventListener(`click`, () => {
  refreshGameScreen();
});
