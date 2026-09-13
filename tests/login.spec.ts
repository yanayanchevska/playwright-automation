import { test, expect } from '@playwright/test';
import { AccountPage } from '../pages/AccountPage';

test.use({ storageState: 'auth/session.json' });

test('Verify login with valid credentials', async ({ page }) => {
  const accountPage = new AccountPage(page);

  await page.goto('/account');

  await expect(page).toHaveURL('/account');

  // Verify the page title is "My account"
  await expect(accountPage.pageTitle).toHaveText('My account');

  // Verify username "Jane Doe" appears in the navigation bar
  await expect(accountPage.header.username).toBeVisible();
  await expect(accountPage.header.username).toHaveText('Jane Doe');
});