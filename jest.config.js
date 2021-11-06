module.exports = {
  verbose: true,
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns:['<rootDir>/.next','<rootDir>/node_modules'],
  setupFilesAfterEnv:['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/mock.js",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': "<rootDir>/__mocks__/mock.js",
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: './coverage',
}