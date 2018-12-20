import levels from ".././data/levels";
import AbstractView from ".././classes/AbstractView";

export default class GameArtist extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<section class="game game--artist">
      <section class="game__screen">
        <h2 class="game__title">${levels[this.level - 1].levelQuestion}</h2>

        <div class="game__track">
          <button class="track__button track__button--pause" type="button"></button>
          <audio>
            <source src="${levels[this.level - 1].levelTrack}" type="audio/mpeg">
          </audio>
        </div>

        <form class="game__artist">

        ${levels[this.level - 1].levelAnswers.map((answer) => `<div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="${answer.answerValue}" value="${answer.answerValue}" id="${answer.answerValue}">
            <label class="artist__name" for="answer-1">
              <img class="artist__picture" src="${answer.answerImg}" alt="Пелагея">
              ${answer.answerName}
            </label>
          </div>`)}

        </form>
      </section>
    </section>`;
  }

  bind() {
    const levelTrack = new Audio(`${levels[this.level - 1].levelTrack}`);
    const playButton = this._element.querySelector(`.track__button`);

    const setPause = () => {
      playButton.addEventListener(`click`, () => {
        levelTrack.pause();
        playButton.classList.remove(`track__button--pause`);
        playButton.classList.add(`track__button--play`);
        setPlay();
      });
    }

    const setPlay = () => {
      playButton.addEventListener(`click`, () => {
        levelTrack.play();
        playButton.classList.remove(`track__button--play`);
        playButton.classList.add(`track__button--pause`);
        setPause();
      });
    }

    levelTrack.play();
    setPause();
  }
}
