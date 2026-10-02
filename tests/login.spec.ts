import { test, expect } from '../fixtures';

test('Verify login with valid credentials', async ({ page, loggedInApp }) => {
    const token = await page.evaluate(() => window.localStorage.getItem('auth-token'));
  console.log('TOKEN IN LOGIN TEST:', token);
  await test.step('Navigate to account page', async () => {
    await page.goto('/account');
    await page.waitForLoadState('domcontentloaded');
  });

  await test.step('Verify account page details', async () => {
    await expect(page).toHaveURL('/account');
    await expect(loggedInApp.accountPage.pageTitle).toHaveText('My account');
    await expect(loggedInApp.accountPage.header.username).toBeVisible();
  });
});