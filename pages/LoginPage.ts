import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private emailInput;
  private passwordInput;
  private loginButton;


  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByTestId('email-input');
    this.passwordInput = page.getByTestId('password-input');
    this.loginButton = page.getByTestId('login-button');
  }
  
  async login(email: string, password: string) {
    await this.page.goto('/auth/login');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}