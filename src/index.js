import readlineSync from 'readline-sync';

const neededAnswersCount = 3;

const runGame = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let correctAnswersCount = 0;
  for (correctAnswersCount; correctAnswersCount < neededAnswersCount; correctAnswersCount += 1) {
    const [questionContent, correctAnswer] = getRoundData();
    console.log(`Question: ${questionContent}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return; // мы размазали логику вывода итогового сообщения по разным местам кода
    }
  }

  if (correctAnswersCount === neededAnswersCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runGame;
