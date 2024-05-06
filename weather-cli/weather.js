#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, prinSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
  try {
    await saveKeyValue('token', token);
    prinSuccess('Token already saved');
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
};

initCLI();
