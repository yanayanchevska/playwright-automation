import { Page } from '@playwright/test';

export class HeaderFragment {
  private page: Page
  readonly username;
  readonly cartIcon;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByTestId('nav-menu');
    this.cartIcon = page.getByTestId('nav-cart');
  }
}