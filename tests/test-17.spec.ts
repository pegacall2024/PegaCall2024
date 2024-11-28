import { test, expect, chromium } from '@playwright/test';

import { makeCalltwo } from './utils';

test.setTimeout(590000);
test.use({viewport:{width:1600,height:940}})

test('Finesse V+D conference - Hand off', async () => {
  // Launch the first browser instance
  const browser1 = await chromium.launch();
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();
  await page1.goto('https://lab-02622-bos.lab-internal.pega.com/prweb/app/default/_56mEsR4RqBouCrZGfkkFF8v406BUOZt*/!STANDARD');

  // Launch the second browser instance
  const browser2 = await chromium.launch();
  const context2 = await browser2.newContext();
  const page2 = await context2.newPage();
  await page2.goto('https://lab-02622-bos.lab-internal.pega.com/prweb/app/default/_56mEsR4RqBouCrZGfkkFF8v406BUOZt*/!STANDARD');

  await page1.getByPlaceholder('User name').click();
  await page1.getByPlaceholder('User name').fill('cacsrcti1');
  await page1.getByPlaceholder('User name').press('Tab');
  await page1.getByPlaceholder('Password', { exact: true }).fill('install123!');
  await page1.getByRole('button', { name: 'Log in' }).click();
  await page1.getByLabel('Phone panel').click();
  await page1.selectOption('select[label="CTI Link"]', { label: 'Finesse12C11N' });
  await page1.getByLabel('Extension').click();  
  await page1.getByLabel('Extension').fill('2962');
  await page1.getByLabel('Extension').press('Tab');
  await page1.getByLabel('Agent ID').fill('2462');
  await page1.getByLabel('Agent ID').press('Tab');
  await page1.getByLabel('Password').fill('2962');
  await page1.getByRole('button', { name: 'Login' }).dblclick();
  await page1.locator('div').filter({ hasText: '2962' }).first().click();
  await page1.getByLabel('Status').click();
  await page1.getByText('Break-Cofee').click();
  await page1.getByLabel('Status').click();
  await page1.getByText('•Ready').click();
  

  await page2.getByPlaceholder('User name').click();
  await page2.getByPlaceholder('User name').fill('cacsrcti2');
  await page2.getByPlaceholder('User name').press('Tab');
  await page2.getByPlaceholder('Password', { exact: true }).fill('install123!');
  await page2.getByRole('button', { name: 'Log in' }).click();
  await page2.getByLabel('Phone panel').click();
  await page2.selectOption('select[label="CTI Link"]', { label: 'Finesse12C11N' });
  await page2.getByLabel('Extension').click();  
  await page2.getByLabel('Extension').fill('2963');
  await page2.getByLabel('Extension').press('Tab');
  await page2.getByLabel('Agent ID').fill('2463');
  await page2.getByLabel('Agent ID').press('Tab');
  await page2.getByLabel('Password').fill('2963');
  await page2.getByRole('button', { name: 'Login' }).click();
  await page2.getByRole('button', { name: 'Login' }).click();
  await page2.locator('div').filter({ hasText: '2963' }).first().click();
  await page2.getByLabel('Status').click();
  await page2.getByText('Break-Cofee').click();
  await page2.getByLabel('Status').click();
  await page2.getByText('•Ready').click();


  await makeCalltwo('918578562962');

  await page1.getByRole('button', { name: 'Accept' }).click();
  await page1.getByTestId(':case-view:heading').click();
  await expect(page1.getByTestId(':case-view:heading')).toContainText('Steve');
  await page1.getByTestId(':summary-item:actions').getByTestId(':menu-button:').click();
  await page1.getByText('Conference').click();
  await page1.getByText('Call and interaction').click();
  await page1.getByLabel('Reason').click();
  await page1.getByLabel('On break unselected').getByTestId(':summary-item:primary').click();
  await page1.getByTestId(':text-area:control').click();
  await page1.getByTestId(':text-area:control').fill('Test');
  await page1.getByLabel('Dial pad').click();
  await page1.getByLabel('Phone number input').click();
  await page1.getByLabel('Phone number input').fill('2963');
  await page1.getByRole('button', { name: 'Conference' }).click();


  //await page2.getByText('not verified').first().click();
  await page2.getByRole('button', { name: 'Accept' }).click();
  await expect(page2.getByTestId(':case-view:heading')).toContainText('Steve');

  await page1.getByLabel('Hand off').click();

  await page2.getByTestId(':summary-item:actions').getByTestId(':menu-button:').click();
  await page2.getByLabel('Hang up').getByTestId(':summary-item:primary').click();

  
  
  //await page1.getByTestId(':summary-item:actions').getByTestId(':menu-button:').click();
  //await page1.getByLabel('Hang up').getByTestId(':summary-item:primary').click();   

  await page1.getByLabel('Status').click();

  //await page1.locator('//button[@aria-label="Open combobox list"]').click();

  await page1.getByText('Break-Cofee').click();
  await page1.getByLabel('Status').click();
  await page1.getByText('Logout').click();
  await page1.getByRole('button', { name: 'cacsrc11n' }).click();
  await page1.getByText('Log off').click();

  // await page2.getByRole('button', { name: 'Wrap up' }).click();
  // await page2.getByRole('button', { name: 'Submit' }).click();

  // await page2.waitForTimeout(3000);

  await page2.getByLabel('Status').click();
  
  await page2.getByText('Break-Cofee').click();
  await page2.getByLabel('Status').click();
  await page2.getByText('Logout').click();
  await page2.getByRole('button', { name: 'cacsrc11n' }).click();
  await page2.getByText('Log off').click();
 
  await page1.waitForTimeout(5000);

  

  
 
});