import levels from ".././data/levels.js";

const gameArtistTemplate = (level) => (`<section class="game game--artist">

<section class="game__screen">
  <h2 class="game__title">${levels[level-1].levelQuestion}</h2>
  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio></audio>
  </div>

  <form class="game__artist">
    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
      <label class="artist__name" for="answer-1">
        <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
        ${levels[level-1].levelAnswers[0].answerName}
      </label>
    </div>

    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2">
      <label class="artist__name" for="answer-2">
        <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
        ${levels[level-1].levelAnswers[1].answerName}
      </label>
    </div>

    <div class="artist">
      <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3">
      <label class="artist__name" for="answer-3">
        <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
        ${levels[level-1].levelAnswers[2].answerName}
      </label>
    </div>
  </form>
</section>
</section>`);

export default gameArtistTemplate;
