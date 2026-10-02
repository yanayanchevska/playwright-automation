import { test, expect } from '../fixtures';

test('Verify login with valid credentials', async ({ page, loggedInApp }) => {
  await page.goto('/'); 
  await page.waitForLoadState('domcontentloaded');
  await page.goto('/account'); 
  
  await expect(page).toHaveURL('/account');
  await expect(loggedInApp.accountPage.pageTitle).toHaveText('My account', { timeout: 15000 });
  await expect(loggedInApp.accountPage.header.username).toBeVisible();
});