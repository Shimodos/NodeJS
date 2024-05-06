#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.h) {
    // Show help
    console.log('Help');
  }
  if (args.c) {
    // Show settings
    console.log('City');
  }
  if (args.t) {
    // Show temperature
    console.log('Temperature');
  }
  console.log('Weather CLI');
};

initCLI();
