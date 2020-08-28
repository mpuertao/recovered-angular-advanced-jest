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
  coverageReporters: [
    "html",
    "json",
    "text",
    "lcov",
    "clover",
    "cobertura"
  ],
  reporters: [
    "default",
    "jest-junit"
  ]
};
