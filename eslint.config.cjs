// Minimal flat ESLint config that provides parser and plugins as modules
// This avoids parse errors while keeping the project using its legacy .eslintrc rules
module.exports = [
  {
    ignores: ['*.cjs'],
    languageOptions: {
      // provide the parser module (exports parse/parseForESLint)
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    plugins: {
      svelte3: require('eslint-plugin-svelte3'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin')
    },
    settings: {
      'svelte3/typescript': () => require('typescript')
    },
    env: {
      browser: true,
      es2020: true,
      node: true
    },
    rules: {}
  },
  {
    files: ['**/*.svelte'],
    processor: 'svelte3/svelte3'
  }
];
