import { dir } from 'console';
import { homedir } from 'os';
import { join } from 'path';

const filePath = join(homedir(), 'weather-cli.json');

const saveKeyValue = (key, value) => {};

export { saveKeyValue };
