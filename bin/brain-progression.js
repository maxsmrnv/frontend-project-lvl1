#!/usr/bin/env node
import progressionGame from '../src/games/progression.js';
import runGame from '../src/index.js';
import getPlayer from '../src/cli.js';

runGame(getPlayer(), progressionGame.description, progressionGame.getRound);
