module.exports = {
  extends: [
    './index',
    './rules/react',
  ].map((path) => require.resolve(path)),
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};
