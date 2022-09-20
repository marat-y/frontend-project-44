#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const getQuestionInteger = () => Math.round(Math.random() * 10);

const askQuestion = (int) => {
  console.log(`Question: ${int}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const isEven = (int) => int % 2 === 0;

const getCorrectAnswer = (int) => (isEven(int) ? 'yes' : 'no');

const isAnswerCorrect = (int, answer) => getCorrectAnswer(int) === answer;

const notifyOfCorrectAnswer = () => {
  console.log('Correct!');
};

const notifyOfWrongAnswer = (questionInteger, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(questionInteger)}'.`);
};

const wonGame = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const lostGame = (name) => {
  console.log(`Let's try again, ${name}!`);
};

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswersCount = 0;
const neededAnswersCount = 3;
while (correctAnswersCount < neededAnswersCount) {
  const questionInteger = getQuestionInteger();
  askQuestion(questionInteger);
  const userAnswer = getAnswer();
  if (isAnswerCorrect(questionInteger, userAnswer)) {
    correctAnswersCount += 1;
    notifyOfCorrectAnswer();
  } else {
    notifyOfWrongAnswer(questionInteger, userAnswer);
    break;
  }
}

correctAnswersCount === neededAnswersCount ? wonGame(userName) : lostGame(userName);
