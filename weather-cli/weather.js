#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValues } from './services/storage.service.js';
import { getWeather, getIcon } from './services/api.service.js';

// Save token
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
// Save city
const saveCity = async (city) => {
  if (!city.length) {
    return printError('City not transferred');
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('City already saved');
  } catch (error) {
    printError(error.message);
  }
};

// Get forecast
const getForecast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValues(TOKEN_DICTIONARY.city));
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
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
    // Save city
    return saveCity(args.c);
  }
  if (args.t) {
    // Save Token
    return saveToken(args.t);
  }
  // getWeather('Valencia');
  return getForecast();
};

initCLI();
