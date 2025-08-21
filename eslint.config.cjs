// Flat config wrapper to reuse existing .eslintrc.cjs rules in ESLint v9+
// The flat config format expects an array of config objects.
// Flat config for ESLint v9+ converted from .eslintrc.cjs
module.exports = [
	{
		// files to ignore (replacement for ignorePatterns)
		ignores: ['*.cjs'],
		// reuse recommended configs and prettier
		extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
		languageOptions: {
			parser: require.resolve('@typescript-eslint/parser'),
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2020
			}
		},
		plugins: {
			'svelte3': require('eslint-plugin-svelte3'),
			'@typescript-eslint': require('@typescript-eslint/eslint-plugin')
		},
		settings: {
			'svelte3/typescript': () => require('typescript')
		},
		env: {
			browser: true,
			es2017: true,
			node: true
		}
	},
	// override for .svelte files to use the svelte3 processor
	{
		files: ['**/*.svelte'],
		processor: 'svelte3/svelte3'
	}
];
