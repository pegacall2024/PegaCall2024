import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://lab-02622-bos.lab-internal.pega.com/prweb/app/default/_56mEsR4RqBouCrZGfkkFF8v406BUOZt*/!STANDARD');
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('cacsr@cosmos');
  await page.getByPlaceholder('User name').press('Tab');
  await page.getByPlaceholder('Password', { exact: true }).fill('install123!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('[data-test-id="px-opr-image-ctrl"]').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});