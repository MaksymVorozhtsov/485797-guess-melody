import levels from ".././data/levels";
import AbstractView from ".././classes/AbstractView";

export default class GameGenre extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<section class="game game--genre">
    <section class="game__screen">
      <h2 class="game__title">${levels[this.level - 1].levelQuestion}</h2>
      <form class="game__tracks">

        ${levels[this.level - 1].levelAnswers.map(answer =>
        `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio>
              <source src="${answer.answerTrack}" type="audio/mpeg">
            </audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="${answer.answerValue}" value="${answer.answerValue}" id="${answer.answerValue}">
            <label class="game__check" for="${answer.answerValue}">Отметить</label>
          </div>
        </div>`)}

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>`;
  }

  bind() {
    const submitButton = this._element.querySelector(`.game__submit`);
    const tracksArray = this._element.querySelectorAll(`.game__input`);

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
  }
}
