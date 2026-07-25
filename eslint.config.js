import js from '@eslint/js'
import globals from 'globals'

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules,
      // `motion` (framer-motion) and capitalised component vars like `Tag`
      // are referenced only inside JSX (`<motion.div>`, `<Tag>`). Core ESLint
      // can't see JSX usage without eslint-plugin-react, which we skip on
      // purpose — it bundles a legacy minimatch flagged by npm audit — so we
      // allow those identifiers here instead.
      'no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^(motion|[A-Z_])', argsIgnorePattern: '^[A-Z_]' },
      ],
    },
  },
]
