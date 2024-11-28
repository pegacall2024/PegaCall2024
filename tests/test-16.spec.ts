import { test, expect, chromium } from '@playwright/test';

test.setTimeout(990000);
test.use({ viewport: { width: 1600, height: 940 } })

test('Genesys Cloud Chat blind transfer', async () => {


  


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
  await context2.grantPermissions(['microphone'], { origin: 'https://lab-04141-bos.lab-internal.pega.com/prweb/app/default/2mCjkZJmJzIb2YFZHOYfCw*/!STANDARD' });
  await page2.goto('https://lab-04141-bos.lab-internal.pega.com/prweb/app/default/2mCjkZJmJzIb2YFZHOYfCw*/!STANDARD');


  // Launch the Third browser instance

  const browser3 = await chromium.launch({
    args: [
      '--use-fake-ui-for-media-stream', // Automatically allow media stream
      '--use-fake-device-for-media-stream' // Use fake device for media stream
    ]

  });

  const context3 = await browser3.newContext({
    permissions: ['microphone'],
    ignoreHTTPSErrors: true // Ignore HTTPS errors
  });
  const page3 = await context3.newPage();
  await context3.clearCookies();
  await context3.clearPermissions();
  await context3.storageState({ path: 'state.json' });

  await context3.grantPermissions(['microphone'], { origin: 'https://veishydalm09279:8443/uplus/Genesys/index.html' });
  await page3.goto('https://veishydalm09279:8443/uplus/Genesys/index.html', { waitUntil: 'load' });




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
  await page1.selectOption('select[label="CTI Link"]', { label: 'GenesysCloudC11N' });
  await page1.getByRole('button', { name: 'Login' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Email Address').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Email Address').fill('salavagopi.krishna@in.pega.com');
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Email Address').press('Tab');
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByPlaceholder('Password').fill('Pegacall++2024');
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Log In' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Status List Dropdown').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'On Queue' }).click();

  await page1.waitForTimeout(10000);

  await page1.getByLabel('Collapse call control panel').click();

  //await page3.goto('https://veishydalm09279:8443/uplus/Genesys/index.html');


  await page3.getByRole('button', { name: 'Log in' }).click();
  await page3.getByLabel('Username').selectOption('kris.marrier@hotmail123.net');
  await page3.getByRole('button', { name: 'Sign in' }).click();
  await page3.getByRole('button', { name: 'Chat' }).click();
  await page3.getByLabel('Start Chat').click();
  await page3.waitForTimeout(12000);
  // Check if "Agent Connected" message is visible
  try {
    await expect(page1.getByText('Agent Connected').nth(1)).toBeVisible();
    console.log('Agent Connected message is visible.');
  } catch (e) {
    console.log('Kriss Marrier is not the customer');
  }
  await page3.getByPlaceholder('Type your message here').click();
  await page3.getByPlaceholder('Type your message here').fill('Hi, Could you please help me with my account balance and recent transactions?');
  await page3.getByPlaceholder('Type your message here').press('Tab');
  await page3.getByLabel('Send', { exact: true }).press('Enter');

  try {
    await page1.getByTestId('Service account ID:input:control').click({ timeout: 5000 });
    console.log('Unknown customer need to verify');

    await page1.getByTestId('Service account ID:input:control').fill('sa-002');
    await page1.getByRole('button', { name: 'Search', exact: true }).click();
    await page1.getByTestId('Service account ID:input:control').click();
    await page1.getByTestId(':fullscreen:').getByTestId(':form-field:label').locator('div').click();
    await page1.getByRole('button', { name: 'Submit' }).click();

    await page1.locator('xpath=(//*[text()="Pass"])[1]').click();
    await page1.locator('xpath=(//*[text()="Pass"])[2]').click();
    await page1.locator('xpath=(//*[text()="Pass"])[3]').click();
    await page1.locator('xpath=(//*[text()="Pass"])[4]').click();
    await page1.getByRole('button', { name: 'Submit' }).click();

  } catch (e) {
    console.log('Kriss Marrier is not the customer');
  }

  await page1.getByLabel('Expand call control panel').click();


  //await page.getByText('Dismiss case').click();
  const page4Promise = page1.waitForEvent('popup');
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Open Chat').first().click();
  const page4 = await page4Promise;

  await page4.goto('https://apps.mypurecloud.com/crm/interaction.html#url=https://apps.mypurecloud.com/directory/?disableSoftphone=true&disableProactiveDevicePermissions=true#/interaction/3c6bbd7a-e21b-44b0-aaf6-78f06c4e9114?panels=scripts,responses,co-pilot%26coPilotProvider,smart-advisor%26builtInSmartAdvisorInterapptionsProvider,details,wrapup&initialPanel=none&disableProactiveDevicePermissions=true#/interaction/3c6bbd7a-e21b-44b0-aaf6-78f06c4e9114?panels=scripts,responses,co-pilot&coPilotProvider,smart-advisor&builtInSmartAdvisorInterapptionsProvider,details,wrapup&initialPanel=none&identifier=interaction3c6bbd7a-e21b-44b0-aaf6-78f06c4e9114');


  await page4.locator('iframe').contentFrame().getByText('This is the beginning of your chat room.marrier, kris joined the').click();

  await page4.waitForTimeout(4000);

  //await page4.locator('xpath=(//div[@id="elm-chat-message-container"]//*[text()="Hi Sir, how can i help you?"])').first().click();


  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').click();

  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').fill('Hello Sir, Sure give a moment i will share you those details');
  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').press('Enter');

  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').click();
  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').fill('Here are your account details and recent transaction details.');
  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').press('Enter');

  await page3.getByPlaceholder('Type your message here').click();
  await page3.getByPlaceholder('Type your message here').fill('Thankyou.');
  await page3.getByPlaceholder('Type your message here').press('Tab');
  await page3.getByLabel('Send', { exact: true }).press('Enter');

  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').click();
  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').fill('Is there anything that i can help you?');
  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').press('Enter');

  await page3.getByPlaceholder('Type your message here').click();
  await page3.getByPlaceholder('Type your message here').fill('Yes, i was looking for a good ENT doctor nearby');
  await page3.getByPlaceholder('Type your message here').press('Tab');
  await page3.getByLabel('Send', { exact: true }).press('Enter');

  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').click();
  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').fill('Sure sir, i would like route you to our other team which handles health care they can help you in this');
  await page4.locator('iframe').contentFrame().locator('#acd-chat-textarea').press('Enter');

  await page3.getByPlaceholder('Type your message here').click();
  await page3.getByPlaceholder('Type your message here').fill('Okay please route me to health care department');
  await page3.getByPlaceholder('Type your message here').press('Tab');
  await page3.getByLabel('Send', { exact: true }).press('Enter');

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

  await page2.waitForTimeout(14000);

  await page1.getByLabel('Attach interaction').click();
  await page1.getByTestId(':text-area:control').click();
  await page1.getByTestId(':text-area:control').fill('Test comments');
  await page1.getByRole('button', { name: 'Submit' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Transfer' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Search People').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('combobox', { name: 'Name or Number' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('combobox', { name: 'Name or Number' }).fill('basic');
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByTitle('BasicQueue').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Blind' }).click();

  await page2.getByLabel('Collapse call control panel').click();

  await page2.getByRole('heading', { name: 'Transferred chat...' }).click();

  try {
    console.log('Attempting to find Kriss Marrier...');
    await page2.getByText('Kriss Marrier', { exact: true }).click({ timeout: 5000 });
    console.log('Kriss Marrier is the customer');
  } catch (e) {
    console.log('Kriss Marrier is not the customer');
  }

  await page2.getByText('verified').first().click();
  await page2.getByText('Wrong queue').click();
  await page2.getByText('Test Comments').click();
  await page2.getByText('Reason').click();

  try {
    await page2.getByText('Comments', { exact: true }).click({ timeout: 5000 });
    console.error('Comments text is displayed ');
  } catch (e) {
    console.log('Kriss Marrier is not the customer');
  }


  await page2.getByRole('button', { name: 'Accept' }).click();


  await page2.getByLabel('Expand call control panel').click();

  const page5Promise = page2.waitForEvent('popup');
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Open Chat').first().click();
  const page5 = await page5Promise;

  await page5.goto('https://apps.mypurecloud.com/crm/interaction.html#url=https://apps.mypurecloud.com/directory/?disableSoftphone=true&disableProactiveDevicePermissions=true#/interaction/3c6bbd7a-e21b-44b0-aaf6-78f06c4e9114?panels=scripts,responses,co-pilot%26coPilotProvider,smart-advisor%26builtInSmartAdvisorInterapptionsProvider,details,wrapup&initialPanel=none&disableProactiveDevicePermissions=true#/interaction/3c6bbd7a-e21b-44b0-aaf6-78f06c4e9114?panels=scripts,responses,co-pilot&coPilotProvider,smart-advisor&builtInSmartAdvisorInterapptionsProvider,details,wrapup&initialPanel=none&identifier=interaction3c6bbd7a-e21b-44b0-aaf6-78f06c4e9114');


  await page5.locator('iframe').contentFrame().getByText('This is the beginning of your chat room.marrier, kris joined the').click();

  await page5.waitForTimeout(4000);

  //await page4.locator('xpath=(//div[@id="elm-chat-message-container"]//*[text()="Hi Sir, how can i help you?"])').first().click();


  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').click();

  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').fill('Hello Sir,Will share you ENT doctor details in a moment');
  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').press('Enter');

  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').click();
  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').fill('Dr Steve jobs,Phonix Hospital, 234 3rd cross, Phonix, AZ');
  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').press('Enter');

  await page3.getByPlaceholder('Type your message here').click();
  await page3.getByPlaceholder('Type your message here').fill('Thankyou so much.');
  await page3.getByPlaceholder('Type your message here').press('Tab');
  await page3.getByLabel('Send', { exact: true }).press('Enter');

  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').click();
  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').fill('Is there anything that i can help you?');
  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').press('Enter');

  await page3.getByPlaceholder('Type your message here').click();
  await page3.getByPlaceholder('Type your message here').fill('No Thankyou. Thats all i wanted');
  await page3.getByPlaceholder('Type your message here').press('Tab');
  await page3.getByLabel('Send', { exact: true }).press('Enter');

  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').click();
  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').fill('Have a good day Sir thankyou!');
  await page5.locator('iframe').contentFrame().locator('#acd-chat-textarea').press('Enter');


  await page1.waitForTimeout(5000);

  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Disconnect' }).click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Select wrap-up code Dropdown' }).click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('option', { name: 'Default Wrap-up Code' }).locator('slot').click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Done' }).click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Status List Dropdown').click();
  await page2.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Log Out').click();

  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Select wrap-up code Dropdown' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('option', { name: 'Default Wrap-up Code' }).locator('slot').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Done' }).click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Status List Dropdown').click();
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Log Out').click();

  await page1.getByRole('button', { name: 'cacsrc11n' }).click();
  await page1.getByText('Log off').click();

  await page2.getByRole('button', { name: 'cacsrc11n' }).click();
  await page2.getByText('Log off').click();

  await page1.waitForTimeout(37000);




});