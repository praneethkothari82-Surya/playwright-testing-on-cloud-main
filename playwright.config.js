const { defineConfig } = require('@playwright/test');
const capabilities = require('./config/capabilities');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['html', { open: 'never' }]],
  outputDir: './test-results',
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io",
    trace: 'on-first-retry',
  },
  projects: capabilities.map(capability => ({
    name: capability['LT:Options']['name'],
    metadata: { capability },
  })),
  workers: 3,
  retries: process.env.CI ? 1 : 0,
});
