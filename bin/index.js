#!/usr/bin/env node
const logger = require('../src/logger')('bin');
const arg = require('arg');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start');
const build = require('../src/commands/build'); // Import your build function
const usage = require('../src/commands/flags/usage'); // Adjusted path

try {
	const args = arg(
		{
			'--help': Boolean,
			'-h': '--help', // Map -h to --help
		},
		{
			permissive: true,
		}
	);

	logger.debug('Received', args);

	const command = args._[0]; // Get the command

	if (command === 'start') {
		const config = getConfig();
		start(config);
	} else if (command === 'build') {
		const config = getConfig();
		build(config); // Call your build function
	} else if (args['--help'] || !command) {
		usage(); // Call usage function
	} else {
		console.log(`Unrecognized command: ${command}`);
		usage();
	}
} catch (e) {
	logger.warning(e.message);
	console.log();
	usage();
}
