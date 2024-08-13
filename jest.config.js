/** @type {import('jest').Config} */
const jestConfig = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts,jsx,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  moduleFileExtensions: ["js", "ts", "jsx", "tsx"],
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.css$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^services/(.*)$": "<rootDir>/src/services/$1"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  }
  // testMatch: ["**/__tests__/**/*.test.{js,jsx,ts,tsx}"],
  // testPathIgnorePatterns: ["/node_modules/", "/dist/"]
};

export default jestConfig;
