import { test, expect, chromium } from '@playwright/test';

import { makeCallthree, makeCallthreeUnknown, makeCalltwo,makeCalltwoUknown } from './utils';
import {
  launchBrowsers, login, GenesysCloudLogin, GenesysCloudLogout, UnknownCustomerVerification, GenesysCloudTransferCall, GCAcceptScreenpop, GCAttachInteraction, WrapUp, GenesysCloudMute, VerifiedCustomerVerification, screenPopVerification, GenesysCloudDisconnect,
  GenesysCloudConsult, GenesysCloudCompleteConsult, GenesysCloudBlind, launchThirdBrowser, GenesysCloudCloseExistingInteraction, editCallbackNumber, callBackTransfer, loginToCTI,
  performTransfer, changeStatusAndLogout, clickAcceptButton, verifyCustomer, hangUpCall, basicWrapUp,performTransferCallOnly,directhangUpCall
} from './utils1';

test.setTimeout(590000);
test.use({ viewport: { width: 1600, height: 940 } })

const instanceUrl = 'https://lab-02183-hyd.lab-internal.pega.com/prweb';

test('Finesse V+D conference - Mergeeee', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');

  await login(page2, 'cacsrcti2', 'install123!');

  await loginToCTI(page1, "Finesse12C11N", "2962", "2462", "2962", "Break-Cofee unselected", "Ready unselected");

  await loginToCTI(page2, "Finesse12C11N", "2963", "2463", "2963", "Break-Cofee unselected", "Ready unselected");

  await makeCalltwo('918578562962');

  await page1.getByTestId(':case-view:heading').click();

  await verifyCustomer(page1, 'Steve');

  await performTransfer(page1, 'Conference', 'Call and interaction', '2963');

  await clickAcceptButton(page2);

  await verifyCustomer(page2, 'Steve');

  await page1.getByLabel('Merge').click();

  await expect(page1.getByRole('article')).toContainText('2963');

  await expect(page2.getByRole('article')).toContainText('2962');

  await page1.locator('div').filter({ hasText: /^Unknown caller2963$/ }).getByLabel('Hang up').click();

  await hangUpCall(page1);

  await page1.waitForTimeout(3000);

  await changeStatusAndLogout(page1);

  await page2.waitForTimeout(3000);

  await changeStatusAndLogout(page2);





});