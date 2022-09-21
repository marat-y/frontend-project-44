#!/usr/bin/env node

import { runGame, getRandomNumber } from '../../src/index.js';

const description = 'What number is missing in the progression?';

const getQuestionAttrs = () => {
  const maxProgressionLength = 10;

  const progression = [getRandomNumber(10)];
  const progressBy = getRandomNumber(10);

  while (progression.length < maxProgressionLength) {
    progression.push(progression[progression.length - 1] + progressBy);
  }

  const hiddenPosition = Math.floor(getRandomNumber(10));

  const correctAnswer = progression[hiddenPosition];

  progression[hiddenPosition] = '..';

  const questionContent = progression.join(' ');

  return [questionContent, correctAnswer.toString()];
};

runGame(description, getQuestionAttrs);
