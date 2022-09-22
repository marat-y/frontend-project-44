import runGame from '../index.js';
import getRandomNumber from '../get-random.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (integerOne, integerTwo) => {
  let i = (integerOne <= integerTwo) ? integerOne : integerTwo;
  let gcd;
  while (i > 0) {
    if ((integerOne % i === 0) && (integerTwo % i === 0)) {
      gcd = i;
      break;
    }
    i -= 1;
  }

  return gcd;
};

const getRoundData = () => {
  const integerOne = getRandomNumber(0, 100);
  const integerTwo = getRandomNumber(0, 100);
  const questionContent = `${integerOne} ${integerTwo}`;
  const correctAnswer = findGcd(integerOne, integerTwo);

  return [questionContent, correctAnswer.toString()];
};

const play = () => {
  runGame(description, getRoundData);
};

export default play;
