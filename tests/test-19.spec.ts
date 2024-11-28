import { test, expect, chromium } from '@playwright/test';

import { makeCallthree, makeCalltwo } from './utils';

test.setTimeout(590000);
test.use({viewport:{width:1600,height:940}})

test('Genesys Cloud Validate the Event Name in alert TEST-192268', async () => {


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

  await page1.goto('https://lab-04141-bos.lab-internal.pega.com/prweb/app/default/2mCjkZJmJzIb2YFZHOYfCw*/!STANDARD');
  await page1.getByPlaceholder('User name').click();
  await page1.getByPlaceholder('User name').fill('cacsrcti1');
  await page1.getByPlaceholder('User name').press('Tab');
  await page1.getByPlaceholder('Password', { exact: true }).fill('install123!');
  await page1.getByRole('button', { name: 'Log in' }).click();
  await page1.goto('https://lab-04141-bos.lab-internal.pega.com/prweb/app/PegaCallC11nSample');
  await page1.getByTestId(':privacy-dialog:accept').click();
  await page1.getByRole('heading', { name: 'My dashboard' }).click();


  await page1.evaluate(() => {
    const publicevent = event => {
      var div = document.createElement("div");
      try {
        document.getElementById("Ctinotification").remove();
      } catch (e) {}
      div.id = "Ctinotification";
      div.style.background = "green";
      div.style.zIndex = 100;
      div.style.wordBreak = "break-word";
      div.style.width = "300px";
      div.style.position = "absolute";
      div.style.right = "488px";
      div.style.bottom = "200px";
      div.style.padding = "10px";
      div.style.paddingTop = "20px";
      div.style.color = "white";

      div.innerHTML = event;
      div.innerHTML += " Event Name: " + JSON.parse(event).pyEventName + "";
      var button = document.createElement("button");
      button.innerHTML = "x";
      button.style.float = "right";
      button.style.top = 0;
      button.style.right = "10px";
      button.style.position = "absolute";
      button.style.background = "transparent";
      button.style.color = "black";
      button.style.fontWeight = "700";
      button.style.fontSize = "18px";
      button.style.border = "0px";
      button.addEventListener("click", () => {
        document.getElementById("Ctinotification").style.display = 'none';
      });
      div.appendChild(button);
      document.body.appendChild(div);
    };
    PCore.getPubSubUtils().subscribe('PUBLIC CALL STATE EVENT', publicevent);
  });


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

  // Function to verify the event name
  async function verifyEventName(expectedEventName: string) {
    try {
      const jsonString = await page1.locator('//*[@id="Ctinotification"]').innerText();
      
      // Extract the event name from the string
      const eventName = jsonString.split(' Event Name: ')[1];
      const actualEventName = eventName.split('\n')[0];
      
      console.log('This is the actual event name:', actualEventName);
      
      // Assert the Event Name
      expect(actualEventName).toBe(expectedEventName);
      console.log('Event Name matches:', actualEventName);
  } catch (e) {
      console.log('Event Name:', expectedEventName, 'is not displayed');
      throw e; // Re-throw the error to ensure the test fails
  }
  }
  
  await verifyEventName('Offering');
  console.log(`Clicked link at Offering: ${new Date().toLocaleString()}`);
  await page1.waitForTimeout(8000);

  await verifyEventName('CONNECTED');
  console.log(`Clicked link at connected: ${new Date().toLocaleString()}`);
  

  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Mute' }).click();
  
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Hold' }).click();
  await page1.waitForTimeout(2000);
  await verifyEventName('HELD'); 
  console.log(`Clicked link at Held: ${new Date().toLocaleString()}`);

 

 await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Hold' }).click();
 await page1.waitForTimeout(2000);
 await verifyEventName('RETRIEVED');
console.log(`Clicked link at Retrieved: ${new Date().toLocaleString()}`);
 

 await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Disconnect' }).click();
 await page1.waitForTimeout(3000);
 await verifyEventName('Disconnected');
 console.log(`Clicked link at Disconnected: ${new Date().toLocaleString()}`);
 
 await page1.waitForTimeout(2000);
 await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Select wrap-up code Dropdown' }).click();
 await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('option', { name: 'Default Wrap-up Code' }).locator('slot').click();
 await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Done' }).click();
 
 
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Status List Dropdown').click();  
  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByLabel('Log Out').click(); 

  
  await page1.getByRole('button', { name: 'cacsrc11n' }).click();
  await page1.getByText('Log off').click();

  
});