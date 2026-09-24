import { test as base } from '@playwright/test';
import { App } from './pages/App';

type MyFixtures = {
  app: App;
  loggedInApp: App;
};

export const test = base.extend<MyFixtures>({
  app: async ({ page }, use) => {
    const app = new App(page);
    await use(app);
  },

  loggedInApp: async ({ app }, use) => {
    await app.loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');
    await use(app);
  },
});

export { expect } from '@playwright/test';