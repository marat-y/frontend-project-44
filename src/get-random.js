const getRandomNumber = (min = 0, max = 10) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

export default getRandomNumber;
