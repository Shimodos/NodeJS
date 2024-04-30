const { fork } = require('child_process');

const forkProccess = fork('./fork.js');

forkProccess.on('message', (msg) => {
  console.log(`Message: ${msg}`);
});

forkProccess.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});

forkProccess.send('Hello from parent!');
forkProccess.send('disconnect');
