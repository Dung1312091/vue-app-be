const chalk = require('chalk');
const log = console.log;
export default {
    success: function (message) {
        log(chalk.green(message));
    },
    info: function (message) {
        log(chalk.blue(message));
    },
    error: function (message) {
        log(chalk.red(message));

    },
    warn: function (message) {
        log(chalk.yellow(message));
    }
}