import { test, expect, chromium } from '@playwright/test';

import { makeCallthree, makeCalltwo } from './utils';

test.setTimeout(590000);
test.use({viewport:{width:1600,height:940}})

test('Genesys Cloud consult V+D', async () => {

  // Launch the first browser instance
  const browser1 = await chromium.launch({
    args: [
      '--use-fake-ui-for-media-stream', // Automatically allow media stream
      '--use-fake-device-for-media-stream' // Use fake device for media stream
    ]
  });
  const context1 = await browser1.newContext({
    permissions: ['microphone']
  });
  const page1 = await context1.newPage();

  // await context1.clearCookies();
  // await context1.clearPermissions();
  // await context1.storageState({ path: 'state.json' });

  await context1.grantPermissions(['microphone'], { origin: 'https://lab-04141-bos.lab-internal.pega.com/prweb/app/default/2mCjkZJmJzIb2YFZHOYfCw*/!STANDARD' });
  await page1.goto('https://lab-04141-bos.lab-internal.pega.com/prweb/app/default/2mCjkZJmJzIb2YFZHOYfCw*/!STANDARD');



  // Launch the second browser instance
  const browser2 = await chromium.launch({
    args: [
      '--use-fake-ui-for-media-stream', // Automatically allow media stream
      '--use-fake-device-for-media-stream' // Use fake device for media stream
    ]
  });
  const context2 = await browser2.newContext({
    permissions: ['microphone']
  });
  const page2 = await context2.newPage();

  // await context2.clearCookies();
  // await context2.clearPermissions();
  // await context2.storageState({ path: 'state.json' });

  await context2.grantPermissions(['microphone'], { origin: 'https://lab-04141-bos.lab-internal.pega.com/prweb/app/default/2mCjkZJmJzIb2YFZHOYfCw*/!STANDARD' });
  await page2.goto('https://lab-04141-bos.lab-internal.pega.com/prweb/app/default/2mCjkZJmJzIb2YFZHOYfCw*/!STANDARD');




  await page1.goto('https://lab-04141-bos.lab-internal.pega.com/prweb/app/default/2mCjkZJmJzIb2YFZHOYfCw*/!STANDARD');
  await page1.getByPlaceholder('User name').click();
  await page1.getByPlaceholder('User name').fill('cacsrcti1');
  await page1.getByPlaceholder('User name').press('Tab');
  await page1.getByPlaceholder('Password', { exact: true }).fill('install123!');
  await page1.getByRole('button', { name: 'Log in' }).click();
  await page1.goto('https://lab-04141-bos.lab-internal.pega.com/prweb/app/PegaCallC11nSample');
  await page1.getByTestId(':privacy-dialog:accept').click();
  await page1.getByRole('heading', { name: 'My dashboard' }).click();
  await page1.getByLabel('Phone panel').click();
  //await page.getByLabel('CTI Link').selectOption('16');
  await page1.selectOption('select[label="CTI Link"]', { label: 'GenesysCloudC11N' });
  await page1.getByRole('button', { name: 'Login' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Email Address').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Email Address').fill('salavagopi.krishna@in.pega.com');
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Email Address').press('Tab');
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Password').fill('Pegacall++2024');
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Log In' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Status List Dropdown').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'On Queue' }).click();

  await makeCallthree('917816615965');

  await page2.getByPlaceholder('User name').click();
  await page2.getByPlaceholder('User name').fill('cacsrcti2');
  await page2.getByPlaceholder('User name').press('Tab');
  await page2.getByPlaceholder('Password', { exact: true }).fill('install123!');
  await page2.getByRole('button', { name: 'Log in' }).click();
  await page2.getByTestId(':privacy-dialog:accept').click();
  await page2.getByRole('heading', { name: 'My dashboard' }).click();
  await page2.getByLabel('Phone panel').click();

  await page2.selectOption('select[label="CTI Link"]', { label: 'GenesysCloudC11N' });
  await page2.getByRole('button', { name: 'Login' }).click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Email Address').click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Email Address').fill('automation@pega.com');
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Email Address').press('Tab');
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Password').fill('Automation@123');
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Log In' }).click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Status List Dropdown').click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'On Queue' }).click();


  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Mute' }).click();
 //await page.goto('https://lab-04141-bos.lab-internal.pega.com/prweb/app/PegaCallC11nSample/interactions/I-309001');

  await page1.getByText('Callback').click();

  await page1.getByTestId(':case-view:heading').getByText('Steve').click();  // Steve R Smith
  await page1.getByTestId(':case-view:subheading').getByText('Customer').click(); // Customer
  await page1.getByTestId(':case-view:summary-fields').getByText('Status').click();
  await page1.getByTestId(':case-view:summary-fields').getByText('Verified').click();


  await page1.getByLabel('Attach interaction').click();
  await page1.getByTestId(':text-area:control').click();
  await page1.getByTestId(':text-area:control').fill('Test comments');
  await page1.getByRole('button', { name: 'Submit' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Transfer' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Search People').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('combobox', { name: 'Name or Number' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('combobox', { name: 'Name or Number' }).fill('basic');
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByTitle('BasicQueue').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Consult' }).click();

  await page2.getByLabel('Collapse call control panel').click();


  await page2.getByRole('heading', { name: 'Transferred call...' }).click();
  await page2.locator('article').filter({ hasText: 'Transferred call..' }).locator('span').first().click();
  await page2.getByText('+1 857 856').click();
  await page2.getByText('verified').first().click();
  await page2.getByText('Wrong queue').click();
  await page2.getByTestId(':field-value-list:').getByText('Test comments').click();
  await page2.getByText('Reason').click();
  


  await page2.getByRole('button', { name: 'Accept' }).click();
  await page2.getByLabel('Expand call control panel').click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Mute' }).click();

  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Disconnect' }).click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Select wrap-up code Dropdown' }).click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('option', { name: 'Default Wrap-up Code' }).locator('slot').click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Done' }).click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Status List Dropdown').click();  
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Log Out').click();  

 
  await page2.getByRole('heading', { name: 'Accounts' }).click();
  await page2.getByRole('button', { name: 'Wrap up' }).click();
  await page2.getByRole('textbox', { name: 'Start a conversation' }).locator('div').click();
  await page2.getByRole('textbox', { name: 'Start a conversation' }).fill('test');
  await page2.getByRole('button', { name: 'Submit' }).click();
  await page2.getByRole('button', { name: 'cacsrc11n' }).click();
  await page2.getByText('Log off').click();

  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Disconnect' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Select wrap-up code Dropdown' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('option', { name: 'Default Wrap-up Code' }).locator('slot').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Done' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Status List Dropdown').click();  
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Log Out').click();  


  await page1.getByRole('button', { name: 'cacsrc11n' }).click();
  await page1.getByText('Log off').click();


  

 // await page1.waitForTimeout(47000); 
  


  
});