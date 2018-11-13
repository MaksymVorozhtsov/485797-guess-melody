'use strict';

let screens = ['welcome', 'game-genre', 'game-artist', 'result-success', 'fail-time', 'fail-tries', 'modal-error', 'modal-confirm']

const mainSection = document.querySelector('.main');

const RIGHT_KEYCODE = 39;
const LEFT_KEYCODE = 37;

const screenShow = function(id) {
  let templateToInsert = document.getElementById(id).content;
  let newTemplate = templateToInsert.cloneNode(true);
  let templateClone = document.createDocumentFragment();
  templateClone.appendChild(newTemplate);
  mainSection.appendChild(templateClone);
}

screenShow(screens[0]);

let i = 0;

document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === RIGHT_KEYCODE) {
      i++;
      if (i > 0 && i <= screens.length-1) {
        console.log('right ' + i);
        mainSection.innerHTML = '';
        screenShow(screens[i]);
      } else {
        i = screens.length-1;
        console.log('right: not 0...7 ' + i);
      }
    } else if (evt.keyCode === LEFT_KEYCODE) {
      i--;
      if (i >= 0 && i < screens.length-1) {
        console.log('left ' + i);
        mainSection.innerHTML = '';
        screenShow(screens[i]);
      } else {
        i = 0;
        console.log('left: not 0...7' + i);
      }
    }
});
