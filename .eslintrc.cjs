module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['airbnb-base', 'plugin:jest/recommended', 'prettier'],
	plugins: ['jest'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'import/extensions': 0,
		'import/prefer-default-export': 0,
	},
};
