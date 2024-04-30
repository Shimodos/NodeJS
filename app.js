const { performance, PerformanceObserver } = require('perf_hooks'); // Импорт модуля для работы с производительностью
const { Worker } = require('worker_threads'); // Импорт модуля для работы с потоками
const { fork } = require('child_process'); // Импорт модуля для работы с процессами

const perfObserver = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.name}, ${entry.duration}`);
  });
});

perfObserver.observe({
  entryTypes: ['measure'],
  buffered: true,
});

const workerFunction = (array) => {
  return new Promise((resolve, reject) => {
    performance.mark('workerStart');

    const worker = new Worker('./worker.js', { workerData: { array } });

    worker.on('message', (msg) => {
      performance.mark('workerEnd');
      performance.measure('worker:', 'workerStart', 'workerEnd');

      resolve(msg);
    });
  });
};

const forkFunction = (array) => {
  return new Promise((resolve, reject) => {
    performance.mark('forkStart');

    const forkProccess = fork('./fork.js');
    forkProccess.send({ array });
    forkProccess.on('message', (msg) => {
      performance.mark('forkEnd');
      performance.measure('fork:', 'forkStart', 'forkEnd');

      resolve(msg);
    });
  });
};

const main = async () => {
  await workerFunction([1, 2, 3, 4, 5]);
  await forkFunction([1, 2, 3, 4, 5]);
};

main();
