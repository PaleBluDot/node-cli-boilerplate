const logger = require('../logger')('commands:start');

module.exports = function start(config) {
	logger.highlight('  Starting the app  ');
	console.log();
	logger.debug('Received configuration', config);
};
