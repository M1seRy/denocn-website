const intentSize = 2;
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  plugins: ['@typescript-eslint', 'react'],
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    JSX: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
      modules: true,
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false,
  },
  rules: {
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'react/no-array-index-key': 'off',
    'global-require': 'off',
    'react/jsx-no-bind': 'off',
    'react/button-has-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/destructuring-assignment': 'off',
    'react/jsx-indent-props': ['error', intentSize],
    'react/jsx-indent': ['error', intentSize],
    indent: ['error', intentSize, { SwitchCase: 1 }],
    camelcase: 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/indent': ['error', intentSize, { SwitchCase: 1 }],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
  },
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.ts', '.tsx', '.jsx'] } },
    react: {
      version: 'detect',
    },
  },
};
