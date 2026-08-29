import { Page } from '@playwright/test';

export class HeaderFragment {
  private page: Page
    readonly username;

    constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[data-test="nav-menu"]');
  }
}   