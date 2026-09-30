import { test, expect } from '../fixtures';

test('Verify login with valid credentials', async ({ page, loggedInApp }) => {
  await page.goto('/account');

  await expect(page).toHaveURL('/account');
  await expect(loggedInApp.accountPage.pageTitle).toHaveText('My account');
  await expect(loggedInApp.accountPage.header.username).toBeVisible();
});