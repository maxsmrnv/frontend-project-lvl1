import getRandomNumber from '../utils/getRandomNumber.js';

const isEven = (value) => value % 2 === 0;

const getEvenGameRound = () => {
  const value = getRandomNumber();
  return { question: value, answer: isEven(value) ? 'yes' : 'no' };
};

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound: getEvenGameRound,
};
