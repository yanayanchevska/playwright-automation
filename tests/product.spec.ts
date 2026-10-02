import { test, expect } from '../fixtures';

test('Verify product details', async ({ page, app }) => {
  const productName = 'Combination Pliers';

  await app.homePage.goto();
  await app.homePage.clickProduct(productName);
  await expect(page).toHaveURL(/product/);

  await expect(app.productPage.productTitle).toHaveText(productName);
  await expect(app.productPage.productPrice).toHaveText('29.99');
  await expect(app.productPage.addToCartButton).toBeVisible();
  await expect(app.productPage.addToFavoritesButton).toBeVisible();
});