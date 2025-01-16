module.exports = {
  extends: [
    './index',
    '../../rules/vue', // vue 要置于最后，因为里面用了 vue-parser
  ].map((path) => require.resolve(path)),
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
