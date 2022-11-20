module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  rules: {
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 3],
    'max-lines': ['error', 500],
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/function-component-definition': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/tabindex-no-positive': 'off',
    'react/no-unstable-nested-components': 'off',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['**/redux-store/**/*.ts', '**/api-client.ts'],
      rules: {
        'no-param-reassign': 'off',
        'max-params': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
