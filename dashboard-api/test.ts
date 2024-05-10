let univesalId: number | string = 123;
univesalId = '123';

function printId(id: number | string) {
  if (typeof id == 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function helloUser(name: string | string[]) {
  if (Array.isArray(name)) {
    console.log(name.join(', '));
  } else {
    console.log(name);
  }
}
