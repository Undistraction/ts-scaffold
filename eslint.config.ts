import tanstackQuery from '@tanstack/eslint-plugin-query'
import vitest from '@vitest/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import checkFile from 'eslint-plugin-check-file'
import playwright from 'eslint-plugin-playwright'
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export default tseslint.config(
  {
    ignores: [
      `node_modules/`,
      `dist/`,
      `public/`,
      `coverage/`,
      `playwright-report/`,
    ],
  },
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  // TanStack Query recommended rules for React Query best practices
  ...tanstackQuery.configs[`flat/recommended`],
  {
    plugins: {
      'react-hooks': reactHooks,
      // Warns when a file mixes React component exports with non-component
      // exports (constants, utilities, etc.), which breaks React Fast Refresh
      // (HMR) during development — Vite can't do hot updates on those files and
      // falls back to a full reload.
      'react-refresh': reactRefresh,
      // Use the unused-imports plugin to remove unused imports
      'unused-imports': unusedImports,
      // Unicorn plugin for various useful rules
      unicorn,
      'prefer-arrow-functions': preferArrowFunctions,
      // Rules for file and dir naming
      'check-file': checkFile,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        `warn`,
        { allowConstantExport: true },
      ],
      // Disallow nested ternary expressions
      'no-nested-ternary': `error`,
      // Turn off the base rule and use unused-imports plugin instead
      '@typescript-eslint/no-unused-vars': `off`,
      'unused-imports/no-unused-imports': `error`,
      'unused-imports/no-unused-vars': [
        `warn`,
        {
          vars: `all`,
          varsIgnorePattern: `^_`,
          args: `after-used`,
          argsIgnorePattern: `^_`,
        },
      ],
      'no-restricted-imports': [
        `error`,
        {
          patterns: [
            {
              group: [`../*`, `../../*`, `../../../*`, `../../../../*`],
              message: `Use @/* alias imports instead of relative parent imports`,
            },
          ],
        },
      ],
      // Use backticks for all strings, allowing single/double quotes to avoid
      // escaping.
      quotes: [`error`, `backtick`, { avoidEscape: true }],
      // Use type keyword for type imports
      '@typescript-eslint/consistent-type-imports': [
        `error`,
        { prefer: `type-imports`, fixStyle: `inline-type-imports` },
      ],
      // Use interface over type for object type definitions where possible
      '@typescript-eslint/consistent-type-definitions': [`error`, `interface`],
      // Prevent logical checks that are unnecessary
      '@typescript-eslint/no-unnecessary-condition': `error`,
      // Use nullish coalescing (??) instead of || where appropriate
      '@typescript-eslint/prefer-nullish-coalescing': `error`,
      // Use optional chaining (?.) instead of && where appropriate
      '@typescript-eslint/prefer-optional-chain': `error`,
      // Prefer arrow functions over function expressions
      'prefer-arrow-functions/prefer-arrow-functions': [
        `error`,
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],

      //------------------------------------------------------------------------
      // Unicorn rules
      //------------------------------------------------------------------------
      // Enforce kebab-case for folder and file names. Exceptions for config
      // files and dotfiles.
      'check-file/folder-naming-convention': [
        `error`,
        { 'src/**': `KEBAB_CASE`, 'tests/**': `KEBAB_CASE` },
      ],
      'check-file/filename-naming-convention': [
        `error`,
        { '**/src/**': `KEBAB_CASE`, '**/tests/**': `KEBAB_CASE` },
        { ignoreMiddleExtensions: true },
      ],
      // Prefer for...of over .forEach() for better performance and readability
      'unicorn/no-array-for-each': `error`,
      // Prefer .some() over .find() when only checking existence
      'unicorn/prefer-array-some': `error`,
      // Prefer .find() over .filter()[0]
      'unicorn/prefer-array-find': `error`,
      // Prefer .includes() over .indexOf() !== -1
      'unicorn/prefer-includes': `error`,
      // Enforce node: protocol for Node.js built-ins (e.g., node:path)
      'unicorn/prefer-node-protocol': `error`,
      // Require new keyword when throwing errors
      'unicorn/throw-new-error': `error`,
      // Prefer .slice() over .substr() and .substring()
      'unicorn/prefer-string-slice': `error`,
      // Prefer .startsWith() and .endsWith() over regex patterns
      'unicorn/prefer-string-starts-ends-with': `error`,
      // Prefer ternary expressions over simple if-else statements
      'unicorn/prefer-ternary': `error`,
      // Disallow if as the only statement in if/else blocks
      'unicorn/no-lonely-if': `error`,
      // Prefer spread operator over Array.from() for iterable to array conversion
      'unicorn/prefer-spread': `error`,
      // Prefer Number.isNaN() over global isNaN() for type safety
      'unicorn/prefer-number-properties': `error`,
      // Require TypeError for type-related errors
      'unicorn/prefer-type-error': `error`,
      // Move function declarations to highest scope when possible
      'unicorn/consistent-function-scoping': `error`,
      // Disallow useless undefined returns
      'unicorn/no-useless-undefined': `error`,
      // Prefer default parameters over reassignment
      'unicorn/prefer-default-parameters': `error`,

      //------------------------------------------------------------------------
      // Restricted syntax
      //------------------------------------------------------------------------
      'no-restricted-syntax': [
        // Force using Icon-suffixed imports from lucide-react
        `error`,
        {
          selector: `ImportDeclaration[source.value="lucide-react"] > ImportSpecifier[imported.name=/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/]:not([imported.name=/Icon$/])`,
          message: `Use the Icon-suffixed version from lucide-react (e.g., ArrowDownIcon instead of ArrowDown)`,
        },
      ],
    },
  },

  // ---------------------------------------------------------------------------
  // Unit-Test-Specific Config
  // ---------------------------------------------------------------------------
  {
    files: [`**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      // Allow any type in test files for mocking
      '@typescript-eslint/no-explicit-any': `off`,
      // Allow non-null assertions in tests
      '@typescript-eslint/no-non-null-assertion': `off`,
    },
    languageOptions: {
      globals: {
        vi: `readonly`,
        describe: `readonly`,
        it: `readonly`,
        expect: `readonly`,
        beforeEach: `readonly`,
        afterEach: `readonly`,
        beforeAll: `readonly`,
        afterAll: `readonly`,
      },
    },
  },

  // ---------------------------------------------------------------------------
  // E2E-Test-Specific Config
  // ---------------------------------------------------------------------------
  {
    files: [`tests/e2e/**/*.spec.{ts,tsx}`],
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,
      // Allow any type in E2E test files
      '@typescript-eslint/no-explicit-any': `off`,
    },
    languageOptions: {
      globals: {
        page: `readonly`,
        browser: `readonly`,
        context: `readonly`,
        expect: `readonly`,
        test: `readonly`,
        describe: `readonly`,
        beforeEach: `readonly`,
        afterEach: `readonly`,
        beforeAll: `readonly`,
        afterAll: `readonly`,
      },
    },
  },
)
