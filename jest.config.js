module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "!client/js/app.js",
        "client/js/**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**"
    ],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.(css|scss|less)$": "jest-css-modules"
    },
    "moduleNameMapper": {
        "\\.(css|scss|svg)$": "identity-obj-proxy"
    },
    setupTestFrameworkScriptFile: "<rootDir>/jest/config.js",
}