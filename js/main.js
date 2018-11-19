"use strict";

const screens = [`welcome`, `game-genre`, `game-artist`, `result-success`, `fail-time`, `fail-tries`, `modal-error`, `modal-confirm`];

const mainSection = document.querySelector(`.main`);
const arrowsSection = document.querySelector(`.arrows`);
const arrowsTemplate = document.querySelector(`.arrows__wrap`);

() => {
  arrowsSection.appendChild(arrowsTemplate);
};

const Enum = {
  RIGHT_KEYCODE: 39,
  LEFT_KEYCODE: 37,
};

const rightBtn = document.querySelector(`.arrows__btn--right`);
const leftBtn = document.querySelector(`.arrows__btn--left`);

const screenShow = (id) => {
  let templateToInsert = document.getElementById(id).content;
  let newTemplate = templateToInsert.cloneNode(true);
  mainSection.appendChild(newTemplate);
};

screenShow(screens[0]);

let i = 0;

const swichRight = () => {
  i++;
  if (i > 0 && i <= screens.length - 1) {
    mainSection.innerHTML = ``;
    screenShow(screens[i]);
  } else {
    i = screens.length - 1;
  }
};

const swichLeft = () => {
  i--;
  if (i >= 0 && i < screens.length - 1) {
    mainSection.innerHTML = ``;
    screenShow(screens[i]);
  } else {
    i = 0;
  }
};

document.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === Enum.RIGHT_KEYCODE) {
    swichRight();
  } else if (evt.keyCode === Enum.LEFT_KEYCODE) {
    swichLeft();
  }
});

rightBtn.addEventListener(`click`, function () {
  swichRight();
});

leftBtn.addEventListener(`click`, function () {
  swichLeft();
});
