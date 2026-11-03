const { test, expect } = require('@playwright/test');
const { connectToBrowser } = require('../utils/setup');
const { teardown } = require('../utils/teardown');

test('Login and Logout Test', async ({}, testInfo) =>
{
  const capability = testInfo.project.metadata.capability;
  const username = process.env.E2E_USERNAME;
  const password = process.env.E2E_PASSWORD;

  if (!username || !password) {
    throw new Error('E2E_USERNAME and E2E_PASSWORD must be set to run the login test.');
  }

  const browser = await connectToBrowser(capability);
  const page = await browser.newPage();

  try {
    await page.goto('/index.php?route=account/login');
    await page.fill('#input-email', username);
    await page.fill('#input-password', password);
    await page.click('input[type="submit"][value="Login"]');
    await expect(page).toHaveURL(/account/);
    await page.click("//a[contains(text(),'Logout')]");
    await expect(page).toHaveURL(/logout/);
    await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`);
  } catch (e) {
    await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: e.stack } })}`);
    throw e;
  } finally {
    await teardown(page, browser);
  }
});
