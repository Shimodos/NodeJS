const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const liogDbConnect = () => {
  console.log('DB connected');
};

myEmitter.addListener('dbConnected', liogDbConnect);
myEmitter.emit('dbConnected');

myEmitter.removeListener('dbConnected', liogDbConnect);
myEmitter.emit('dbConnected');

myEmitter.on('msg', (data) => {
  console.log(`Message: ${data}`);
});

myEmitter.prependListener('msg', (data) => {
  console.log(`Prepended Message: ${data}`);
});

myEmitter.emit('msg', 'Hello World');

myEmitter.once('msgOnce', () => {
  console.log('Message Once');
});

myEmitter.emit('msgOnce');
myEmitter.emit('msgOnce');

console.log(myEmitter.getMaxListeners());
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listenerCount('msg'));
console.log(myEmitter.listenerCount('msgOnce'));
console.log(myEmitter.listeners('msg'));
console.log(myEmitter.eventNames());

//Error Event

myEmitter.on('error', (err) => {
  console.log(`Error: ${err.message}`);
});

myEmitter.emit('error', new Error('Something went wrong'));

const target = new EventTarget();

const logTarget = () => {
  console.log('EventTarget');
};

target.addEventListener('log', logTarget);
target.dispatchEvent(new Event('log'));
