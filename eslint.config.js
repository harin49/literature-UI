const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jsx-control-statements/recommended'],
  plugins: ['react-hooks', 'jsx-control-statements'],
  rules: {
    semi: [ERROR, 'always'],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'no-console': ERROR,
    'react/jsx-filename-extension': OFF,
    'react/jsx-wrap-multilines': OFF,
    'react/jsx-closing-tag-location': OFF,
    'react/jsx-no-undef': [ERROR, { allowGlobals: true }],
    'react/jsx-props-no-spreading': OFF,
    'react/no-multi-comp': ERROR,
    'react/forbid-prop-types': OFF,
    'import/no-unresolved': ERROR,
  },
  parser: 'babel-eslint',
};
