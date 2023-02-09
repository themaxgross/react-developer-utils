/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "../coverage",

  coverageProvider: "v8",

  injectGlobals: true,

  preset: "ts-jest",
  testEnvironment: "node",

  rootDir: ".",

  roots: ["<rootDir>"],

  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.jest.json",
      },
    ],
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@utils/(.*)$": "<rootDir>/utils/$1",
  },
};
