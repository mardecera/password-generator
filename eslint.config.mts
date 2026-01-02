import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import { defineConfig } from 'eslint/config'

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
	tseslint.configs.recommended,
	{
		files: ['**/*.json'],
		plugins: { json },
		language: 'json/json',
		extends: ['json/recommended'],
	},
	{
		files: ['**/*.jsonc'],
		plugins: { json },
		language: 'json/jsonc',
		extends: ['json/recommended'],
	},
	{
		files: ['**/*.json5'],
		plugins: { json },
		language: 'json/json5',
		extends: ['json/recommended'],
	},
	{
		files: ['**/*.md'],
		plugins: { markdown },
		language: 'markdown/gfm',
		extends: ['markdown/recommended'],
	},
	{
		files: [
			'apps/web/**/*.{ts,tsx}',
			'apps/mobile/**/*.{ts,tsx}',
			'packages/**/*.{ts,tsx}',
		],
		...pluginReact.configs.flat.recommended,
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		files: ['apps/mobile/**/*.{ts,tsx,js,jsx}'],
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},
	{
		ignores: [
			'**/node_modules/**',
			'**/dist/**',
			'**/.next/**',
			'**/.expo/**',
			'**/.turbo/**',
			'**/.css/**',
		],
	},
	{
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
		},
	},
])
