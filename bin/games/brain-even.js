#!/usr/bin/env node

import { runGame, getRandomNumber } from '../../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAttrs = () => {
  const questionContent = getRandomNumber(10);
  const correctAnswer = questionContent % 2 === 0 ? 'yes' : 'no';

  return [questionContent, correctAnswer];
};

runGame(description, getQuestionAttrs);
