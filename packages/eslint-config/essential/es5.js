module.exports = {
  extends: [
    '../es5',
    './rules/set-style-to-warn',
    './rules/blacklist',
  ].map((path) => require.resolve(path)),
  rules: {
    // 逗号风格 - ES5 中不加最后一个逗号
    // @unessential
    'comma-dangle': ['warn', 'never'],
  },
};
