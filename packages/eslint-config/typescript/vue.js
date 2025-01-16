module.exports = {
  extends: [
    './index',
    '../rules/vue',
  ].map((path) => require.resolve(path)),
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
    parser: '@typescript-eslint/parser',
  },
};
