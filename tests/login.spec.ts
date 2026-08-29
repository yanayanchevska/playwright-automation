import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {
  // Open URL
  await page.goto('/auth/login');

  // Fill in credentials
  await page.getByPlaceholder('Email').fill('customer@practicesoftwaretesting.com');
  await page.getByPlaceholder('Password').fill('welcome01');

  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify URL is "https://practicesoftwaretesting.com/account"
  await expect(page).toHaveURL('/account');

  // Verify the page title is "My account"
  await expect(page.locator('[data-test="page-title"]')).toHaveText('My account');

  // Verify username "Jane Doe" appears in the navigation bar
  await expect(page.getByText('Jane Doe')).toBeVisible();
});