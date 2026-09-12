import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test('Verify product details', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const productName = 'Combination Pliers';

  await homePage.goto();
  await homePage.clickProduct(productName);
  await expect(page).toHaveURL(/product/);

  await expect(productPage.productTitle).toHaveText(productName);
  await expect(productPage.productPrice).toHaveText('14.15');
  await expect(productPage.addToCartButton).toBeVisible();
  await expect(productPage.addToFavoritesButton).toBeVisible();
});
    