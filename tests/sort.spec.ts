import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

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

const priceSortOptions = ['Price (High - Low)', 'Price (Low - High)'];

for (const option of priceSortOptions) {
  test(`Verify sorting by ${option}`, async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.sortProductsBy(option);

    await expect(async () => {
      const prices = await homePage.getProductPrices();
      let expected = [...prices].sort((a, b) => b - a);

      if (option === 'Price (Low - High)') {
        expected = expected.reverse();
      }

      expect(prices).toEqual(expected);
    }).toPass();
  });
}