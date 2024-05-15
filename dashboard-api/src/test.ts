function Component(id: number) {
  console.log('init');
  return (target: Function) => {
    console.log('run');
    target.prototype.id = id;
  };
}

function Logger() {
  console.log('init Logger');
  return (target: Function) => {
    console.log('run Logger');
  };
}

function Method(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(propertyKey);
  descriptor.value = function (...args: any[]) {
    return args[0] * 10;
  };
}

function Prop(target: Object, propertyKey: string) {
  console.log(propertyKey);
  let value: number;

  const getter = function () {
    console.log('getter');
    return value;
  };

  const setter = function (newVal: number) {
    console.log('setter');
    value = newVal;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
  });
}

function Param(target: Object, propertyKey: string, parameterIndex: number) {
  console.log(propertyKey, parameterIndex);
}

@Component(1)
@Logger()
export class User {
  @Prop id: number;

  @Method
  update(@Param newId: number) {
    this.id = newId;
    return this.id;
  }
}

console.log(new User().id);
console.log(new User().update(2));
