import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' Error: ') + ' ' + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen(' Success: ') + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' Help ')}
    Without Params - Show weather
    -c - [CITY] from choose city
    -h - Show help
    -t - [API_KEY] Save token
    `,
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(' Weather ')}
    City: ${res.name} ${icon}
    Country: ${res.sys.country}
    Temperature: ${res.main.temp}°C
    Feels like: ${res.main.feels_like}°C
    Humidity: ${res.main.humidity}%
    Description: ${res.weather[0].description}
    Wind speed: ${res.wind.speed} m/s
    Wind speed: ${(res.wind.speed * 3.6).toFixed(2)} km/h
    Pressure: ${res.main.pressure} hPa
    Visibility: ${res.visibility} m
    Rain: ${res.rain ? res.rain['1h'] : 0} mm
    Sunrise: ${new Date(res.sys.sunrise * 1000).toLocaleTimeString()}
    Sunset: ${new Date(res.sys.sunset * 1000).toLocaleTimeString()}
    
    `,
  );
};

export { printError, printSuccess, printHelp, printWeather };
