import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-cli.json');

const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExists(filePath)) {
    const file = await promises.readFile(filePath, 'utf-8');
    data = JSON.parse(file);
  }

  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data), 'utf-8');
};

const getKeyValues = async () => {
  if (await isExists(filePath)) {
    const file = await promises.readFile(filePath, 'utf-8').catch((error) => console.error(error));
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

const isExists = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

export { saveKeyValue, getKeyValues };
