const fs = require('fs');

console.log('Init');

setTimeout(() => {
  console.log(performance.now(), 'Timeout 0');
}, 100);

setImmediate(() => {
  console.log('Immediate 0');
});

fs.readFile(__filename, () => {
  console.log('FS');
});

setTimeout(() => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log('done 1');

  Promise.resolve().then(() => {
    console.log('Promise 2');
  });

  process.nextTick(() => {
    console.log('NextTick 1');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

process.nextTick(() => {
  console.log('NextTick 0');
});

console.log('Final');
