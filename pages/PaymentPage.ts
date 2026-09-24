import { Page } from '@playwright/test';

export class PaymentPage {
  private page: Page;
  readonly paymentMethod;
  readonly cardNumber;
  readonly expirationDate;
  readonly cvv;
  readonly cardHolderName;
  readonly confirmButton;
  readonly successMessage;

  constructor(page: Page) {
    this.page = page;
    this.paymentMethod = page.getByTestId('payment-method');
    this.cardNumber = page.getByTestId('credit_card_number');
    this.expirationDate = page.getByTestId('expiration_date');
    this.cvv = page.getByTestId('cvv');
    this.cardHolderName = page.getByTestId('card_holder_name');
    this.confirmButton = page.getByTestId('finish');
    this.successMessage = page.getByTestId('payment-success-message');
  }

  async payWithCreditCard(details: { cardNumber: string; expirationDate: string; cvv: string; cardHolderName: string }) {
    await this.paymentMethod.selectOption('credit-card');
    await this.cardNumber.fill(details.cardNumber);
    await this.expirationDate.fill(details.expirationDate);
    await this.cvv.fill(details.cvv);
    await this.cardHolderName.fill(details.cardHolderName);
    await this.confirmButton.click();
  }
}