import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private emailInput;
  private passwordInput;
  private loginButton;


  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder('Your email');
    this.passwordInput = page.getByPlaceholder('Your password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }
  
  async login(email: string, password: string) {
    await this.page.goto('/auth/login');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}