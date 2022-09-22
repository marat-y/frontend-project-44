import runGame from '../index.js';
import getRandomNumber from '../get-random.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (int1, int2) => {
  let i = (int1 <= int2) ? int1 : int2;
  let gcd;
  while (i > 0) {
    if ((int1 % i === 0) && (int2 % i === 0)) {
      gcd = i;
      break;
    }
    i -= 1;
  }

  return gcd;
};

const getRoundData = () => {
  const int1 = getRandomNumber(0, 100);
  const int2 = getRandomNumber(0, 100);
  const questionContent = `${int1} ${int2}`;
  const correctAnswer = findGcd(int1, int2);

  return [questionContent, correctAnswer.toString()];
};

const play = () => {
  runGame(description, getRoundData);
};

export default play;
