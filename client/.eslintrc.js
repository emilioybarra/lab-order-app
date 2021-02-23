module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/base',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    'array-callback-return': 'off',
    curly: [ 'error', 'all' ],
    semi: [ 'error', 'never' ],
    quotes: [ 'error', 'single' ],
    eqeqeq: [ 'error', 'smart' ],
    'vue/eqeqeq': [ 'error', 'smart' ],
    'vue/no-unused-vars': [ 'error' ],
    'key-spacing': [ 'error' ],
    'vue/key-spacing': [ 'error' ],
    'comma-spacing': [ 'error' ],
    'arrow-spacing': [ 'error' ],
    'vue/arrow-spacing': [ 'error' ],
    'block-spacing': [ 'error' ],
    'vue/block-spacing': [ 'error' ],
    'no-trailing-spaces': [ 'error' ],
    'eol-last': [ 'error', 'always' ],
    'keyword-spacing': [ 'error' ],
    'vue/keyword-spacing': [ 'error' ],
    'comma-style': [ 'error', 'last' ],
    'comma-dangle': [ 'error', 'never' ],
    'vue/comma-dangle': [ 'error', 'never' ],
    'spaced-comment': [ 'error', 'always' ],
    'space-in-parens': [ 'error', 'never' ],
    'vue/this-in-template': [ 'error', 'never' ],
    'vue/v-on-function-call': [ 'error', 'never' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'vue/array-bracket-spacing': [ 'error', 'always' ],
    'template-curly-spacing': [ 'error', 'always' ],
    'computed-property-spacing': [ 'error', 'never' ],
    'vue/attribute-hyphenation': [ 'error', 'always' ],
    'vue/object-curly-spacing': [ 'error', 'always' ],
    'vue/name-property-casing': [ 'off' ],
    'vue/component-definition-name-casing': [ 'off', 'kebab-case' ],
    'vue/custom-event-name-casing': [ 'off' ],
    'vue/require-default-prop': [ 'off' ],
    'vue/no-use-v-if-with-v-for': [ 'off' ],
    'vue/no-template-shadow': [ 'off' ],
    'vue/no-v-html': [ 'off' ],
    'space-infix-ops': [ 'error', {
      int32Hint: false
    } ],
    indent: [ 'error', 2, {
      SwitchCase: 1
    } ],
    'object-curly-spacing': [ 'error', 'always', {
      arraysInObjects: true,
      objectsInObjects: true
    } ],
    'brace-style': [ 'error', '1tbs', {
      allowSingleLine: true
    } ],
    'vue/brace-style': [ 'error', '1tbs', {
      allowSingleLine: true
    } ],
    camelcase: [ 'error', {
      properties: 'never',
      ignoreDestructuring: true
    } ],
    'vue/camelcase': [ 'error', {
      properties: 'never',
      ignoreDestructuring: true
    } ],
    'vue/html-indent': [ 'error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      ignores: []
    } ],
    'vue/script-indent': [ 'error', 2, {
      baseIndent: 1
    } ],
    'vue/html-closing-bracket-spacing': [ 'error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    } ],
    'vue/html-closing-bracket-newline': [ 'error', {
      singleline: 'never',
      multiline: 'always'
    } ],
    'vue/no-multi-spaces': [ 'error', {
      ignoreProperties: false
    } ],
    'vue/v-slot-style': [ 'error', {
      atComponent: 'shorthand',
      default: 'shorthand',
      named: 'shorthand'
    } ],
    'vue/component-tags-order': [ 'error', {
      order: [ 'template', 'script', 'style' ]
    } ],
    'vue/singleline-html-element-content-newline': [ 'off' ],
    'vue/order-in-components': [ 'error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        [ 'delimiters', 'comments' ],
        [ 'components', 'directives', 'filters' ],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        [ 'props', 'propsData' ],
        'data',
        'fetch',
        'asyncData',
        'validations',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        [ 'template', 'render' ],
        'renderError'
      ]
    } ]
  },
  overrides: [
    {
      files: [ '*.vue' ],
      rules: {
        indent: 'off'
      }
    }
  ]
}
