import readlineSync from 'readline-sync';

export const greetUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const getRandomNumber = (min = 0, max = 10) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};
