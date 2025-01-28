import { test, expect, chromium } from '@playwright/test';

import { makeCallthree, makeCallthreeUnknown, makeCalltwo,makeCalltwoUknown } from './utils';
import {
  launchBrowsers, login, GenesysCloudLogin, GenesysCloudLogout, UnknownCustomerVerification, GenesysCloudTransferCall, GCAcceptScreenpop, GCAttachInteraction, WrapUp, GenesysCloudMute, VerifiedCustomerVerification, screenPopVerification, GenesysCloudDisconnect,
  GenesysCloudConsult, GenesysCloudCompleteConsult, GenesysCloudBlind, launchThirdBrowser, GenesysCloudCloseExistingInteraction, editCallbackNumber, callBackTransfer, loginToCTI,
  performTransfer, changeStatusAndLogout, clickAcceptButton, verifyCustomer, hangUpCall, basicWrapUp,performTransferCallOnly,directhangUpCall,
  Five9Login
} from './utils1';

test.setTimeout(590000);
test.use({ viewport: { width: 1600, height: 940 } })

const instanceUrl = 'https://lab-04141-bos.lab-internal.pega.com/prweb/';

test('Five9 consult call only', async () => {

  // Launch the first browser instance
    
   const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);
 
   await login(page1, 'cacsrcti1', 'install123!');  
   
   await Five9Login(page1, 'agentOne@pega.com', '!Myteamon59cloud');

}

);