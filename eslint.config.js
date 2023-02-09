const reactRecommended = require("eslint-plugin-react/configs/recommended");
const reactJsx = require("eslint-plugin-react/configs/jsx-runtime");
const globals = require("globals");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

const tsOverrideConfig = tsPlugin.configs["eslint-recommended"].overrides[0];
const tsRecommemdedConfig = tsPlugin.configs.recommended;

const files = ["src/**/*.ts", "src/**/*.tsx"];

module.exports = [
  {
    ignores: [
      "eslint.config.js",
      "coverage/**/*",
      "dist/**/*",
      "node_modules/**/*",
      "lib/**/*",
    ],
    files,
  },
  {
    files,
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
  },
  { rules: tsOverrideConfig.rules },
  { rules: tsRecommemdedConfig.rules },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files,
    ...reactRecommended,
  },
  {
    files,
    ...reactJsx,
  },
  {
    files,
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
];
