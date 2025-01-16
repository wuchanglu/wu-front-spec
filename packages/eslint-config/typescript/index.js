module.exports = {
  extends: [
    '../index',
    '../rules/typescript',
  ].map((path) => require.resolve(path)),
};
