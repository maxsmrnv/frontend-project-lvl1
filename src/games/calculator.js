import getRandomNumber from '../utils/getRandomNumber.js';

const getRandomOperator = () => {
  const operators = '+-*';
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const getCalculation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getCalcGameRound = () => {
  const operator = getRandomOperator();
  const a = getRandomNumber();
  const b = getRandomNumber();

  return { question: `${a} ${operator} ${b}`, answer: getCalculation(a, b, operator) };
};

export default {
  description: 'What is the result of the expression?',
  getRound: getCalcGameRound,
};
