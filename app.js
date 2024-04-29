const a = 5;

function b() {
  return c();
}

function c() {
  return d();
}

function d() {
  console.log(a);
}

setTimeout(() => {
  console.log('Hello World!');
}, 1000);

b();
