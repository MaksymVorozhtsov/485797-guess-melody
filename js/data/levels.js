import music from "./music.js";

const levels = [
  {
    levelNumber: `1`,
    levelType: `genre`,
    levelQuestion: `1. Выберите инди-рок треки`,
    levelAnswers: [
      {
        answerTrack: music[0].src,
        answerValue: `answer-1`,
        isCorrect: false
      },
      {
        answerTrack: music[2].src,
        answerValue: `answer-2`,
        isCorrect: false
      },
      {
        answerTrack: music[1].src,
        answerValue: `answer-3`,
        isCorrect: true
      },
      {
        answerTrack: music[1].src,
        answerValue: `answer-4`,
        isCorrect: true
      }
    ]
  },
  {
    levelNumber: `2`,
    levelType: `artist`,
    levelQuestion: `2. Кто исполняет эту мелодию`,
    levelTrack: music[0].src,
    levelAnswers: [
      {
        answerName: music[2].artist,
        answerImg: music[2].image,
        answerValue: `answer-1`,
        isCorrect: false
      },
      {
        answerName: music[1].artist,
        answerImg: music[1].image,
        answerValue: `answer-2`,
        isCorrect: false
      },
      {
        answerName: music[0].artist,
        answerImg: music[0].image,
        answerValue: `answer-3`,
        isCorrect: true
      }
    ]
  },
  {
    levelNumber: `3`,
    levelType: `genre`,
    levelQuestion: `3. Выберите инди-рок треки`,
    levelAnswers: [
      {
        answerTrack: music[0].src,
        answerValue: `answer-1`,
        isCorrect: false
      },
      {
        answerTrack: music[2].src,
        answerValue: `answer-2`,
        isCorrect: false
      },
      {
        answerTrack: music[1].src,
        answerValue: `answer-3`,
        isCorrect: true
      },
      {
        answerTrack: music[1].src,
        answerValue: `answer-4`,
        isCorrect: true
      }
    ]
  },
  {
    levelNumber: `4`,
    levelType: `artist`,
    levelQuestion: `4. Кто исполняет эту мелодию`,
    levelTrack: music[0].src,
    levelAnswers: [
      {
        answerName: music[2].artist,
        answerImg: music[2].image,
        answerValue: `answer-1`,
        isCorrect: false
      },
      {
        answerName: music[1].artist,
        answerImg: music[1].image,
        answerValue: `answer-2`,
        isCorrect: false
      },
      {
        answerName: music[0].artist,
        answerImg: music[0].image,
        answerValue: `answer-3`,
        isCorrect: true
      }
    ]
  },
  {
    levelNumber: `5`,
    levelType: `genre`,
    levelQuestion: `5. Выберите инди-рок треки`,
    levelAnswers: [
      {
        answerTrack: music[0].src,
        answerValue: `answer-1`,
        isCorrect: false
      },
      {
        answerTrack: music[2].src,
        answerValue: `answer-2`,
        isCorrect: false
      },
      {
        answerTrack: music[1].src,
        answerValue: `answer-3`,
        isCorrect: true
      },
      {
        answerTrack: music[1].src,
        answerValue: `answer-4`,
        isCorrect: true
      }
    ]
  },
  {
    levelNumber: `6`,
    levelType: `artist`,
    levelQuestion: `6. Кто исполняет эту мелодию`,
    levelTrack: music[0].src,
    levelAnswers: [
      {
        answerName: music[2].artist,
        answerImg: music[2].image,
        answerValue: `answer-1`,
        isCorrect: false
      },
      {
        answerName: music[1].artist,
        answerImg: music[1].image,
        answerValue: `answer-2`,
        isCorrect: false
      },
      {
        answerName: music[0].artist,
        answerImg: music[0].image,
        answerValue: `answer-3`,
        isCorrect: true
      }
    ]
  },
  {
    levelNumber: `7`,
    levelType: `genre`,
    levelQuestion: `7. Выберите инди-рок треки`,
    levelAnswers: [
      {
        answerTrack: music[0].src,
        answerValue: `answer-1`,
        isCorrect: false
      },
      {
        answerTrack: music[2].src,
        answerValue: `answer-2`,
        isCorrect: false
      },
      {
        answerTrack: music[1].src,
        answerValue: `answer-3`,
        isCorrect: true
      },
      {
        answerTrack: music[1].src,
        answerValue: `answer-4`,
        isCorrect: true
      }
    ]
  },
  {
    levelNumber: `8`,
    levelType: `artist`,
    levelQuestion: `8. Кто исполняет эту мелодию`,
    levelTrack: music[0].src,
    levelAnswers: [
      {
        answerName: music[2].artist,
        answerImg: music[2].image,
        answerValue: `answer-1`,
        isCorrect: false
      },
      {
        answerName: music[1].artist,
        answerImg: music[1].image,
        answerValue: `answer-2`,
        isCorrect: false
      },
      {
        answerName: music[0].artist,
        answerImg: music[0].image,
        answerValue: `answer-3`,
        isCorrect: true
      }
    ]
  },
  {
    levelNumber: `9`,
    levelType: `genre`,
    levelQuestion: `9. Выберите инди-рок треки`,
    levelAnswers: [
      {
        answerTrack: music[0].src,
        answerValue: `answer-1`,
        isCorrect: false
      },
      {
        answerTrack: music[2].src,
        answerValue: `answer-2`,
        isCorrect: false
      },
      {
        answerTrack: music[1].src,
        answerValue: `answer-3`,
        isCorrect: true
      },
      {
        answerTrack: music[1].src,
        answerValue: `answer-4`,
        isCorrect: true
      }
    ]
  },
  {
    levelNumber: `10`,
    levelType: `artist`,
    levelQuestion: `10. Кто исполняет эту мелодию`,
    levelTrack: music[0].src,
    levelAnswers: [
      {
        answerName: music[2].artist,
        answerImg: music[2].image,
        answerValue: `answer-1`,
        isCorrect: false
      },
      {
        answerName: music[1].artist,
        answerImg: music[1].image,
        answerValue: `answer-2`,
        isCorrect: false
      },
      {
        answerName: music[0].artist,
        answerImg: music[0].image,
        answerValue: `answer-3`,
        isCorrect: true
      }
    ]
  }
];

export default levels;
