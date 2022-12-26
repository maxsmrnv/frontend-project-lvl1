#!/usr/bin/env node
import evenGame from '../src/games/even.js';
import runGame from '../src/index.js';
import getPlayer from '../src/cli.js';

runGame(getPlayer(), evenGame.description, evenGame.getRound);
