import getRandomNumber from '../utils/getRandomNumber.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const getPrimeGameRound = () => {
  const value = getRandomNumber();
  return {
    question: value,
    answer: isPrime(value) ? 'yes' : 'no',
  };
};

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound: getPrimeGameRound,
};
