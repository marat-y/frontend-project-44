#!/usr/bin/env node

import { runGame, getRandomNumber } from '../../src/index.js';

const description = 'What is the result of the expression?';

const getQuestionAttrs = () => {
  const operators = ['*', '-', '+'];
  const int1 = getRandomNumber();
  const int2 = getRandomNumber();
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const questionContent = `${int1} ${operator} ${int2}`;
  let correctAnswer;
  switch (operator) {
    case '*':
      correctAnswer = int1 * int2;
      break;
    case '-':
      correctAnswer = int1 - int2;
      break;
    case '+':
      correctAnswer = int1 + int2;
      break;
    default:
      break;
  }

  return [questionContent, correctAnswer.toString()];
};

runGame(description, getQuestionAttrs);
