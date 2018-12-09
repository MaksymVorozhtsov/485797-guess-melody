import {assert} from 'chai';
import gameResult from "./game-data.js";
import {userMessage} from "./game-data.js";

describe(`Game results`, () => {
  describe(`Game scoring calculation`, () => {
    it(`should return -1 when the number of lives is more than 3 or less than 0`, () => {
      assert.equal(gameResult([-1, 10, 12, 36, -1, 20, 44, 32, 5, 22], 5), -1);
      assert.equal(gameResult([-1, 10, 12, 36, -1, 20, 44, 32, 5, 22], 0), -1);
      assert.equal(gameResult([-1, 10, 12, 36, -1, 20, 44, 32, 5, 22], -1), -1);
    });

    it(`should return -1 when the number of errors is 3 or more`, () => {
      assert.equal(gameResult([-1, 10, 12, 36, -1, 20, -1, 32, 5, 22], 2), -1);
      assert.equal(gameResult([-1, 10, 12, 36, -1, 20, -1, 32, -1, 22], 2), -1);
      assert.equal(gameResult([-1, 10, 12, 36, -1, 20, -1, 32, -1, -1], 2), -1);
    });

    it(`should return -1 when input data is not valid`, () => {
      assert.equal(gameResult(``, ``), -1);
      assert.equal(gameResult(undefined, undefined), -1);
    });

    it(`should return game score when all is ok`, () => {
      assert.equal(gameResult([-1, 10, 12, 36, 11, 20, 11, 32, 5, 22], 2), 16);
    });
  });

  describe(`User messages calc`, () => {
    it(`should return message that error limit when errors num is 3 and more`, () => {
      assert.equal(userMessage(3, 0, 0), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
    });

    it(`should return message that time is up when have 0 score or more than 0 empty answers`, () => {
      assert.equal(userMessage(0, 0, 0), `Время вышло! Вы не успели отгадать все мелодии`);
      assert.equal(userMessage(0, 2, 0), `Время вышло! Вы не успели отгадать все мелодии`);
    });

    it(`should return message that you are on # place and you better than some percent of players`, () => {
      assert.equal(userMessage(0, 0, 2), `Вы заняли 13 место из 14 игроков. Это лучше, чем у 7% игроков`);
    });

    it(`should return message that data is invalid when data is invalid`, () => {
      assert.equal(userMessage(undefined, 0, 0), `Invalid data`);
      assert.equal(userMessage(0, undefined, 0), `Invalid data`);
      assert.equal(userMessage(0, 0, undefined), `Invalid data`);
      assert.equal(userMessage(``, 0, 0), `Invalid data`);
      assert.equal(userMessage(0, ``, 0), `Invalid data`);
      assert.equal(userMessage(0, 0, ``), `Invalid data`);
    });
  });
});
