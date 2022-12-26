#!/usr/bin/env node
import primeGame from '../src/games/prime.js';
import runGame from '../src/index.js';
import getPlayer from '../src/cli.js';

runGame(getPlayer(), primeGame.description, primeGame.getRound);
