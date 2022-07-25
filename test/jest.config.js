/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');

const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/jest.config.ts`);

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'end2end-tests',
    testMatch: ['**/*.spec.ts'],
  },
};
