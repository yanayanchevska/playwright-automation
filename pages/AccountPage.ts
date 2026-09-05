import { Page } from '@playwright/test';
import { HeaderFragment } from './HeaderFragment';

export class AccountPage {
  private page: Page;
  readonly header: HeaderFragment;
  readonly pageTitle;
  
    constructor(page: Page) {
    this.header = new HeaderFragment(page);
    this.page = page;
    this.pageTitle = page.getByTestId('page-title');
  }
    async getUsername() {
    return await this.header.username.textContent();

  }
}