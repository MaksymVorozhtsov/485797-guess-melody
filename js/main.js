"use strict";

let screens = [`welcome`, `game-genre`, `game-artist`, `result-success`, `fail-time`, `fail-tries`, `modal-error`, `modal-confirm`];

const mainSection = document.querySelector(`.main`);
const arrowsSection = document.querySelector(`.arrows`);

const arrowShow = function () {
  let arrowsToInsert = document.getElementById(`arrows`).content;
  arrowsSection.appendChild(arrowsToInsert);
};

arrowShow();

const RIGHT_KEYCODE = 39;
const LEFT_KEYCODE = 37;
const RIGHT_BTN = document.querySelector(`.arrows__btn--right`);
const LEFT_BTN = document.querySelector(`.arrows__btn--left`);

const screenShow = function (id) {
  let templateToInsert = document.getElementById(id).content;
  let newTemplate = templateToInsert.cloneNode(true);
  let templateClone = document.createDocumentFragment();
  templateClone.appendChild(newTemplate);
  mainSection.appendChild(templateClone);
};

screenShow(screens[0]);

let i = 0;

const swichRight = function () {
  i++;
  if (i > 0 && i <= screens.length - 1) {
    mainSection.innerHTML = ``;
    screenShow(screens[i]);
  } else {
    i = screens.length - 1;
  }
};

const swichLeft = function() {
  i--;
  if (i >= 0 && i < screens.length - 1) {
    mainSection.innerHTML = ``;
    screenShow(screens[i]);
  } else {
    i = 0;
  }
};

document.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === RIGHT_KEYCODE) {
    swichRight();
  } else if (evt.keyCode === LEFT_KEYCODE) {
    swichLeft();
  }
});

RIGHT_BTN.addEventListener(`click`, function () {
  swichRight();
});

LEFT_BTN.addEventListener(`click`, function () {
  swichLeft();
});
