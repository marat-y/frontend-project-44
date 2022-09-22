import runGame from '../index.js';
import { getRandomNumber } from '../cli.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAttrs = () => {
  const number = getRandomNumber(2, 100);
  const validPrimeDividers = [1, number];
  const questionContent = number;
  let isPrime = 'yes';
  for (let i = number; i >= 2; i -= 1) {
    if (number % i === 0 && !(validPrimeDividers.includes(i))) {
      isPrime = 'no';
      break;
    }
  }
  const correctAnswer = isPrime;

  return [questionContent, correctAnswer];
};

const play = () => {
  runGame(description, getQuestionAttrs);
};

export default play;
