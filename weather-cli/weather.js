#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, prinSuccess } from './services/log.servicie.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  // console.log(args);
  if (args.h) {
    // Show help
    printHelp();
  }
  if (args.c) {
    // Show settings
  }
  if (args.t) {
    // Show temperature
  }
};

initCLI();
