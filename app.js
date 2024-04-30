// const { exec } = require('child_process');

// const childProcce = exec('dir', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });

// childProcce.on('exit', (code) => {
//   console.log(`Child process exited with code ${code}`);
// });

const { spawn } = require('child_process');

const childProcce = spawn('dir');

childProcce.stdout.on('data', (data) => {
  console.log(`stdout ${data}`);
});

childProcce.stderr.on('data', (data) => {
  console.log(`stderr ${data}`);
});

childProcce.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`);
});
