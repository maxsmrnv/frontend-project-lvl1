#!/usr/bin/env node
import calcGame from '../src/games/calculator.js';
import runGame from '../src/index.js';
import getPlayer from '../src/cli.js';

runGame(getPlayer(), calcGame.description, calcGame.getRound);
