import readlineSync from 'readline-sync';

const GAMES_COUNT_TO_WIN = 3;

const buildErrorString = (playerAnswer, correctAnswer) => `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

const runGame = (player, gameDescription, getGameRound) => {
  let continueGame = true;
  let gamesCount = 0;

  console.log(gameDescription);

  do {
    const { question, answer } = getGameRound();
    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Your answer: ');
    const isCorrectAnswer = playerAnswer.toString() === answer.toString();

    if (isCorrectAnswer) {
      console.log('Correct!');
      gamesCount += 1;
      if (gamesCount === GAMES_COUNT_TO_WIN) {
        console.log(`Congratulations, ${player}!`);
        continueGame = false;
      }
    } else {
      console.log(buildErrorString(playerAnswer, answer));
      console.log(`Let's try again, ${player}!`);
      continueGame = false;
    }
  } while (continueGame);
};

export default runGame;
