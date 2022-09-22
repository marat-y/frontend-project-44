import runGame from '../index.js';
import getRandomNumber from '../get-random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (integer) => {
  const validPrimeDividers = [1, integer];
  let result = true;
  for (let i = integer; i >= 2; i -= 1) {
    if (integer % i === 0 && !(validPrimeDividers.includes(i))) {
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
