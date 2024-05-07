import https from 'https';
import { getKeyValues, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';

const getIcon = (icon) => {
  switch (icon) {
    case '01d':
      return '☀️';
    case '01n':
      return '🌙';
    case '02d':
    case '02n':
      return '⛅';
    case '03d':
    case '03n':
      return '☁️';
    case '04d':
    case '04n':
      return '☁️';
    case '09d':
    case '09n':
      return '🌧️';
    case '10d':
    case '10n':
      return '🌦️';
    case '11d':
    case '11n':
      return '🌩️';
    case '13d':
    case '13n':
      return '❄️';
    case '50d':
    case '50n':
      return '🌫️';
    default:
      return '';
  }
};

const getWeather = async (city) => {
  const token = await getKeyValues(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error('Token not found, set the token using the command: weather -t <token>');
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'en',
      units: 'metric',
    },
  });
  return data;
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

  // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  // url.searchParams.append('q', city);
  // url.searchParams.append('appid', token);
  // url.searchParams.append('lang', 'en');
  // url.searchParams.append('units', 'metric');

  // https.get(url, (response) => {
  //   let res = '';
  //   response.on('data', (chunk) => {
  //     res += chunk;
  //   });

  //   response.on('end', () => {
  //     // const data = JSON.parse(res);
  //     console.log(res);
  //   });

  //   // res.on('error', (error) => {
  //   //   console.error(error);
  //   // });
  // });
};

export { getWeather, getIcon };
