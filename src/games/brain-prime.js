import runGame from '../index.js';
import getRandomNumber from '../get-random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (int) => {
  const validPrimeDividers = [1, int];
  let result = true;
  for (let i = int; i >= 2; i -= 1) {
    if (int % i === 0 && !(validPrimeDividers.includes(i))) {
      result = false;
      break;
    }
  }

  return result;
};

const getRoundData = () => {
  const number = getRandomNumber(2, 100);
  const questionContent = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [questionContent, correctAnswer];
};

const play = () => {
  runGame(description, getRoundData);
};

export default play;
