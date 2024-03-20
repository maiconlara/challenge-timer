import { expect, test } from '@playwright/test';

test('index page has expected LESSER text', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('logo')).toHaveText('Lesser');
});