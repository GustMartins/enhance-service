module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: 'eslint:recommended',
  ignorePatterns: [],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  rules: {
    indent: [ 'error', 2 ],
  },
};
