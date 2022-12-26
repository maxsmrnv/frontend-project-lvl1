#!/usr/bin/env node
import gcdGame from '../src/games/gcd.js';
import runGame from '../src/index.js';
import getPlayer from '../src/cli.js';

runGame(getPlayer(), gcdGame.description, gcdGame.getRound);
