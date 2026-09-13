import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { PowerToolsSubcategory } from '../enums';

test('Verify user can filter products by category', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.filterByCategory(PowerToolsSubcategory.Sander);

  await expect(async () => {
    const names = await homePage.getProductNames();
    const allContainSander = names.every(name => name.includes('Sander'));
    expect(allContainSander).toBe(true);
  }).toPass();
});