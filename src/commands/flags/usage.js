const chalk = require('chalk');
const pkg = require('../../../package.json');

module.exports = function usage() {
	console.log(`
${chalk.whiteBright(`${pkg.name} [CMD]`)} v${pkg.version}

${pkg.description}

Commands:
  ${chalk.greenBright('start')}
    Starts the app. This will initialize the application and start running it.

  ${chalk.greenBright('build')}
    Builds the app. This will compile the application and prepare it for deployment.

  ${chalk.greenBright('help')}
    Displays this help message. Use this command if you need information about how to use the tool.

Examples:
  ${chalk.cyanBright(`${pkg.name} start`)}
    Start the application.

  ${chalk.cyanBright(`${pkg.name} build`)}
    Build the application.

  ${chalk.cyanBright(`${pkg.name} help`)}
    Display the help message.

For more information, visit ${chalk.underline.blueBright(
		'https://example.com/documentation'
	)}.
    `);
};
