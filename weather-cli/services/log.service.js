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
    Temperature: ${res.main.temp}°C
    Feels like: ${res.main.feels_like}°C
    Humidity: ${res.main.humidity}%
    Description: ${res.weather[0].description}
    Wind speed: ${res.wind.speed} m/s
    `,
  );
};

export { printError, printSuccess, printHelp, printWeather };
