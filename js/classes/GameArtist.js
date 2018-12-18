import levels from ".././data/levels";
import AbstractView from ".././classes/AbstractView";

export default class GameArtist extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get render() {
    return `<section class="game game--artist">
      <section class="game__screen">
        <h2 class="game__title">${levels[this.level - 1].levelQuestion}</h2>
        <div class="game__track">
          <button class="track__button track__button--play" type="button"></button>
          <audio>
            <source src="${levels[this.level - 1].levelTrack}" type="audio/mpeg">
          </audio>
        </div>

        <form class="game__artist">
          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="level-${levels[this.level - 1].levelNumber}-${levels[this.level - 1].levelAnswers[0].answerValue}" value="artist-1" id="answer-1">
            <label class="artist__name" for="answer-1">
              <img class="artist__picture" src="${levels[this.level - 1].levelAnswers[0].answerImg}" alt="Пелагея">
              ${levels[this.level - 1].levelAnswers[0].answerName}
            </label>
          </div>

          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="level-${levels[this.level - 1].levelNumber}-${levels[this.level - 1].levelAnswers[1].answerValue}" value="artist-2" id="answer-2">
            <label class="artist__name" for="answer-2">
              <img class="artist__picture" src="${levels[this.level - 1].levelAnswers[1].answerImg}" alt="Пелагея">
              ${levels[this.level - 1].levelAnswers[1].answerName}
            </label>
          </div>

          <div class="artist">
            <input class="artist__input visually-hidden" type="radio" name="level-${levels[this.level - 1].levelNumber}-${levels[this.level - 1].levelAnswers[2].answerValue}" value="artist-3" id="answer-3">
            <label class="artist__name" for="answer-3">
              <img class="artist__picture" src="${levels[this.level - 1].levelAnswers[2].answerImg}" alt="Пелагея">
              ${levels[this.level - 1].levelAnswers[2].answerName}
            </label>
          </div>
        </form>
      </section>
    </section>`;
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = document.createElement(`div`);
    this._element.innerHTML = this.render();
    this.bind();
    return this._element;
  }
}
