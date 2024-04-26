// import character, * as char from './character.mjs';
// import log, { characters, greet as hello } from './character.mjs';

async function main() {
  try {
    const { characters, greet } = await import('./character.mjs');
    for (const character of characters) {
      greet(character);
    }
  } catch (error) {
    console.log('error');
  }
}

main();
// log();
