import { test, expect } from '../fixtures';

test('Verify login with valid credentials', async ({ page, loggedInApp }) => {
  await test.step('Navigate to account page', async () => {
    await page.goto('/account');
    await page.waitForLoadState('domcontentloaded');
  });

  await test.step('Verify account page details', async () => {
    await expect(page).toHaveURL('/account');
    await loggedInApp.accountPage.pageTitle.waitFor({ state: 'visible', timeout: 10000 });
    await expect(loggedInApp.accountPage.pageTitle).toHaveText('My account');
    await expect(loggedInApp.accountPage.header.username).toBeVisible();
  });
});