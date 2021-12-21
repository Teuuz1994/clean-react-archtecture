module.exports = {
  root: ['<rootDir>/src'],
  collecCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironments: 'node',
  transform: {
    '.+\\.spec.ts$': 'ts-jest'
  }
}
