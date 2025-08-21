// Handcrafted flat config — avoids 'extends' and composes minimal rules
module.exports = [
	// top-level ignore rules
	// Note: we intentionally exclude *.svelte from ESLint because the available Svelte ESLint
	// plugin targets Svelte v3 and is incompatible with Svelte 5. For Svelte files we rely on
	// Prettier (prettier-plugin-svelte) and `svelte-check` for diagnostics.
	{
		ignores: [
			'**/.svelte-kit/**',
			'node_modules/**',
			'build/**',
			'*.cjs',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
			'.DS_Store',
			'**/*.svelte'
		]
	},
	// apply ESLint rules only to JS/TS files — we intentionally exclude .svelte for now
	{
		files: ['**/*.js', '**/*.ts'],
		languageOptions: {
			parser: require('@typescript-eslint/parser'),
			parserOptions: { ecmaVersion: 2020, sourceType: 'module' }
		},
		plugins: { '@typescript-eslint': require('@typescript-eslint/eslint-plugin') },
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'prefer-const': 'warn',
			'no-console': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			// keep require-await disabled for now
			'@typescript-eslint/require-await': 'off'
		}
	}
];
