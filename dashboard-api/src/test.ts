import 'reflect-metadata';

function Injectebl(key: string) {
  return (target: Function) => {
    Reflect.defineMetadata(key, 1, target);
    const meta = Reflect.getMetadata(key, target);
    console.log(meta);
  };
}

function inject(target: Object, name: string) {
  console.log(target, name);
}

function Prop(target: Object, name: string) {}
@Injectebl('C')
export class C {
  @Prop prop: number;
}

@Injectebl('D')
export class D {
  constructor(@inject c: C) {}
}
