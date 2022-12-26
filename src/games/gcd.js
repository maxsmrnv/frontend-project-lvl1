import getRandomNumber from '../utils/getRandomNumber.js';

const getGCD = (a, b) => {
  let absA = Math.abs(a);
  let absB = Math.abs(b);

  while (absA && absB) {
    if (absA > absB) absA %= absB;
    else absB %= absA;
  }
  return Math.max(absA, absB);
};

const getGCDGameRound = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  return { question: `${a} ${b}`, answer: getGCD(a, b) };
};

export default {
  description: 'Find the greatest common divisor of given numbers.',
  getRound: getGCDGameRound,
};
