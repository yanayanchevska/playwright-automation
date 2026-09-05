import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth/session.json' });

const sortOptions = ['Name (A - Z)', 'Name (Z - A)'];

for (const option of sortOptions) {
  test(`Verify sorting by ${option}`, async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="sort"]').selectOption(option);

    await expect(async () => {
     // eslint-disable-next-line playwright/prefer-web-first-assertions -- need actual array to sort and compare
      const names = await page.locator('[data-test="product-name"]').allTextContents();
      let expected = [...names].sort();

      if (option === 'Name (Z - A)') {
        expected = expected.reverse();
      }

      expect(names).toEqual(expected);
    }).toPass();
  });
}