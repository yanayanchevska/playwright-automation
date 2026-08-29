import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');}

  async clickProduct(productName: string) {
    await this.page.getByRole('link', { name: productName }).click();
  }
}