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

const getForecast = async () => {
  try {
    const weather = await getWeather(process.env.CITY);
    console.log(weather);
  } catch (error) {
    if (error?.response?.status == 404) {
      printError('City not found');
    } else if (error?.response?.status == 401) {
      printError('Invalid token');
    } else {
      printError(error.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  // console.log(process.env);
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
  // getWeather('Valencia');
  getForecast();
};

initCLI();
