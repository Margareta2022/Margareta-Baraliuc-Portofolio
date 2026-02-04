import { test, expect } from '@playwright/test';

test.describe('API Health Check', () => {
  test('GitHub API should respond with 200', async ({ request }) => {
    const response = await request.get('https://api.github.com');

    expect(response.status()).toBe(200);
  });
});
