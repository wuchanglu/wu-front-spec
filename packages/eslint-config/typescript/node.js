module.exports = {
  extends: [
    './index',
    '../rules/node',
  ].map((path) => require.resolve(path)),
};
