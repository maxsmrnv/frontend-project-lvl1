import getRandomNumber from '../utils/getRandomNumber.js';
import getYesNoAnswer from '../utils/getYesNoAnswer.js';

const isEven = (value) => value % 2 === 0;

const getEvenGameRound = () => {
  const value = getRandomNumber();
  return { question: value, answer: getYesNoAnswer(isEven(value)) };
};

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound: getEvenGameRound,
};
