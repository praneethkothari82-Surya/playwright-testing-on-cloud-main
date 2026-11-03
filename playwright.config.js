const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [
    ['allure-playwright'],
    ['html', { open: 'never' }],
  ],
  outputDir: './test-results',
  use: {
    baseURL: 'https://www.userfeel.com/tester-faq',
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
  workers: 3,
  retries: process.env.CI ? 1 : 0,
});
