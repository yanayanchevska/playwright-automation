import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';

test('Verify login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

  // Verify URL is "https://practicesoftwaretesting.com/account"
  await expect(page).toHaveURL('/account');

  // Verify the page title is "My account"
 await expect(accountPage.pageTitle).toHaveText('My account');

  // Verify username "Jane Doe" appears in the navigation bar
 await expect(accountPage.header.username).toBeVisible();
 await expect(accountPage.header.username).toHaveText('Jane Doe');
});