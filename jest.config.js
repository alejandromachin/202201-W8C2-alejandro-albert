const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: [
    "**/*.js",
    "!**/*.config.js",
    "!**/coverage/**/*.js",
    "!.next/**/*",
    "!/coverage/**/*",
  ],
};

module.exports = createJestConfig(customJestConfig);
