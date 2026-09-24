import { test, expect } from '@playwright/test';

test('Verify mocked products display', async ({ page }) => {
  await page.route('**/products', async (route) => {
    const mockProducts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      name: `Product ${i}`,
    }));

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ data: mockProducts }),
    });
  });

  await page.goto('/');
  
  await expect(page.getByTestId('product-name')).toHaveCount(20);
});