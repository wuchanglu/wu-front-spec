module.exports = {
  extends: [
    '../react',
    '../../rules/typescript',
    '../rules/ts-blacklist',
  ].map((path) => require.resolve(path)),
};
