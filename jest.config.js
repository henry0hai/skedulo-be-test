module.exports = {
  roots: ['<rootDir>/server'],
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  collectCoverage: true,
  collectCoverageFrom: [
    'server/models/*.{js,ts}',
    'server/services/*.{js,ts}',
    'server/controllers/*.{js,ts}',
    'server/repositories/*.{js,ts}',
    'server/tests/**/*.{js,ts}'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
