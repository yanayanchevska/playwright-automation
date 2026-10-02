import { test, expect } from '../fixtures';

test('Verify user can add product to cart', async ({ page, loggedInApp }) => {
  await test.step('Open product and verify details', async () => {
    await loggedInApp.homePage.goto();
    await loggedInApp.homePage.clickProduct('Slip Joint Pliers');

    await expect(page).toHaveURL(/\/product/);
    await expect(loggedInApp.productPage.productTitle).toHaveText('Slip Joint Pliers');
    await expect(loggedInApp.productPage.productPrice).toHaveText('9.17');
  });

  await test.step('Add product to cart and verify alert', async () => {
    await loggedInApp.productPage.clickAddToCartButton();

    const alert = page.getByRole('alert');
    await expect(alert).toBeVisible();
    await expect(alert).toHaveText('Product added to shopping cart.');
    await expect(alert).toBeHidden({ timeout: 9000 });

    await expect(loggedInApp.header.cartIcon).toContainText('1');
  });

  await test.step('Verify checkout page', async () => {
    await loggedInApp.header.cartIcon.click();

    await expect(page).toHaveURL('/checkout');
    await expect(loggedInApp.checkoutPage.cartRows).toHaveCount(1);
    await expect(loggedInApp.checkoutPage.productTitle).toHaveText('Slip Joint Pliers');
    await expect(loggedInApp.checkoutPage.proceedButton).toBeVisible();
  });
});