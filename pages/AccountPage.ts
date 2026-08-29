import { Page } from '@playwright/test';

export class AccountPage {
  private page: Page;
  readonly pageTitle;
  readonly username;
  
    constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('[data-test="page-title"]');
    this.username = page.getByText('Jane Doe');
  }
    async getUsername() {
    return await this.username.textContent();
  }
}