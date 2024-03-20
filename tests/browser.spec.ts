import { expect, test } from '@playwright/test';

test('index page has expected LESSER text', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('logo')).toHaveText('Lesser');
});

test('Should not start challenge with empty user', async ({ page }) => {
	await page.goto('/');
	await page.getByTestId('start').click();
	await expect(page.getByTestId('error')).toHaveText('ERRO!');
});

test('Should start challenge after typing a user', async ({ page }) => {
	await page.goto('/');
	await page.getByTestId('name').click();
	await page.keyboard.type('Maicon Lara');
	await page.getByTestId('phone').click();
	await page.keyboard.type('41992013287');
	await page.getByTestId('email').click();
	await page.keyboard.type('maiconluan.lara@yahoo.com.br');
	await page.getByTestId('start').click();

	await expect(page.getByTestId('sent')).toHaveText('Enviar');
});

test('Should fail after 15 seconds of no submiting', async ({ page }) => {
	await page.goto('/');
	await page.getByTestId('name').click();
	await page.keyboard.type('Maicon Lara');
	await page.getByTestId('phone').click();
	await page.keyboard.type('41992013287');
	await page.getByTestId('email').click();
	await page.keyboard.type('maiconluan.lara@yahoo.com.br');
	await page.getByTestId('start').click();
	await page.waitForTimeout(16000);
	await expect(page.getByTestId('timerError')).toHaveText('ERRO!');
});

test('Should go to candidate page, return and fail after 15 seconds of no submiting', async ({
	page
}) => {
	await page.goto('/');
	await page.getByTestId('name').click();
	await page.keyboard.type('Maicon Lara');
	await page.getByTestId('phone').click();
	await page.keyboard.type('41992013287');
	await page.getByTestId('email').click();
	await page.keyboard.type('maiconluan.lara@yahoo.com.br');
	await page.getByTestId('start').click();

	await page.getByTestId('candidate').click();
	await page.waitForTimeout(2000);
	await page.getByTestId('candidate').click();
	await page.waitForTimeout(14000);
	await expect(page.getByTestId('timerError')).toHaveText('ERRO!');
});
