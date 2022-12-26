import readlineSync from 'readline-sync';

const getPlayer = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default getPlayer;
