const headerTemplate = () => (`<header class="game__header">
<a class="game__back" href="#">
  <span class="visually-hidden">Сыграть ещё раз</span>
  <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
</a>

<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
  <circle class="timer__line" cx="390" cy="390" r="370"
          style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
</svg>

<div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
  <span class="timer__mins">05</span>
  <span class="timer__dots">:</span>
  <span class="timer__secs">00</span>
</div>

<div class="game__mistakes-wrap"></div>
</header>`);

export default headerTemplate;

export const gameMistakesTemplate = (notes) => {
  if (notes === 3) {
    return `<div class="game__mistakes">
      <div class="correct"></div>
      <div class="correct"></div>
      <div class="correct"></div>
    </div>`;
  } else if (notes === 2) {
    return `<div class="game__mistakes">
      <div class="correct"></div>
      <div class="correct"></div>
      <div class="wrong"></div>
    </div>`;
  } else if (notes === 1) {
    return `<div class="game__mistakes">
      <div class="correct"></div>
      <div class="wrong"></div>
      <div class="wrong"></div>
    </div>`;
  } else {
    notes = 0;
    return `<div class="game__mistakes">
      <div class="wrong"></div>
      <div class="wrong"></div>
      <div class="wrong"></div>
    </div>`;
  }
}
