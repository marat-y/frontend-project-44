import readlineSync from 'readline-sync';

const runGame = (description, questionFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let correctAnswersCount = 0;
  const neededAnswersCount = 3;
  while (correctAnswersCount < neededAnswersCount) {
    const [questionContent, correctAnswer] = questionFunction();
    console.log(`Question: ${questionContent}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break; // если поставить return, то не будет выводиться "Let's try again ..."
    }
  }

  if (correctAnswersCount === neededAnswersCount) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export default runGame;
