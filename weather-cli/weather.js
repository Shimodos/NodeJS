#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    return printError('Token not transferred');
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Token already saved');
  } catch (error) {
    printError(error.message);
  }
};

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
    // Token
    return saveToken(args.t);
  }
  getWeather('Valencia');
};

initCLI();
