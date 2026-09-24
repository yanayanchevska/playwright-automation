import { test, expect } from '../fixtures';
import { PowerToolsSubcategory } from '../enums';

test('Verify user can filter products by category', async ({ page, app }) => {
  await app.homePage.goto();
  await app.homePage.filterByCategory(PowerToolsSubcategory.Sander);

  await expect(async () => {
    const names = await app.homePage.getProductNames();
    const allContainSander = names.every(name => name.includes('Sander'));
    expect(allContainSander).toBe(true);
  }).toPass();
});