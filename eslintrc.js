module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base'
  ],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': ['error', { code: 120 }],
    'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
    camelcase: 'off',
    semi: ['error', 'always'],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
};
