import runGame from '../index.js';
import getRandomNumber from '../get-random.js';

const description = 'What is the result of the expression?';

const calculate = (integerOne, integerTwo, operator) => {
  switch (operator) {
    case '*':
      return integerOne * integerTwo;
    case '-':
      return integerOne - integerTwo;
    case '+':
      return integerOne + integerTwo;
    default:
      throw new Error("Wrong operator, should be '*', '-' or '+'");
  }
};

const getRoundData = () => {
  const operators = ['*', '-', '+'];
  const integerOne = getRandomNumber();
  const integerTwo = getRandomNumber();
  const operatorIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const questionContent = `${integerOne} ${operator} ${integerTwo}`;
  const correctAnswer = calculate(integerOne, integerTwo, operator);

  return [questionContent, correctAnswer.toString()];
};

const play = () => {
  runGame(description, getRoundData);
};

export default play;
