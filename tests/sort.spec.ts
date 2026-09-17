import { test, expect } from '../fixtures';

const sortOptions = ['Name (A - Z)', 'Name (Z - A)'];

for (const option of sortOptions) {
  test(`Verify sorting by ${option}`, async ({ app, page }) => {
    await app.homePage.goto();
    await app.homePage.sortProductsBy(option);

    await expect(async () => {
      const names = await app.homePage.getProductNames();
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
  test(`Verify sorting by ${option}`, async ({ app, page }) => {
    await app.homePage.goto();
    await app.homePage.sortProductsBy(option);

    await expect(async () => {
      const prices = await app.homePage.getProductPrices();
      let expected = [...prices].sort((a, b) => b - a);

      if (option === 'Price (Low - High)') {
        expected = expected.reverse();
      }

      expect(prices).toEqual(expected);
    }).toPass();
  });
}