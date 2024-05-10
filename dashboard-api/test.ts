type coord = { x: number; y: number };

interface ICoord {
  x: number;
  y: number;
}

type ID = number | string;
type myString = string;

function compute(coord: ICoord) {
  return coord.x + coord.y;
}

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: 'dog',
  age: 5,
  breed: 'labrador',
};
dog.age = 6;

type DogType = {
  name: string;
};

// Обьединение типов
type Dog2 = DogType & {
  breed: string;
};

const dog2: Dog2 = {
  name: 'dog',
  breed: 'labrador',
};

interface IDog {
  name: string;
}

interface IDog {
  breed: string;
}

const dog3: IDog = {
  name: 'dog',
  breed: 'labrador',
};
