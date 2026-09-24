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

loggedInApp: async ({ page, request }, use) => {
  const response = await request.post('https://api.practicesoftwaretesting.com/users/login', {
    data: { email: 'customer2@practicesoftwaretesting.com', password: 'welcome01' },
  });
  const body = await response.json();
  const token = body.access_token;

  await page.addInitScript((token) => {
    window.localStorage.setItem('auth-token', token);
  }, token);

  await page.goto('/');

  const app = new App(page);
  await use(app);
},
});

export { expect } from '@playwright/test';