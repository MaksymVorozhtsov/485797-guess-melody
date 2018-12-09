// game results
const gameQuestions = [-1, 10, 12, 36, -1, 20, 44, 32, 5, 22];
const livesLeft = 2;
let leaderBoard = [20, 20, 19, 12, 11, 10, 9, 9, 8, 6, 2, 1];

// user metrics
let errorsCount = 0; // number of errors
let noAnswered = 0; // number of unanswered questions, mean that user have no time
let gameScore = 0; // user score
let gameMessage = ``; // message for user

export default function gameResult(questionsArray, livesNum) {
  gameScore = 0;
  errorsCount = 0;
  noAnswered = 0;

  if (livesNum === undefined || questionsArray === undefined) {
    gameScore = -1;
    return gameScore;
  }

  if (livesNum <= 0 || livesNum > 3) {
    errorsCount = 3;
    noAnswered = 0;
    gameScore = -1;
    return gameScore;
  }

  for (let i = 0; i < questionsArray.length; i++) {
    if (questionsArray[i] < 0) {
      errorsCount++;
      if (errorsCount >= 3) {
        errorsCount = 3;
        noAnswered = 0;
        gameScore = -1;
        return gameScore;
      }
    } else if (questionsArray[i] > 0 && questionsArray[i] < 30) {
      gameScore += 2;
    } else if (questionsArray[i] >= 30) {
      gameScore++;
    } else if (questionsArray[i] === 0) {
      noAnswered++;
    }
  }

  if (gameScore > 20) {
    gameScore = -1;
    return gameScore;
  }

  return gameScore;
}

gameResult(gameQuestions, livesLeft);

export function userMessage(numErrors, numNoAnswered, userScore) {
  if (numErrors === undefined || numNoAnswered === undefined || userScore === undefined) {
    gameMessage = `Invalid data`;
    return gameMessage;
  }
  if (numErrors === `` || numNoAnswered === `` || userScore === ``) {
    gameMessage = `Invalid data`;
    return gameMessage;
  }
  if (numErrors >= 3) {
    gameMessage = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
    return gameMessage;
  } else if (numNoAnswered > 0 || userScore === 0) {
    gameMessage = `Время вышло! Вы не успели отгадать все мелодии`;
    return gameMessage;
  } else {
    let leaderBoardUser = leaderBoard;
    leaderBoardUser.push(userScore);
    leaderBoardUser.sort(function (a, b) {
      return b - a;
    });
    let userPlace = leaderBoardUser.length;
    let userBetter = 0;
    for (let j = 0; j < leaderBoardUser.length; j++) {
      if (leaderBoardUser[j] === userScore) {
        userPlace = j + 1;
        userBetter = Math.round((leaderBoardUser.length - userPlace) * 100 / leaderBoardUser.length);
      }
    }
    leaderBoard = leaderBoardUser;
    gameMessage = `Вы заняли ${userPlace} место из ${leaderBoardUser.length} игроков. Это лучше, чем у ${userBetter}% игроков`;
    return gameMessage;
  }
}

userMessage(errorsCount, noAnswered, gameScore);
