const a = 'test';

let b: 'test1' = 'test1';

type diraction = 'up' | 'down' | 'left' | 'right';

function move(dir: diraction) {
  switch (dir) {
    case 'up':
      console.log('Moving up');
      break;
    case 'down':
      console.log('Moving down');
      break;
    case 'left':
      console.log('Moving left');
      break;
    case 'right':
      console.log('Moving right');
      break;
    default:
      return 0;
  }
}

move('up');

interface IConect {
  host: string;
  port: number;
}

function connect(config: IConect | 'default') {
  if (config === 'default') {
    console.log('Using default config');
  } else {
    console.log(`Using ${config.host}:${config.port}`);
  }
}

const req = {
  host: 'localhost',
  protocol: 'https' as 'http' | 'https',
};

function logAccess(host: string, protocol: 'http' | 'https') {}

logAccess(req.host, req.protocol);
