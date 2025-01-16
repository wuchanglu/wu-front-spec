module.exports = {
  extends: [
    './rules/jsx-a11y',
  ].map((path) => require.resolve(path))
};
