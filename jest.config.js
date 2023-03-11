const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/.out/',
    '__tests__/utils',
  ],
  resolver: '<rootDir>/jest.resolver.js',
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
};

module.exports = createJestConfig(customJestConfig)
