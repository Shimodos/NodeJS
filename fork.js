process.on('message', (msg) => {
  if (msg === 'disconnect') {
    process.disconnect();
    return;
  }
  console.log(`Message from parent: ${msg}`);
  process.send('Hello from child!');
});
