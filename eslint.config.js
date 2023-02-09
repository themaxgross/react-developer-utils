const reactRecommended = require("eslint-plugin-react/configs/recommended");

module.exports = [
  {
    ignores: ["eslint.config.js"],
  },
  "eslint:recommended",
  {
    files: ["./src/**/*.ts, ./src/**/*.tsx"],
    ...reactRecommended,
  },
];
