import runGame from '../index.js';
import { getRandomNumber } from '../cli.js';

const description = 'What number is missing in the progression?';

const getQuestionAttrs = () => {
  const maxProgressionLength = 10;

  const progression = [getRandomNumber()];
  const progressBy = getRandomNumber();

  while (progression.length < maxProgressionLength) {
    progression.push(progression[progression.length - 1] + progressBy);
  }

  const hiddenPosition = getRandomNumber(0, 9);

  const correctAnswer = progression[hiddenPosition];

  progression[hiddenPosition] = '..';

  const questionContent = progression.join(' ');

  return [questionContent, correctAnswer.toString()];
};

const play = () => {
  runGame(description, getQuestionAttrs);
};

export default play;
