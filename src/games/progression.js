import getRandomNumber from '../utils/getRandomNumber.js';

const getProgression = () => {
  const progressionStart = getRandomNumber();
  const shift = getRandomNumber();
  return Array(getRandomNumber(5, 10)).fill(null).map((el, idx) => progressionStart + idx * shift);
};

const getProgressionGameRound = () => {
  const progression = getProgression();
  const hiddenIndex = getRandomNumber(0, progression.length - 1);

  return {
    question: progression.map((el, idx) => (idx === hiddenIndex ? '..' : el)).join(' '),
    answer: progression[hiddenIndex],
  };
};

export default {
  description: 'What number is missing in the progression?',
  getRound: getProgressionGameRound,
};
