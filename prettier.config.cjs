const config = {
	plugins: [
		'prettier-plugin-organize-imports',
		'prettier-plugin-packagejson',
		'prettier-plugin-tailwindcss',
	],
	printWidth: 80,

	tabWidth: 2,
	useTabs: true,

	semi: true,

	singleQuote: true,

	jsxSingleQuote: false,

	quoteProps: 'as-needed',

	trailingComma: 'es5',

	bracketSpacing: true,

	bracketSameLine: true,

	arrowParens: 'avoid',

	htmlWhitespaceSensitivity: 'css',

	singleAttributePerLine: true,

	proseWrap: 'preserve',

	endOfLine: 'lf',

	embeddedLanguageFormatting: 'auto',

	experimentalTernaries: false,

	overrides: [
		{
			files: '*.html',
			options: { plugins: [] },
		},

		{
			files: '*.{css,scss,less}',
			options: { singleQuote: false },
		},

		{
			files: '*.{json,jsonc}',
			options: { trailingComma: 'none' },
		},

		{
			files: '*.{md,mdx}',
			options: { proseWrap: 'preserve', useTabs: false },
		},

		{
			files: '*.{yml,yaml}',
			options: { tabWidth: 2, useTabs: false, singleQuote: true },
		},

		{
			files: ['.prettierrc', 'tsconfig.json', 'tsconfig.*.json', '*.json'],
			options: { plugins: [] },
		},
	],
};

module.exports = config;
