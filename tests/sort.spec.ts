import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.use({ storageState: 'auth/session.json' });

const sortOptions = ['Name (A - Z)', 'Name (Z - A)'];

for (const option of sortOptions) {
  test(`Verify sorting by ${option}`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.sortProductsBy(option);

    await expect(async () => {
      const names = await homePage.getProductNames();
      let expected = [...names].sort();

      if (option === 'Name (Z - A)') {
        expected = expected.reverse();
      }

      expect(names).toEqual(expected);
    }).toPass();
  });
}