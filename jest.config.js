module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  moduleNameMapping: {
    '^react-simple-comps$': '<rootDir>/src/index.ts',
  },
};
