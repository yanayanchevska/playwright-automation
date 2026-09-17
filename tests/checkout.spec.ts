import { test, expect } from '../fixtures';

test('Verify user can complete checkout', async ({ page, loggedInApp }) => {
  await loggedInApp.homePage.goto();

  const { name, price } = await loggedInApp.homePage.getFirstProductInfo();
  await loggedInApp.homePage.clickFirstProduct();
  await loggedInApp.productPage.clickAddToCartButton();

  await loggedInApp.header.cartIcon.click();
  await expect(page).toHaveURL('/checkout');
  await expect(loggedInApp.checkoutPage.cartRows).toHaveCount(1);

  await loggedInApp.checkoutPage.proceedButton.click(); 
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

  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 3);
  const expirationDate = `${String(futureDate.getMonth() + 1).padStart(2, '0')}/${futureDate.getFullYear()}`;

  await loggedInApp.paymentPage.payWithCreditCard({
  cardNumber: '1111-1111-1111-1111',
  expirationDate: expirationDate,
  cvv: '111',
  cardHolderName: 'Test User',
});

  await expect(loggedInApp.paymentPage.successMessage).toBeVisible();
  await expect(loggedInApp.paymentPage.successMessage).toHaveText('Payment was successful');

});