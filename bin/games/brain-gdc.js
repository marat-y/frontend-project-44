#!/usr/bin/env node

import { runGame, getRandomNumber } from '../../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAttrs = () => {
  const int1 = getRandomNumber();
  const int2 = getRandomNumber();
  const questionContent = `${int1} ${int2}`;
  let i = (int1 <= int2) ? int1 : int2;
  let correctAnswer;
  while (i > 0) {
    if ((int1 % i === 0) && (int2 % i === 0)) {
      correctAnswer = i;
      break;
    }
    i -= 1;
  }

  return [questionContent, correctAnswer.toString()];
};

runGame(description, getQuestionAttrs);
