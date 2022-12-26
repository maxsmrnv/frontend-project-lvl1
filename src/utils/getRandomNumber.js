const MAX_RANDOM = 100;
const MIN_RANDOM = 0;

const getRandomNumber = (min = MIN_RANDOM, max = MAX_RANDOM) => {
  const random = Math.random() * (max - min) + min;
  return Math.round(random);
};

export default getRandomNumber;
