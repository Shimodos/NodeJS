//Enam

type direct = 'left' | 'right' | 'up' | 'down';

enum Direction {
  Left,
  Right,
  Up,
  Down,
}

function move(direction: direct) {
  switch (direction) {
    case 'left':
      return -1;
    case 'right':
      return 1;
    case 'up':
      return -1;
    case 'down':
      return 1;
  }
}

function objMod(odj: { Left: number }) {
  return (odj.Left = 1);
}

objMod(Direction);

const enum Direction2 {
  Left,
  Right,
  Up,
  Down,
}

let myDirection = Direction2.Left;
let myDirection2 = Direction2.Right;
