module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  // all plugins (eslint-plugin-xxx) go here:
  plugins: [
    '@typescript-eslint',
    '@next/eslint-plugin-next', // https://github.com/vercel/next.js/blob/canary/packages/eslint-plugin-next/lib/index.js
    'jsx-a11y',
    'jest',
  ],

  // all configs (eslint-config-xxx) go here:
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],

  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
  },
  ignorePatterns: [
    'src/graphql/generated/graphql.ts', // Add the file to be ignored here
  ],
};
