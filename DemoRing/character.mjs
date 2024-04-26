export const characters = ['Frodo', 'Bilbo'];

export function greet(character) {
  console.log(`Cangretulation! You have got the character ${character}`);
}

export default function () {
  console.log('This is the default export of character.mjs');
}
