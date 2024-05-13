interface HasLength {
  length: number;
}

function log<T extends HasLength, K>(obj: T, arr: K[]): K[] {
  obj.length;
  console.log(obj);
  return arr;
}

log<string, number>('Hello, world!', [1, 2, 3]);

interface IUser {
  name: string;
  age?: number;
  bid: <T>(n: T) => boolean;
}

function bid<T>(n: T): boolean {
  return true;
}
