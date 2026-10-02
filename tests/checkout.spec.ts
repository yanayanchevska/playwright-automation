import { test, expect } from '../fixtures';

test('Verify user can complete checkout', async ({ page, loggedInApp }) => {
  let name: string;
  let price: string;

  await test.step('Add first product to cart', async () => {
    await loggedInApp.homePage.goto();
    ({ name, price } = await loggedInApp.homePage.getFirstProductInfo());
    await loggedInApp.homePage.clickFirstProduct();
    await loggedInApp.productPage.clickAddToCartButton();
  });

  await test.step('Verify cart and proceed to billing', async () => {
    await loggedInApp.header.cartIcon.click();
    await expect(page).toHaveURL('/checkout');
    await expect(loggedInApp.checkoutPage.cartRows).toHaveCount(1);
    await loggedInApp.checkoutPage.proceedButton.click();
  });

  await test.step('Confirm logged in and fill billing address', async () => {
    await loggedInApp.billingAddressPage.proceedButton2.click();
    await loggedInApp.billingAddressPage.country.waitFor({ state: 'visible' });

    await loggedInApp.billingAddressPage.fillAddress({
      country: 'UA',
      postalCode: '12345',
      houseNumber: '42',
      street: 'Test Street',
      city: 'Kyiv',
      state: 'Kyiv Oblast',
    });

    await loggedInApp.billingAddressPage.proceedButton3.click();
  });

  await test.step('Pay with credit card', async () => {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 3);
    const expirationDate = `${String(futureDate.getMonth() + 1).padStart(2, '0')}/${futureDate.getFullYear()}`;

    await loggedInApp.paymentPage.payWithCreditCard({
      cardNumber: '1111-1111-1111-1111',
      expirationDate: expirationDate,
      cvv: '111',
      cardHolderName: 'Test User',
    });
  });

  await test.step('Verify payment success', async () => {
    await expect(loggedInApp.paymentPage.successMessage).toBeVisible();
    await expect(loggedInApp.paymentPage.successMessage).toHaveText('Payment was successful');
  });
});