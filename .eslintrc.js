module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'max-len': [
      'error',
      240,
      4,
      {
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'max-statements': ['error', 24],
    'no-console': 'off',
    'comma-dangle': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-return-assign': 'off',
    'no-unused-vars': 'error',
    'no-empty': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': 'off',
    'no-return-await': 'warn',
    'object-shorthand': ['error', 'always'],
    'no-extra-semi': 'off',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'no-prototype-builtins': 'off',
    'no-void': 'off',
  },
}
