import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://lab-02622-bos.lab-internal.pega.com/prweb/app/default/_56mEsR4RqBouCrZGfkkFF8v406BUOZt*/!STANDARD');
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('cacsrcti1');
  await page.getByPlaceholder('User name').press('Tab');
  await page.getByPlaceholder('Password', { exact: true }).fill('install123!');  
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.goto('https://lab-02622-bos.lab-internal.pega.com/prweb/app/PegaCallConstellationSample');
  await page.getByLabel('Phone panel').click();
  await page.getByLabel('CTI Link').selectOption('12');
  await page.getByLabel('Extension').click();
  await page.getByLabel('Extension').fill('2962');
  await page.getByLabel('Extension').press('Tab');
  await page.getByLabel('Agent ID').fill('2462');
  await page.getByLabel('Agent ID').press('Tab');
  await page.getByLabel('Password').fill('2962');
  await page.getByLabel('Extension').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Extension').click();
  await page.getByLabel('Extension').fill('2963');
  await page.getByLabel('Extension').press('Tab');
  await page.getByLabel('Agent ID').fill('2463');
  await page.getByLabel('Agent ID').press('Tab');
  await page.getByLabel('Password').fill('2963');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Status').click();
  await page.getByText('•Ready').click();
  await page.locator('div').filter({ hasText: '2963' }).first().click();
  await page.locator('header').filter({ hasText: '2963' }).click({
    button: 'right'
  });
  await page.locator('div').filter({ hasText: '2963' }).first().click();
  await page.goto('https://lab-02622-bos.lab-internal.pega.com/prweb/app/PegaCallConstellationSample/interactions/I-161008');




  await page.getByTestId(':summary-item:actions').getByTestId(':menu-button:').click();
  await page.getByText('Transfer').click();
  await page.getByText('Call and interaction').click();
  await page.getByRole('searchbox', { name: 'Interaction' }).click();
  await page.getByTestId(':menu-item:').getByText('Unknown customer').click();
  await page.getByLabel('Reason').click();
  await page.getByLabel('On break unselected').getByTestId(':summary-item:primary').click();
  await page.getByTestId(':text-area:control').click();
  await page.getByTestId(':text-area:control').fill('Test');
  await page.getByLabel('Dial pad').click();
  await page.getByLabel('Phone number input').click();
  await page.getByLabel('Phone number input').fill('2983');
  
});