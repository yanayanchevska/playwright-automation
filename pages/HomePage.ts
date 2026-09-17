import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickProduct(productName: string) {
    await this.page.getByRole('link', { name: productName }).click();
  }

  async sortProductsBy(option: string) {
    await this.page.getByTestId('sort').selectOption(option);
  }

  async getProductNames(): Promise<string[]> {
    return await this.page.getByTestId('product-name').allTextContents();
  }

  async getProductPrices(): Promise<number[]> {
  const priceTexts = await this.page.getByTestId('product-price').allTextContents();
  return priceTexts.map(price => parseFloat(price.replace('$', '')));
}

  async filterByCategory(category: string) {
  await this.page.getByLabel(category).check();
}

async getFirstProductInfo() {
  const name = await this.page.getByTestId('product-name').first().textContent();
  const price = await this.page.getByTestId('product-price').first().textContent();
  return { name, price };
}

async clickFirstProduct() {
  await this.page.getByTestId('product-name').first().click();
}

}