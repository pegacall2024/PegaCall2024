import { test, expect, chromium } from '@playwright/test';

import { makeCallthree, makeCalltwo } from './utils';
import { launchBrowsers, login,GenesysCloudLogin,GenesysCloudLogout,UnknownCustomerVerification,GenesysCloudTransferCall,GCAcceptScreenpop,GCAttachInteraction,WrapUp  } from './utils1';

test.setTimeout(590000);
test.use({viewport:{width:1600,height:940}})

test('Genesys Cloud transfer', async () => {

  const instanceUrl = 'https://lab-02183-hyd.lab-internal.pega.com/prweb';

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');  
    
    await GenesysCloudLogin(page1, 'salavagopi.krishna@in.pega.com', 'Pegacall++2024');



  await makeCallthree('917816615965');

  await login(page2, 'cacsrcti2', 'install123!');

  await GenesysCloudLogin(page2, 'automation@pega.com', 'Automation@123'); 

  await GCAttachInteraction(page1);


  await GenesysCloudTransferCall(page1);


  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Blind' }).click();
  
  await GCAcceptScreenpop(page2);
 

 
 await WrapUp(page2);


  await GenesysCloudLogout(page2);

  await GenesysCloudLogout(page1); 

  

  await page1.waitForTimeout(37000);


  
  
});