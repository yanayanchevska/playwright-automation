import { test } from '@playwright/test';

test('authenticate', async ({ page }) => {

  await page.goto('/auth/login');
  await page.getByPlaceholder('Your email').fill('customer@practicesoftwaretesting.com');
  await page.getByPlaceholder('Your password').fill('welcome01');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('/account');

  await page.context().storageState({ path: 'auth/session.json' });
});