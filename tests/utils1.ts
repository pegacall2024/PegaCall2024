import axios from 'axios';
import { chromium, Browser, BrowserContext, Page  } from 'playwright';
const { expect } = require('@playwright/test');

export async function launchBrowsers(instanceUrl: string) {
    // Function to launch a browser instance
    //const pathToExtension = 'C:\\Users\\kriss5\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\bicpgcafpnanabffjhclgpeehoadhglp';
    const userDataDir = '/tmp/test-user-data-dir';
    async function launchBrowser() {
      const browser = await chromium.launch({ headless: false, 
        args: [
          '--use-fake-ui-for-media-stream', // Automatically allow media stream
          '--use-fake-device-for-media-stream', // Use fake device for media stream
          //`--disable-extensions-except=${pathToExtension}`,
          //`--load-extension=${pathToExtension}`
        ]
      });
      const context = await browser.newContext({
        permissions: ['microphone']
      });
      const page = await context.newPage();
      await context.grantPermissions(['microphone'], { origin: instanceUrl });
      await page.goto(instanceUrl);
      return { browser, context, page };
    }
  
    // Launch the first browser instance
    const { browser: browser1, context: context1, page: page1 } = await launchBrowser();
  
    // Launch the second browser instance
    const { browser: browser2, context: context2, page: page2 } = await launchBrowser();
  
    return { browser1, context1, page1, browser2, context2, page2 };
  }

  export async function launchThirdBrowser(chatUrl: string) {
    const browser3: Browser = await chromium.launch({
      args: [
        '--use-fake-ui-for-media-stream', // Automatically allow media stream
        '--use-fake-device-for-media-stream' // Use fake device for media stream
      ]
    });
  
    const context3: BrowserContext = await browser3.newContext({
      permissions: ['microphone'],
      ignoreHTTPSErrors: true // Ignore HTTPS errors
    });
  
    const page3: Page = await context3.newPage();
    await context3.clearCookies();
    await context3.clearPermissions();
    await context3.storageState({ path: 'state.json' });
  
    await context3.grantPermissions(['microphone'], { origin: chatUrl });
    await page3.goto(chatUrl, { waitUntil: 'load' });
  
    return { browser3, context3, page3 };
  }
  
  export async function login(page: Page, username: string, password: string) {
    await page.getByPlaceholder('User name').click();
    await page.getByPlaceholder('User name').fill(username);
    await page.getByPlaceholder('User name').press('Tab');
    await page.getByPlaceholder('Password', { exact: true }).fill(password);
    await page.getByRole('button', { name: 'Log in' }).click();

    
    try {
      const acceptButton = await page.getByTestId(':privacy-dialog:accept');
      let isButtonVisible = false;
    
      for (let i = 0; i < 10; i++) {
        isButtonVisible = await acceptButton.isVisible();
        if (isButtonVisible) {
          await acceptButton.click();
          break;
        }
        await page.waitForTimeout(1000); // Wait for 1 second before checking again
      }
    
      if (!isButtonVisible) {
        console.log('Accept button is not present.');
      }
    } catch (error) {
      console.error('Error clicking the privacy dialog accept button:', error);
    }
    await page.getByRole('heading', { name: 'My dashboard' }).click();
  }

  export async function Five9Login(page: Page, email: string, password: string) {
    await page.getByLabel('Phone panel').click();
    await page.selectOption('select[label="CTI Link"]', { label: 'Five9C11N' });
    await page.getByRole('button', { name: 'Login' }).click();
    const frame = page.locator('#five9softphone').contentFrame();
        
await frame.getByRole('img', { name: 'Five9 logo' }).click();
await frame.getByLabel('Username').click();
await frame.getByLabel('Username').fill(email);
await frame.getByLabel('Password').click();
await frame.getByLabel('Password').click();
await frame.getByLabel('Password').fill(password);
await frame.getByRole('button', { name: 'Log In', exact: true }).click();
await frame.getByRole('button', { name: 'Confirm' }).click();

await page.waitForTimeout(2040000);
await frame.getByRole('button', { name: 'Refresh the page' }).click();

  }

  export async function GenesysCloudLogin(page: Page, email: string, password: string) {
    await page.getByLabel('Phone panel').click();
    await page.selectOption('select[label="CTI Link"]', { label: 'GenesysCloudC11N' });
    await page.getByRole('button', { name: 'Login' }).click();
    const frame = page.locator('#genesysCloudsoftPhone').contentFrame();
    await frame.getByPlaceholder('Email Address').click();
    await frame.getByPlaceholder('Email Address').fill(email);
    await frame.getByPlaceholder('Email Address').press('Tab');
    await frame.getByPlaceholder('Password').fill(password);
    await frame.getByRole('button', { name: 'Log In' }).click();

    await frame.getByRole('link', { name: 'Genesys Cloud Logo' }).click();
    
    try {
        const frame = page.locator('#genesysCloudsoftPhone').contentFrame();
    
        const wrapUpButton = frame.getByLabel('Wrap Up (Requires Wrap-up)');
        if (await wrapUpButton.isVisible()) {
          await wrapUpButton.click();
          await frame.getByRole('button', { name: 'Select wrap-up code Dropdown' }).click();
          await frame.getByLabel('Wrap-up Code List').locator('span').click();
          await frame.getByRole('button', { name: 'Done' }).click();
        } else {
          console.log('Wrap Up button is not present.');
        }
      } catch (error) {
        console.error('Error clicking the privacy dialog accept button:', error);
      }
    



    await frame.getByLabel('Status List Dropdown').click();
    await frame.getByRole('button', { name: 'On Queue' }).click();
    
  }
  export async function GenesysCloudMute(page: Page) {
    const frame = page.locator('#genesysCloudsoftPhone').contentFrame();
  await frame.getByRole('button', { name: 'Mute' }).click();

  }

  export async function GenesysCloudDisconnect(page: Page) {
    const frame = page.locator('#genesysCloudsoftPhone').contentFrame();
  await frame.getByRole('button', { name: 'Disconnect' }).click();

  }

  export async function GenesysCloudConsult(page: Page) {
    const frame = page.locator('#genesysCloudsoftPhone').contentFrame();
    await frame.getByRole('button', { name: 'Consult' }).click();

  }
  export async function GenesysCloudBlind(page: Page) {
    const frame = page.locator('#genesysCloudsoftPhone').contentFrame();
    await frame.getByRole('button', { name: 'Blind' }).click();

  }

  export async function GenesysCloudLogout(page: Page) {
    const justRef = page.locator('#genesysCloudsoftPhone').contentFrame();
    
    try {
        const wrapUpDropdown = justRef.getByRole('button', { name: 'Select wrap-up code Dropdown' });
        const timeout = 15000; // 15 seconds
        const interval = 500; // Check every 500ms
        let elapsedTime = 0;
      
        while (elapsedTime < timeout) {
          if (await wrapUpDropdown.isVisible()) {
            await wrapUpDropdown.click();
            await justRef.getByRole('option', { name: 'Default Wrap-up Code' }).locator('slot').click();
            await justRef.getByRole('button', { name: 'Done' }).click();
            break;
          } else {
            await page.waitForTimeout(interval);
            elapsedTime += interval;
          }
        }
      
        if (elapsedTime >= timeout) {
          console.log('Wrap-up code dropdown is not present.');
        }
      } catch (error) {
        console.error('Error clicking the wrap-up code dropdown:', error);
      }


    await justRef.getByLabel('Status List Dropdown').click();
    await justRef.getByLabel('Log Out').click();
  
    await page.getByRole('button', { name: 'cacsrc11n' }).click();
    await page.getByText('Log off').click();
 

  }

  export async function GenesysCloudCloseExistingInteraction(page: Page) {
    const frame = page.locator('#genesysCloudsoftPhone').contentFrame();
    
    await frame.getByRole('button', { name: 'Select wrap-up code Dropdown' }).click();
    await frame.getByRole('option', { name: 'Default Wrap-up Code' }).locator('slot').click();
    await frame.getByRole('button', { name: 'Done' }).click();

    
  }
  export async function editCallbackNumber(page: Page, phoneNumber: string) {
    await page.getByText('Callback').click();
    await page.getByTestId(':case-view:actions').click();
    await page.getByText('Edit callback number').click();
    await page.getByTestId('Call back:phone-input:country-code').selectOption('+1');
    await page.getByTestId('Call back:phone-input:control').click();
    await page.getByTestId('Call back:phone-input:control').press('ControlOrMeta+a');
    await page.getByTestId('Call back:phone-input:control').press('Delete');
    await page.getByTestId('Call back:phone-input:control').fill(phoneNumber);
    await page.getByRole('button', { name: 'Submit' }).click();
  }

  export async function UnknownCustomerVerification(page: Page) {
    await page.getByTestId(':case-view:heading').getByText('Unknown').click();  // Unknown Customer
    await page.getByTestId(':case-view:subheading').getByText('Customer').click(); // Customer
    await page.getByTestId(':case-view:summary-fields').getByText('Status').click();
    await page.getByTestId(':case-view:summary-fields').getByText('Unverified').click();
  }

  export async function GenesysCloudTransferCall(page: Page) {
    const frame = page.locator('#genesysCloudsoftPhone').contentFrame();
  
    await frame.getByRole('button', { name: 'Transfer' }).click();
    await frame.getByLabel('Search People').click();
    await frame.getByRole('combobox', { name: 'Name or Number' }).click();
    await frame.getByRole('combobox', { name: 'Name or Number' }).fill('basic');
    await frame.getByTitle('BasicQueue').click();
  }

  export async function GenesysCloudCompleteConsult(page: Page) {
    const frame = page.locator('#genesysCloudsoftPhone').contentFrame();
  
    await frame.getByRole('button', { name: 'Transfer' }).click();
    await frame.getByRole('button', { name: 'Complete' }).click();

  }

  export async function GCAcceptScreenpop(page: Page) {
    await page.getByLabel('Collapse call control panel').click();
    await page.getByRole('button', { name: 'Accept' }).click();
    
    // try {
    //     const acceptButton = page.getByRole('button', { name: 'Accept' });
    //     if (await acceptButton.isVisible()) {
    //       await acceptButton.click();
    //     } else {
    //       console.log('Accept button is not present.');
    //     }
    //   } catch (error) {
    //     console.error('Error clicking the Accept button:', error);
    //   }
    
    await page.getByLabel('Expand call control panel').click();
    const frame = page.locator('#genesysCloudsoftPhone').contentFrame();
    await frame.getByRole('button', { name: 'Mute' }).click();
  }

  export async function callBackTransfer(page) {
    const frame = await page.locator('#genesysCloudsoftPhone').contentFrame();
    
    await frame.getByRole('button', { name: 'Transfer' }).click();
    await frame.getByLabel('Search Queues').click();
    await frame.getByRole('combobox', { name: 'Name or Number' }).click();
    await frame.getByRole('combobox', { name: 'Name or Number' }).fill('automation@pega.com');
    await frame.getByRole('img', { name: 'User Icon' }).click();
  }

  
  

  export async function GCAttachInteraction(page: Page) {
    await page.getByText('Callback').click();
    await page.getByLabel('Attach interaction').click();
    await page.getByTestId(':text-area:control').click();
    await page.getByTestId(':text-area:control').fill('Test comments');
    await page.getByRole('button', { name: 'Submit' }).click();
  }
  export async function VerifiedCustomerVerification(page: Page) {
    await page.getByText('Callback').click();
    await page.getByTestId(':case-view:heading').getByText('Steve').click();  // Steve R Smith
    await page.getByTestId(':case-view:subheading').getByText('Customer').click(); // Customer
    await page.getByTestId(':case-view:summary-fields').getByText('Status').click();
    await page.getByTestId(':case-view:summary-fields').getByText('Verified').click();
  }

  export async function WrapUp(page: Page) {
    await page.getByRole('heading', { name: 'Accounts' }).click();
    await page.getByRole('button', { name: 'Wrap up' }).click();
    await page.getByRole('textbox', { name: 'Start a conversation' }).locator('div').click();
    await page.getByRole('textbox', { name: 'Start a conversation' }).fill('test');
    await page.getByRole('button', { name: 'Submit' }).click();
  }
  export async function screenPopVerification(page: Page) {

      
      await page.getByLabel('Collapse call control panel').click();
      await page.getByRole('heading', { name: 'Transferred call...' }).click();
     await page.locator('article').filter({ hasText: 'Transferred call..' }).locator('span').first().click();
     //await page.getByText('+1 857 856').click();
     await page.getByText('verified').first().click();
    await page.getByText('Wrong queue').click();
     await page.getByTestId(':field-value-list:').getByText('Test comments').click();
     await page.getByText('Reason').click();
     await page.getByLabel('Expand call control panel').click();
  }

  export async function loginToCTI(page: Page, ctiLink: string, extension: string, agentId: string, password: string,initialStatus: string,finalStatus: string) {
    await page.getByLabel('Phone panel').click();
    await page.selectOption('select[label="CTI Link"]', { label: ctiLink });
    await page.getByLabel('Extension').click();
    await page.getByLabel('Extension').fill(extension);
    await page.getByLabel('Extension').press('Tab');
    await page.getByLabel('Agent ID').fill(agentId);
    await page.getByLabel('Agent ID').press('Tab');
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).dblclick();
    await page.locator('div').filter({ hasText: extension }).first().click();
    await page.getByLabel('Status').click();
    await page.getByLabel(initialStatus).click();
    await page.getByLabel('Status').click();
    await page.getByLabel(finalStatus).click();

  }
  export async function loginToAvaya(page: Page, ctiLink: string, extension: string, agentId: string, password: string) {
    await page.getByLabel('Phone panel').click();
    await page.selectOption('select[label="CTI Link"]', { label: ctiLink });
    await page.getByLabel('Extension').click();
    await page.getByLabel('Extension').fill(extension);
    await page.getByLabel('Extension').press('Tab');
    await page.getByLabel('Agent ID').fill(agentId);
    await page.getByLabel('Agent ID').press('Tab');
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).dblclick();
    await page.locator('div').filter({ hasText: extension }).first().click();
    
  }

  export async function performTransfer(page: Page,transferType: string,interactionType: string,extension: string) {
    await page.getByTestId(':summary-item:actions').getByTestId(':menu-button:').click();
    await page.getByText(transferType).click();
    await page.getByText(interactionType).click();
    await page.getByLabel('Reason').click();
    await page.getByLabel('On break unselected').getByTestId(':summary-item:primary').click();
    await page.getByTestId(':text-area:control').click();
    await page.getByTestId(':text-area:control').fill('Test');
    await page.getByLabel('Dial pad').click();
    await page.getByLabel('Phone number input').click();
    await page.getByLabel('Phone number input').fill(extension);
    await page.getByRole('button', { name: transferType }).click();
  }

  
  export async function performTransferCallOnly(page: Page, transferType: string, interactionType: string, extension: string) {
       
        await page.getByTestId(':summary-item:actions').getByTestId(':menu-button:').click();
        await page.getByText(transferType).click();
        await page.getByText(interactionType).click();
        await page.getByLabel('Dial pad').click();
        await page.getByLabel('Phone number input').click();
        await page.getByLabel('Phone number input').fill(extension);
        await page.getByRole('button', { name: transferType }).click();
    }
  
   
  export async function changeStatusAndLogout(page: Page) {
    await page.waitForTimeout(7000);
    try{
    await page.getByLabel('Status').click();
    await page.getByLabel('Break-Cofee').click();
    await page.getByLabel('Status').click();
    await page.getByLabel('Logout').click();    
    await page.getByRole('button', { name: 'cacsrc11n' }).click();
    await page.getByText('Log off').click();
    }
 catch (error) {
    console.error('Inside catch block of changeStatusAndLogout', error);
    await page.getByLabel('Open combobox list').click();
    await page.getByLabel('Break-Cofee unselected').getByTestId(':summary-item:primary').click();
    await page.getByTestId(':combo-box:control').click();
    await page.getByLabel('Logout unselected').getByTestId(':summary-item:primary').click();
    await page.getByRole('button', { name: 'cacsrc11n' }).click();
    await page.getByText('Log off').click();

    }
}

export async function AvayaLogout(page: Page) {
  await page.waitForTimeout(7000);
  try{
  await page.getByLabel('Status').click();  
  await page.getByLabel('Logout').click();    
  await page.getByRole('button', { name: 'cacsrc11n' }).click();
  await page.getByText('Log off').click();
  }
catch (error) {
  console.error('Inside catch block of changeStatusAndLogout', error);
  await page.getByLabel('Open combobox list').click(); 
  await page.getByLabel('Logout unselected').getByTestId(':summary-item:primary').click();
  await page.getByRole('button', { name: 'cacsrc11n' }).click();
  await page.getByText('Log off').click();

  }
}
  export async function clickAcceptButton(page: Page) {
    await page.getByRole('button', { name: 'Accept' }).click();
}

export async function verifyCustomer(page: Page, customerName : String) {
    await expect(page.getByTestId(':case-view:heading')).toContainText(customerName);
}

export async function hangUpCall(page: Page) {
    await page.waitForTimeout(3000);
    await page.getByTestId(':summary-item:actions').getByTestId(':menu-button:').click();
    await page.getByText('Hang up').click();
}

export async function directhangUpCall(page: Page) {
    await page.waitForTimeout(2000);
    await page.getByLabel('Hang up').click();
}



export async function basicWrapUp(page: Page) {
    await page.getByRole('button', { name: 'Wrap up' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
}

function Given(arg0: string, arg1: (username: any, password: any) => Promise<void>) {
  throw new Error('Function not implemented.');
}

