module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 11,
    allowImportExportEverywhere: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    curly: [ 'error', 'all' ],
    semi: [ 'error', 'always' ],
    quotes: [ 'error', 'single' ],
    eqeqeq: [ 'error', 'smart' ],
    'key-spacing': [ 'error' ],
    'comma-spacing': [ 'error' ],
    'arrow-spacing': [ 'error' ],
    'block-spacing': [ 'error' ],
    'no-trailing-spaces': [ 'error' ],
    'eol-last': [ 'error', 'always' ],
    'keyword-spacing': [ 'error' ],
    'comma-style': [ 'error', 'last' ],
    'comma-dangle': [ 'error', 'never' ],
    'spaced-comment': [ 'error', 'always' ],
    'space-in-parens': [ 'error', 'never' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'template-curly-spacing': [ 'error', 'always' ],
    'computed-property-spacing': [ 'error', 'never' ],
    'space-infix-ops': [ 'error', {
      'int32Hint': false
    } ],
    indent: [ 'error', 2, {
      'SwitchCase': 1
    } ],
    'object-curly-spacing': [ 'error', 'always', {
      arraysInObjects: true,
      objectsInObjects: true
    } ],
    'brace-style': [ 'error', '1tbs', {
      allowSingleLine: true
    } ]
  }
};
