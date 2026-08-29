import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { HeaderFragment } from '../pages/HeaderFragment';
import { CheckoutPage } from '../pages/CheckoutPage';

test.use({ storageState: 'auth/session.json' });

test('Verify user can add product to cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const headerFragment = new HeaderFragment(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.goto();
  await homePage.clickProduct('Slip Joint Pliers');

  await expect(page).toHaveURL(/\/product/);
  await expect(productPage.productTitle).toHaveText('Slip Joint Pliers');
  await expect(productPage.productPrice).toHaveText('9.17');

  await productPage.addToCartButton.click();

  const alert = page.getByRole('alert');
  await expect(alert).toBeVisible();
  await expect(alert).toHaveText('Product added to shopping cart.');
  await expect(alert).toBeHidden({ timeout: 9000 });

  await expect(headerFragment.cartIcon).toContainText('1');

  await headerFragment.cartIcon.click();

  await expect(page).toHaveURL('/checkout');
  await expect(checkoutPage.cartRows).toHaveCount(1);
  await expect(checkoutPage.productTitle).toHaveText('Slip Joint Pliers');
  await expect(checkoutPage.proceedButton).toBeVisible();
});