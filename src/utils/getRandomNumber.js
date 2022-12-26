const MAX_RANDOM_VALUE = 100;

const getRandomNumber = (max = MAX_RANDOM_VALUE) => Math.round(Math.random() * max);

export default getRandomNumber;
