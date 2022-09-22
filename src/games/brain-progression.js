import runGame from '../index.js';
import getRandomNumber from '../get-random.js';

const description = 'What number is missing in the progression?';

const getProgression = (progressionLength, progressBy, startingInteger) => {
  const progression = [startingInteger];
  while (progression.length < progressionLength) {
    progression.push(progression[progression.length - 1] + progressBy);
  }

  return progression;
};

const getRoundData = () => {
  const progressBy = getRandomNumber();
  const progressionLength = getRandomNumber(5, 10);
  const startingInteger = getRandomNumber();
  const progression = getProgression(progressionLength, progressBy, startingInteger);

  const hiddenPosition = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenPosition];
  progression[hiddenPosition] = '..';

  const questionContent = progression.join(' ');

  return [questionContent, correctAnswer.toString()];
};

const play = () => {
  runGame(description, getRoundData);
};

export default play;
