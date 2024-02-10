#!/usr/bin/env node
const logger = require('../src/logger')('bin');
const arg = require('arg');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start');
const build = require('../src/commands/build');
const usage = require('../src/commands/usage');

try {
	const args = arg({
		'--start': Boolean,
		'-s': '--start',
		'--build': Boolean,
		'-b': '--build',
		'--help': Boolean,
		'-h': '--help',
	});

	logger.debug('Received args', args);

	if (args['--start']) {
		const config = getConfig();
		start(config);
	} else if (args['--build']) {
		const config = getConfig();
		build(config);
	} else if (args['--help']) {
		usage();
	}
} catch (e) {
	logger.warning(e.message);
	console.log();
	usage();
}
