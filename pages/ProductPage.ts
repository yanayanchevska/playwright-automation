import { Page } from '@playwright/test';

export class ProductPage {
  private page: Page;
  readonly productTitle;
  readonly productPrice;
  readonly addToCartButton;
  readonly addToFavoritesButton;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('h1');
    this.addToFavoritesButton = page.getByRole('button', { name: 'Add to favourites' });
    this.productPrice = page.getByTestId('unit-price');
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
  }
}