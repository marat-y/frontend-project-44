import runGame from '../index.js';
import { getRandomNumber } from '../cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAttrs = () => {
  const questionContent = getRandomNumber();
  const correctAnswer = questionContent % 2 === 0 ? 'yes' : 'no';

  return [questionContent, correctAnswer];
};

const play = () => {
  runGame(description, getQuestionAttrs);
};

export default play;
