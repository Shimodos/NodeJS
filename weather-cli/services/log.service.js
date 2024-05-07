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

export { printError, printSuccess, printHelp };
