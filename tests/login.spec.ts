import { test, expect } from '../fixtures';

test('Verify login with valid credentials', async ({ page, loggedInApp }) => {
  await test.step('Navigate to login page', async () => {
    await page.goto('/account');
  });

   await test.step('Verify account page details', async () => {
  await expect(page).toHaveURL('/account');
  await expect(loggedInApp.accountPage.pageTitle).toHaveText('My account');
  await expect(loggedInApp.accountPage.header.username).toBeVisible();
});
});