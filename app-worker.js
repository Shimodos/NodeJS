const { Worker } = require('worker_threads');

const compute = (array) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: { array },
    });
    worker.on('message', (msg) => {
      console.log(worker.threadId);
      resolve(msg);
    });

    worker.on('error', (err) => {
      reject(err);
    });

    worker.on('exit', (code) => {
      console.log('Worker stopped with exit code', code);
    });
  });
};

const main = async () => {
  try {
    performance.mark('start');
    const result = await Promise.all([
      compute([5, 6, 7, 8, 9, 10]),
      compute([5, 6, 7, 8, 9, 10]),
      compute([5, 6, 7, 8, 9, 10]),
      compute([5, 6, 7, 8, 9, 10]),
    ]);
    console.log(result);

    performance.mark('end');
    performance.measure('start to end', 'start', 'end');
    console.log(performance.getEntriesByType('measure').pop());
  } catch (err) {
    console.log(err.message);
  }
};

setTimeout(() => {
  console.log('Timeout completed!');
}, 1000);

main();
