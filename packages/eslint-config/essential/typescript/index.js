module.exports = {
  extends: [
    '../index',
    '../../rules/typescript',
    '../rules/ts-blacklist',
  ].map((path) => require.resolve(path)),
};
