import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';

test('Verify product details', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

    // Open URL
    await homePage.goto();
    await homePage.clickProduct('Combination Pliers');
    await expect(page).toHaveURL(/product/);

    // Verify the product title is "Combination Pliers"
    await expect(productPage.productTitle).toHaveText(productName);
    // Verify the product price is "$19.99"
    await expect(productPage.productPrice).toHaveText('14.15');
    // Verify the "add to cart" button is visible
    await expect(productPage.addToCartButton).toBeVisible();
    //Verify the "add to favorites" button is visible
    await expect(productPage.addToFavoritesButton).toBeVisible();
});
    