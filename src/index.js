import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const askQuestion = (questionContent) => {
  console.log(`Question: ${questionContent}`);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const wonGame = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const lostGame = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export const runGame = (description, questionFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let correctAnswersCount = 0;
  const neededAnswersCount = 3;
  while (correctAnswersCount < neededAnswersCount) {
    const [questionContent, correctAnswer] = questionFunction();
    askQuestion(questionContent);
    const userAnswer = getUserAnswer();
    if (correctAnswer === userAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }

  if (correctAnswersCount === neededAnswersCount) {
    wonGame(userName);
  } else {
    lostGame(userName);
  }
};

export const getRandomNumber = (max) => Math.round(Math.random() * max);
