import { test, expect } from '@playwright/test';

test.describe('Smoke Tests - Homepage', () => {
  test('homepage loads and displays correct title', async ({ page }) => {
    await page.goto('https://example.com');

    await expect(page).toHaveTitle(/Example Domain/);
    await expect(page.locator('h1')).toHaveText('Example Domain');
  });
});
