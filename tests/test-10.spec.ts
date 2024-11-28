import { test, expect } from '@playwright/test';

test.setTimeout(590000);

test.use({viewport:{width:1860,height:940}})

test('Amazon connect', async ({ page }) => {
  await page.goto('https://lab-02622-bos.lab-internal.pega.com/prweb/app/default/_56mEsR4RqBouCrZGfkkFF8v406BUOZt*/!STANDARD');
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('cacsrcti1');
  await page.getByPlaceholder('User name').press('Tab');
  await page.getByPlaceholder('Password', { exact: true }).fill('install123!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByLabel('Phone panel').click();
  await page.getByLabel('CTI Link').selectOption('0');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Login' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://pegacall-connect.awsapps.com/auth/?client_id=06919f4fd8ed324e&redirect_uri=https%3A%2F%2Fpegacall-connect.awsapps.com%2Fconnect%2Fauth%2Fcode%3Fdestination%3D%252Fconnect%252Fccp-v2%252Flogin&state=UNaYb6ofMsM49ZbSjqIy28ZEjyPh6lKFqhNVmccnK_h3AiftDveGLN40Pv3ycLcnhcBIr5T91w2bMjXvAz7UOw');
  await page1.locator('#wdc_username').click();
  await page1.locator('#wdc_username').fill('csr1');
  await page1.locator('#wdc_password').click();
  await page1.locator('#wdc_password').fill('AmazonConnect!1');
  await page.waitForTimeout(2000);
  await page1.getByRole('button', { name: 'Sign In' }).dblclick();
 // await page1.goto('https://pegacall-connect.awsapps.com/connect/ccp-v2/softphone');
  await page.locator('div:nth-child(9) > div:nth-child(4)').click();
  await page.waitForTimeout(5000);
  await page.goto('https://lab-02622-bos.lab-internal.pega.com/prweb/app/PegaCallConstellationSample/interactions/I-161004');
 // await page.getByText('Dismiss case').click();
  await page.waitForTimeout(10000);
  await page.goto('https://lab-02622-bos.lab-internal.pega.com/prweb/app/PegaCallConstellationSample/interactions/I-162014');
  await page.getByLabel('Attach interaction').click();
  await page.getByLabel('Reason').click();
  await page.getByText('Escalate to supervisor').click();
  await page.getByTestId(':text-area:control').click();
  await page.getByTestId(':text-area:control').fill('Test');
  await page.getByRole('dialog').getByRole('button', { name: 'Submit' }).click();
  await page.goto('https://lab-02622-bos.lab-internal.pega.com/prweb/app/PegaCallConstellationSample');
  await page.getByRole('button', { name: 'cacsrc11n' }).click();
  await page.getByText('Log off').click();
});