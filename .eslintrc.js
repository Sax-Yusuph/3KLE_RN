module.exports = {
	root: true,
	extends: [
		'react-native-typescript',
		// 'plugin:import/errors',
		// 'plugin:import/warnings',
		'plugin:import/typescript',
	],
	rules: {
		indent: 'off', //['error', 'tab'],
		curly: 'off',
		semi: ['error', 'never'],
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
}
