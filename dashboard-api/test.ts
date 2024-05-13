class Coord {
  lat: number;
  lon: number;

  protected test() {
    if (this.lat > 0) {
      console.log('Lat is positive');
    } else {
      console.log('Lat is negative');
    }
  }

  computeDistance(newLat: number, newLon: number) {
    this.test();
    return 0;
  }

  constructor(lat: number, lon: number) {
    this.lat = lat;
    this.lon = lon;
  }
}

const point = new Coord(0, 1);
point.lat = 10;
point.lon = 20;

class MapLocathion extends Coord {
  private _name: string;

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value + '!';
  }

  override computeDistance(newLat: number, newLon: number) {
    console.log(this._name);
    this.test();
    return 0;
  }

  constructor(lat: number, lon: number, name: string) {
    super(lat, lon);
    this._name = name;
  }
}

const loc = new MapLocathion(0, 1, 'Test');
loc.name = 'Test';

interface LoggerService {
  log(s: string): void;
}

class Logger implements LoggerService {
  public log(s: string) {
    console.log(s);
  }

  private error(s: string) {}
}

const l = new Logger();
l.log('Hello');
// l.error('Error'); // Error: Property 'error' is private and only accessible within class 'Logger'.

class MyClass<T> {
  a: T;
}

const b = new MyClass<string>();
b.a = 'Hello';

abstract class AbstractClass {
  print(s: string) {
    console.log(s);
  }

  abstract test(s: string): void;
}

class AbstractClassImpl extends AbstractClass {
  test(s: string) {
    // console.log(s);
  }
}

new AbstractClassImpl().print('Hello');

class Animal {
  name: string;
}

class Dog extends Animal {
  name: string;
  breed: string;
}

const puppy: Animal = new Dog();
