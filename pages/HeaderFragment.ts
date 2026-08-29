import { Page } from '@playwright/test';

export class HeaderFragment {
  private page: Page
  readonly username;
  readonly cartIcon;

    constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[data-test="nav-menu"]');
    this.cartIcon = page.locator('[data-test="nav-cart"]')
  }
}