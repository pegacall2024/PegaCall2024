import { test, expect, chromium } from '@playwright/test';

import { makeCallthree, makeCallthreeUnknown, makeCalltwo,makeCalltwoUknown } from './utils';
import {
  launchBrowsers, login, GenesysCloudLogin, GenesysCloudLogout, UnknownCustomerVerification, GenesysCloudTransferCall, GCAcceptScreenpop, GCAttachInteraction, WrapUp, GenesysCloudMute, VerifiedCustomerVerification, screenPopVerification, GenesysCloudDisconnect,
  GenesysCloudConsult, GenesysCloudCompleteConsult, GenesysCloudBlind, launchThirdBrowser, GenesysCloudCloseExistingInteraction, editCallbackNumber, callBackTransfer, loginToAvaya,
  performTransfer, AvayaLogout, clickAcceptButton, verifyCustomer, hangUpCall, basicWrapUp,performTransferCallOnly,directhangUpCall
} from './utils1';

test.setTimeout(590000);
test.use({ viewport: { width: 1600, height: 940 } })

const instanceUrl = 'https://lab-04141-bos.lab-internal.pega.com/prweb/';


test('Avaya V+D transfer', async () => {
  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToAvaya(page1, "Avaya8C11N", "8900", "5900", "8989");

  await makeCalltwo('918578562887');

  await loginToAvaya(page2, "Avaya8C11N", "8901", "5901", "8989");  

  await page1.getByTestId(':case-view:heading').click();

  await verifyCustomer(page1, 'Steve');

  await performTransfer(page1, 'Transfer', 'Call and interaction', '8901');

  await clickAcceptButton(page2);

  await verifyCustomer(page2, 'Steve');

  await hangUpCall(page2);

  await AvayaLogout(page1);

  await basicWrapUp(page2);

  await page2.waitForTimeout(10000);

  await AvayaLogout(page2);

  await page1.waitForTimeout(5000);

});

test('Avaya V+D conference - Mergeeee', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToAvaya(page1, "Avaya8C11N", "8900", "5900", "8989");
  
  await makeCalltwo('918578562887');

  await loginToAvaya(page2, "Avaya8C11N", "8901", "5901", "8989");

  await page1.getByTestId(':case-view:heading').click();

  await verifyCustomer(page1, 'Steve');

  await performTransfer(page1, 'Conference', 'Call and interaction', '8901');

  await clickAcceptButton(page2);

  await verifyCustomer(page2, 'Steve');

  await page1.getByLabel('Merge').click();

  await expect(page1.getByRole('article')).toContainText('8901');

  await page1.waitForTimeout(3000);

  await expect(page2.getByRole('article')).toContainText('8900');  

  await page2.locator('div').filter({ hasText: /^Unknown caller8900$/ }).getByLabel('Hang up').click();

  

  await page1.waitForTimeout(3000);

  await hangUpCall(page1);

  await page1.waitForTimeout(3000);

  await AvayaLogout(page1);

  await page2.waitForTimeout(3000);

  await AvayaLogout(page2);


});

test('Avaya V+D consult - Mergeeee', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToAvaya(page1, "Avaya8C11N", "8900", "5900", "8989");

  await makeCalltwo('918578562887');

  await loginToAvaya(page2, "Avaya8C11N", "8901", "5901", "8989");  

  await page1.getByTestId(':case-view:heading').click();

  await verifyCustomer(page1, 'Steve');

  await performTransfer(page1, 'Consult', 'Call and interaction', '8901');

  await clickAcceptButton(page2);

  await verifyCustomer(page2, 'Steve');

  await page1.getByLabel('Merge').click();

  await expect(page1.getByRole('article')).toContainText('8901');
  
  await expect(page2.getByRole('article')).toContainText('8900');

  await page1.locator('div').filter({ hasText: /^Unknown caller8901$/ }).getByLabel('Hang up').click();

  await hangUpCall(page1);

  await page1.waitForTimeout(3000);

  await AvayaLogout(page1);

  await page2.waitForTimeout(3000);

  await AvayaLogout(page2);

});

test('Avaya V+D conference - Hand Off', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToAvaya(page1, "Avaya8C11N", "8900", "5900", "8900");

  await loginToAvaya(page2, "Avaya8C11N", "8901", "5901", "8901");

  await makeCalltwo('918578562887');

  await page1.getByTestId(':case-view:heading').click();

  await verifyCustomer(page1, 'Steve');

  await performTransfer(page1, 'Conference', 'Call and interaction', '8901');

  await clickAcceptButton(page2);

  await verifyCustomer(page2, 'Steve');

  await page1.getByLabel('Hand off').click();

  //await expect(page1.getByRole('article')).toContainText('8901');

  //await expect(page2.getByRole('article')).toContainText('8900');

  //await page1.locator('div').filter({ hasText: /^Unknown caller8901$/ }).getByLabel('Hang up').click();
  await page1.waitForTimeout(7000);

  await hangUpCall(page2);

  await page1.waitForTimeout(3000);

  await AvayaLogout(page1);

  await page2.waitForTimeout(3000);

  await AvayaLogout(page2);


});

test('Avaya V+D Consult - Hand Off', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToAvaya(page1, "Avaya8C11N", "8900", "5900", "8900");

  await loginToAvaya(page2, "Avaya8C11N", "8901", "5901", "8901");

  await makeCalltwo('918578562887');

  await page1.getByTestId(':case-view:heading').click();

  await verifyCustomer(page1, 'Steve');

  await performTransfer(page1, 'Consult', 'Call and interaction', '8901');

  await clickAcceptButton(page2);

  await verifyCustomer(page2, 'Steve');

  await page1.getByLabel('Hand off').click();

  //await expect(page1.getByRole('article')).toContainText('8901');

  //await expect(page2.getByRole('article')).toContainText('8900');

  //await page1.locator('div').filter({ hasText: /^Unknown caller8901$/ }).getByLabel('Hang up').click();

  await page1.waitForTimeout(7000);

  await hangUpCall(page2);

  await page1.waitForTimeout(3000);

  await AvayaLogout(page1);

  await page2.waitForTimeout(3000);

  await AvayaLogout(page2);





});

test('Avaya Voice transfer', async () => {
  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToAvaya(page1, "Avaya8C11N", "8900", "5900", "8900");

  await loginToAvaya(page2, "Avaya8C11N", "8901", "5901", "8901");

  await makeCalltwoUknown('918578562887');

  await page1.getByTestId(':case-view:heading').click();
  
  await performTransferCallOnly(page1, 'Transfer', 'Call only', '8901');

  await clickAcceptButton(page2);  

  await hangUpCall(page2);

  await AvayaLogout(page1);    

  await AvayaLogout(page2);

});

test('Avaya Voice conference - Mergeeee', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToAvaya(page1, "Avaya8C11N", "8900", "5900", "8900");

  await loginToAvaya(page2, "Avaya8C11N", "8901", "5901", "8901");

  await makeCalltwoUknown('918578562887');

  //await page1.getByTestId(':case-view:heading').click();  

  await performTransferCallOnly(page1, 'Conference', 'Call only', '8901');

  await clickAcceptButton(page2);

  await page1.getByLabel('Merge').click();

  await page1.waitForTimeout(3000);

  await expect(page1.getByRole('article')).toContainText('8901');
 
  await expect(page2.getByRole('article')).toContainText('8900');
  
// await page.getByTestId(':case-view:heading').click();
// await expect(page.getByTestId(':case-view:heading')).toContainText('Unknown customer');

await directhangUpCall(page1);

await hangUpCall(page1);  

  await AvayaLogout(page1);

  await AvayaLogout(page2);


});

test('Avaya Voice consult - Mergeeee', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToAvaya(page1, "Avaya8C11N", "8900", "5900", "8900");

  await loginToAvaya(page2, "Avaya8C11N", "8901", "5901", "8901");

  await makeCalltwoUknown('918578562887');

 // await page1.getByTestId(':case-view:heading').click();

  await performTransferCallOnly(page1, 'Consult', 'Call only', '8901');

  await clickAcceptButton(page2);

  await page1.getByLabel('Merge').click();

  await page1.waitForTimeout(3000);

  await expect(page1.getByRole('article')).toContainText('8901');

  await expect(page2.getByRole('article')).toContainText('8900');

  await directhangUpCall(page1);

await hangUpCall(page1);  

  await AvayaLogout(page1);

  await AvayaLogout(page2);

});

test('Avaya Voice conference - Hand Off', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToAvaya(page1, "Avaya8C11N", "8900", "5900", "8900");

  await loginToAvaya(page2, "Avaya8C11N", "8901", "5901", "8901");

  await makeCalltwoUknown('918578562887');

  await page1.getByTestId(':case-view:heading').click();

  await performTransferCallOnly(page1, 'Conference', 'Call only', '8901');

  await clickAcceptButton(page2);

  await page1.getByLabel('Hand off').click();
    
  await hangUpCall(page2);
 
  await AvayaLogout(page1);

  await AvayaLogout(page2);


});

test('Avaya Voice Consult - Hand Off', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToAvaya(page1, "Avaya8C11N", "8900", "5900", "8900");

  await loginToAvaya(page2, "Avaya8C11N", "8901", "5901", "8901");

  await makeCalltwoUknown('918578562887');

  await page1.getByTestId(':case-view:heading').click();

  await performTransferCallOnly(page1, 'Consult', 'Call only', '8901');

  await clickAcceptButton(page2);

  await page1.getByLabel('Hand off').click();

  await hangUpCall(page2);

  await AvayaLogout(page1);

  await AvayaLogout(page2);





});