import runGame from '../index.js';
import getRandomNumber from '../get-random.js';

const description = 'What is the result of the expression?';

const calculate = (int1, int2, operator) => {
  switch (operator) {
    case '*':
      return int1 * int2;
    case '-':
      return int1 - int2;
    case '+':
      return int1 + int2;
    default:
      throw new Error("Wrong operator, should be '*', '-' or '+'");
  }
};

const getRoundData = () => {
  const operators = ['*', '-', '+'];
  const int1 = getRandomNumber();
  const int2 = getRandomNumber();
  const operatorIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorIndex];
  const questionContent = `${int1} ${operator} ${int2}`;
  const correctAnswer = calculate(int1, int2, operator);

  return [questionContent, correctAnswer.toString()];
};

const play = () => {
  runGame(description, getRoundData);
};

export default play;
