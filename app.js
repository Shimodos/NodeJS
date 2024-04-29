// const start = performance.now();
// setTimeout(() => {
//   console.log(performance.now() - start);
//   console.log('setTimeout');
// }, 1000);

// function myFunc(arg) {
//   console.log(`Argument: ${arg}`);
// }

// setTimeout(myFunc, 1000, 'Hello, world!');

// const timerId = setTimeout(() => {
//   console.log('boom');
// }, 5000);

// setTimeout(() => {
//   clearTimeout(timerId);
//   console.log('cleared');
// }, 1000);

// const intervalId = setInterval(() => {
//   console.log(performance.now());
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log('cleared');
// }, 4000);

// console.log('Before setTimeout');

// setImmediate(() => {
//   console.log('setImmediate');
// });

// console.log('Behind setTimeout');

//Unref

const timerId = setTimeout(() => {
  console.log('boom');
}, 5000);

timerId.unref();

setImmediate(() => {
  timerId.ref();
});
