// Typeof operator
let a = 'Hello World';

if (typeof a === 'string') {
  console.log(a);
}

let b: typeof a = 'Hello World';

// Keyof operator
type Coord = {
  lat: number;
  long: number;
};

type P = keyof Coord;

let c: P = 'lat';

// Null and undefined
function log(a: string | null) {
  if (a === null) {
    console.log('a is null');
  } else {
    a.toLowerCase();
  }
}

//Void
function log2(a: string): void {
  console.log(a);
}

const d: bigint = BigInt(100);
const e: unique symbol = Symbol('foo');
const f: symbol = Symbol('bar');
