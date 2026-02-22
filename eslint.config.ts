import eslintConfigPrettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
  {
    ignores: [`node_modules/`, `dist/`, `coverage/`],
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- react-hooks plugin types incompatible with ESLint 10, pending stable release
      'react-hooks': reactHooks as any,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        `warn`,
        { allowConstantExport: true },
      ],
      '@typescript-eslint/consistent-type-imports': [
        `error`,
        { prefer: `type-imports`, fixStyle: `inline-type-imports` },
      ],
      '@typescript-eslint/no-unused-vars': [
        `error`,
        { argsIgnorePattern: `^_`, varsIgnorePattern: `^_` },
      ],
      quotes: [`error`, `backtick`],
    },
  },
  {
    files: [`**/*.{test,spec}.{ts,tsx}`],
    rules: {
      '@typescript-eslint/no-explicit-any': `off`,
    },
  },
)
