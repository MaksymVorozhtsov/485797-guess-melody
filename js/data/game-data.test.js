import {assert} from 'chai';
import gameResult from "./game-data.js";
import userMessage from "./game-data.js";

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
    it(`should return message that time is up when have 0 for some answers`, () => {
      assert.equal(userMessage(0, 0, 0), `Время вышло! Вы не успели отгадать все мелодии`);
    });
  });
});
