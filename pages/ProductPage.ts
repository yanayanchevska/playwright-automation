import { Page } from '@playwright/test';

export class ProductPage {
  private page: Page;
  readonly productTitle;
  readonly productPrice;
  readonly addToCartButton;
  readonly addToFavoritesButton;
  readonly quantityInput;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.locator('h1');   
    this.productPrice = page.locator('[data-test="unit-price"]');
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.addToFavoritesButton = page.getByRole('button', { name: 'Add to favourites' });
    this.quantityInput = page.getByLabel('Quantity');
  
  }
}