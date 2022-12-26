#!/usr/bin/env node
import evenGame from '../src/games/even-game.js';
import runGame from '../src/index.js';
import getPlayer from '../src/cli.js';

runGame(getPlayer(), evenGame.description, evenGame.getRound);
