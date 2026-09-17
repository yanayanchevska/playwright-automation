import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { AccountPage } from './AccountPage';
import { ProductPage } from './ProductPage';
import { CheckoutPage } from './CheckoutPage';
import { HeaderFragment } from './HeaderFragment';
import { BillingAddressPage } from './BillingAddressPage';
import { PaymentPage } from './PaymentPage';

export class App {
  readonly loginPage: LoginPage;
  readonly homePage: HomePage;
  readonly accountPage: AccountPage;
  readonly productPage: ProductPage;
  readonly checkoutPage: CheckoutPage;
  readonly header: HeaderFragment;
  readonly billingAddressPage: BillingAddressPage;
  readonly paymentPage: PaymentPage;


   constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
    this.accountPage = new AccountPage(page);
    this.productPage = new ProductPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.header = new HeaderFragment(page);
    this.billingAddressPage = new BillingAddressPage(page);
    this.paymentPage = new PaymentPage(page);
  }
}