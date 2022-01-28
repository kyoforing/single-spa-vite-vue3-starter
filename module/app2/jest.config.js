module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue3-jest'
  },
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.spec.[jt]s?(x)',
    '**/__tests__/**/*.spec.[jt]s?(x)'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.vscode/', '/dist/'],
  watchPathIgnorePatterns: ['/node_modules/', '/.vscode/', '/dist/']
};
