import levels from ".././data/levels.js";

const gameGenreTemplate = (level) => (`<section class="game game--genre">

<section class="game__screen">
  <h2 class="game__title">${levels[level - 1].levelQuestion}</h2>
  <form class="game__tracks">
    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio>
          <source src="${levels[level - 1].levelAnswers[0].answerTrack}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="level-${levels[level - 1].levelNumber}-${levels[level - 1].levelAnswers[0].answerValue}" value="answer-1" id="answer-1">
        <label class="game__check" for="answer-1">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio>
          <source src="${levels[level - 1].levelAnswers[1].answerTrack}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="level-${levels[level - 1].levelNumber}-${levels[level - 1].levelAnswers[1].answerValue}" value="answer-2" id="answer-2">
        <label class="game__check" for="answer-2">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--pause" type="button"></button>
      <div class="track__status">
        <audio>
          <source src="${levels[level - 1].levelAnswers[2].answerTrack}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="level-${levels[level - 1].levelNumber}-${levels[level - 1].levelAnswers[2].answerValue}" value="answer-3" id="answer-3">
        <label class="game__check" for="answer-3">Отметить</label>
      </div>
    </div>

    <div class="track">
      <button class="track__button track__button--play" type="button"></button>
      <div class="track__status">
        <audio>
          <source src="${levels[level - 1].levelAnswers[3].answerTrack}" type="audio/mpeg">
        </audio>
      </div>
      <div class="game__answer">
        <input class="game__input visually-hidden" type="checkbox" name="level-${levels[level - 1].levelNumber}-${levels[level - 1].levelAnswers[3].answerValue}" value="answer-4" id="answer-4">
        <label class="game__check" for="answer-4">Отметить</label>
      </div>
    </div>

    <button class="game__submit button" type="submit">Ответить</button>
  </form>
</section>
</section>`);

export default gameGenreTemplate;
