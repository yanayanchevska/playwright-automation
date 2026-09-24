import { Page } from '@playwright/test';

export class BillingAddressPage {
  private page: Page;
  readonly country;
  readonly postalCode;
  readonly houseNumber;
  readonly street;
  readonly city;
  readonly state;
    readonly proceedButton2;
    readonly proceedButton3;

  constructor(page: Page) {
    this.page = page;
    this.country = page.getByTestId('country');
    this.postalCode = page.getByTestId('postal_code');
    this.houseNumber = page.getByTestId('house_number');
    this.street = page.getByTestId('street');
    this.city = page.getByTestId('city');
    this.state = page.getByTestId('state');
    this.proceedButton2 = page.getByTestId('proceed-2');
    this.proceedButton3 = page.getByTestId('proceed-3');
  }

  async fillAddress(address: { country: string; postalCode: string; houseNumber: string; street: string; city: string; state: string }) {
    await this.country.selectOption(address.country);
    await this.postalCode.fill(address.postalCode);
    await this.houseNumber.fill(address.houseNumber);
    await this.street.fill(address.street);
    await this.city.fill(address.city);
    await this.state.fill(address.state);
  }
}