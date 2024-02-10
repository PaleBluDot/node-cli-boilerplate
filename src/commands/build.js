const logger = require('../logger')('commands:build');

module.exports = function build(config) {
	logger.highlight('  building the app  ');
	console.log();
	logger.debug('Received configuration', config);
};
