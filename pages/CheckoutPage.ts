import { Page } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  readonly cartRows;
  readonly productTitle;
  readonly proceedButton;

  constructor(page: Page) {
    this.page = page;
    this.cartRows = page.locator('tbody tr');
    this.productTitle = page.locator('[data-test="product-title"]');
    this.proceedButton = page.locator('[data-test="proceed-1"]');
  }
}