const types = [
	{
		value: 'build',
		name: '🔩 build: Update to the documentation',
	},
	{
		value: 'chore',
		name: "🧽 chore: Doesn't modify src files",
	},
	{
		value: 'docs',
		name: '📚 docs: Update to the documentation',
	},
	{
		value: 'feat',
		name: '✨ feat: A new feature',
	},
	{
		value: 'fix',
		name: '🐞 fix: A bug fix',
	},
	{
		value: 'refactor',
		name: '♻  refactor: Neither fixes nor adds a feature',
	},
	{
		value: 'revert',
		name: '⏪ revert: Reverts a previous commit',
	},
	{
		value: 'test',
		name: '🚨 test: Reverts a previous commit',
	},
];

const scopes = ['config', 'dependencies', 'lib', 'utils', 'wip'].map(
	(name) => ({
		name,
	})
);

module.exports = {
	types,
	scopes,
	messages: {
		type: "Type of change that you're committing:",
		scope: '\nSCOPE of this change (optional):',
		customScope: 'Custom SCOPE of this change:',
		subject: 'SHORT, IMPERATIVE tense description:\n',
		body: 'LONGER description change (optional):\n',
		breaking: 'BREAKING CHANGES (optional):\n',
		footer: 'CLOSED ISSUES (optional):\n',
		confirmCommit: 'Are you sure you want to commit?',
	},
	allowCustomScopes: false,
	allowBreakingChanges: ['feat', 'fix'],
	subjectLimit: 60,
};
