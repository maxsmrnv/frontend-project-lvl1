import readlineSync from 'readline-sync';
import runApp from './cli.js';

const MAX_RANDOM_VALUE = 100;
const GAMES_COUNT_TO_WIN = 3;
const getRandomNumber = () => Math.round(Math.random() * MAX_RANDOM_VALUE);
const isEven = (value) => value % 2 === 0;
const ANSWER_TO_BOOL = {
  yes: true,
  no: false,
};
const getTextByBoolValue = (value) => Object.entries(ANSWER_TO_BOOL)
  .find(([, boolVal]) => value === boolVal)
  ?.at(0);

export default () => {
  const player = runApp();
  let continueGame = true;
  let gamesCount = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  do {
    const value = getRandomNumber();
    console.log(`Question: ${value}`);

    const playerAnswer = readlineSync.question('Your answer: ');
    const isEvenInput = isEven(value);

    if (isEvenInput === ANSWER_TO_BOOL[playerAnswer]) {
      console.log('Correct!');
      gamesCount += 1;

      if (gamesCount === GAMES_COUNT_TO_WIN) {
        console.log(`Congratulations, ${player}!`);
        continueGame = false;
      }
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${getTextByBoolValue(isEvenInput)}'.`);
      console.log(`Let's try again, ${player}!`);
      continueGame = false;
    }
  } while (continueGame);
};
