import { test, expect } from '@playwright/test';
import { AccountPage } from '../pages/AccountPage';

test.use({ storageState: 'auth/session.json' });

test('Verify login with valid credentials', async ({ page }) => {
  const accountPage = new AccountPage(page);

  await page.goto('/account');

  await expect(page).toHaveURL('/account');
  await expect(accountPage.pageTitle).toHaveText('My account');
  await expect(accountPage.username).toBeVisible();
  await expect(accountPage.username).toHaveText('Jane Doe');
});