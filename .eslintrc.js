module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "func-names": "off",
    "prefer-rest-params": "off",
    "no-plusplus": "off",
    "no-unused-vars": "off",
  },
};
