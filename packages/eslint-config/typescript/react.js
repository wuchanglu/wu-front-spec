module.exports = {
  extends: [
    '../react',
    '../rules/typescript',
  ].map((path) => require.resolve(path)),
};
