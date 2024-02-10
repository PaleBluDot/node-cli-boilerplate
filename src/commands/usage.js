const chalk = require('chalk');

module.exports = function usage() {
	console.log(`
${chalk.whiteBright('tool [CMD]')}

Commands:
  ${chalk.greenBright('--start, -s')}
    Starts the app. This will initialize the application and start running it.

  ${chalk.greenBright('--build, -b')}
    Builds the app. This will compile the application and prepare it for deployment.

  ${chalk.greenBright('--help, -h')}
    Displays this help message. Use this command if you need information about how to use the tool.

Examples:
  ${chalk.cyanBright('tool --start')}
    Start the application.

  ${chalk.cyanBright('tool --build')}
    Build the application.

  ${chalk.cyanBright('tool --help')}
    Display the help message.

For more information, visit ${chalk.underline.blueBright(
		'https://example.com/documentation'
	)}.
    `);
};
