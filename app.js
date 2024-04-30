const factorial = require('./factorial');

const compute = (array) => {
  const arr = [];
  for (let i = 0; i < 100000000; i++) {
    arr.push(i * i);
  }
  return array.map((el) => factorial(el));
};

const main = () => {
  performance.mark('start');
  const result = [
    compute([5, 6, 7, 8, 9, 10]),
    compute([5, 6, 7, 8, 9, 10]),
    compute([5, 6, 7, 8, 9, 10]),
    compute([5, 6, 7, 8, 9, 10]),
  ];
  console.log(result);

  performance.mark('end');
  performance.measure('start to end', 'start', 'end');
  console.log(performance.getEntriesByType('measure').pop());
};

setTimeout(() => {
  console.log('Timeout completed!');
}, 2000);

main();
