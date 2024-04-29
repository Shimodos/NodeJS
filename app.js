const perf_hooks = require('perf_hooks');

test = perf_hooks.performance.timerify(test); // Wrapping the function with timerify

const PerformanceObserver = new perf_hooks.PerformanceObserver((items, observer) => {
  console.log(items.getEntries());
  const entry = items.getEntries('slow').pop();
  console.log(`The time taken is ${entry.name}  ${entry.duration}`);
  observer.disconnect();
});

PerformanceObserver.observe({
  entryTypes: ['measure', 'function'],
  buffered: true,
});

function test() {
  const arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(i * i);
  }
}

function slow() {
  performance.mark('start');
  const arr = [];
  for (let i = 0; i < 7000000; i++) {
    arr.push(i * i);
  }
  performance.mark('end');
  performance.measure('slow', 'start', 'end');

  // console.log(performance.getEntriesByName('slow'));
}

slow();
test();
