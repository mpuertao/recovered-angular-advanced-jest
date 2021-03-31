const path = require("path");
const rootDir = path.join(__dirname);

module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setupJest.ts"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|ngx-socket-io|ngx-auto-unsubscribe)",
  ],
  transform: {
  "^.+\\.(ts|js|html)$": "ts-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/cypress/",
  ],
  coverageDirectory: path.join(`${rootDir}`, '/coverage/'), //  Ruta donde quedará los reportes
  coverageReporters: ["html","json","text","lcov","clover"],
  reporters: [
    "default",
    ["jest-junit", {outputDirectory: "./coverage/", outputName: "junit.xml"}],
    ["jest-html-reporters", {publicPath: "./coverage/", filename: "report-jest.html"}],
    "jest-sonar"
  ]
};
