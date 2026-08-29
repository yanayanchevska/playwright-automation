import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth/session.json' });

test('Verify user can sort products by name A-Z', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="sort"]').selectOption('Name (A - Z)');

  await expect(async () => {
    const names = await page.locator('[data-test="product-name"]').allTextContents();
    expect(names).toEqual([...names].sort());
  }).toPass();

});

test('Verify user can sort products by name Z-A', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-test="sort"]').selectOption('Name (Z - A)');

  await expect(async () => {
    const names = await page.locator('[data-test="product-name"]').allTextContents();
    expect(names).toEqual([...names].sort().reverse());
  }).toPass();
});