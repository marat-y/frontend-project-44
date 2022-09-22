import runGame from '../index.js';
import getRandomNumber from '../get-random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const questionContent = getRandomNumber();
  const correctAnswer = isEven(questionContent) ? 'yes' : 'no';

  return [questionContent, correctAnswer];
};

const play = () => {
  runGame(description, getRoundData);
};

export default play;
