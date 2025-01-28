import { test, expect, chromium } from '@playwright/test';

import { makeCallthree, makeCallthreeUnknown, makeCalltwo } from './utils';
import { launchBrowsers, login,GenesysCloudLogin,GenesysCloudLogout,UnknownCustomerVerification,GenesysCloudTransferCall,GCAcceptScreenpop,GCAttachInteraction,WrapUp,GenesysCloudMute,VerifiedCustomerVerification,screenPopVerification,GenesysCloudDisconnect,
  GenesysCloudConsult,GenesysCloudCompleteConsult,GenesysCloudBlind,launchThirdBrowser,GenesysCloudCloseExistingInteraction,editCallbackNumber,callBackTransfer
  } from './utils1';

test.setTimeout(590000);
test.use({viewport:{width:1600,height:940}})

const instanceUrl = 'https://crm-insprint-2510.testsvc.integration.pegaservice.net/prweb/';

test('Genesys Cloud consult call only', async () => {

 // Launch the first browser instance
 //const instanceUrl = 'https://lab-02183-hyd.lab-internal.pega.com/prweb';

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');  
  
  await GenesysCloudLogin(page1, 'salavagopi.krishna@in.pega.com', 'Pegacall++2024');

  await makeCallthreeUnknown('917816615965');

  await login(page2, 'cacsrcti2', 'install123!');

  await GenesysCloudLogin(page2, 'automation@pega.com', 'Automation@123');   

  await UnknownCustomerVerification(page1);

  await GenesysCloudTransferCall(page1);

  await page1.locator('#genesysCloudsoftPhone').contentFrame().getByRole('button', { name: 'Consult' }).click();

  await GCAcceptScreenpop(page2);

  await UnknownCustomerVerification(page2);

  await GenesysCloudLogout(page2);

  await GenesysCloudLogout(page1); 

  
});

test('Genesys Cloud transferrrr Only', async () => {
  

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);

  await login(page1, 'cacsrcti1', 'install123!');  
    
  await GenesysCloudLogin(page1, 'salavagopi.krishna@in.pega.com', 'Pegacall++2024');

  await makeCallthree('917816615965');

  await GenesysCloudMute(page1);

  await login(page2, 'cacsrcti2', 'install123!');

  await GenesysCloudLogin(page2, 'automation@pega.com', 'Automation@123'); 

  await GCAttachInteraction(page1);


  await GenesysCloudTransferCall(page1);


  await GenesysCloudBlind(page1);
  
  await GCAcceptScreenpop(page2);
 

 
 //await WrapUp(page2);

 await GenesysCloudDisconnect(page2); 
  await GenesysCloudLogout(page2);

  await GenesysCloudLogout(page1); 
  


  
});

test('Genesys Cloud consult V+D', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);
 
   await login(page1, 'cacsrcti1', 'install123!');  
       
   await GenesysCloudLogin(page1, 'salavagopi.krishna@in.pega.com', 'Pegacall++2024');

     await login(page2, 'cacsrcti2', 'install123!');

     await GenesysCloudLogin(page2, 'automation@pega.com', 'Automation@123');  
 
   await makeCallthree('917816615965');
 
   await login(page2, 'cacsrcti2', 'install123!');
   
   await GenesysCloudLogin(page2, 'automation@pega.com', 'Automation@123');  
 
   await GenesysCloudMute(page1);
 
   await VerifiedCustomerVerification(page1);
 
   await GCAttachInteraction(page1);
 
   await GenesysCloudTransferCall(page1); 
 
   await GenesysCloudConsult(page1);  
 
   await screenPopVerification(page2); 
 
   await GCAcceptScreenpop(page2);

   await GenesysCloudCompleteConsult(page1);
 
   await GenesysCloudDisconnect(page2); 
  
   //await WrapUp(page2);
 
   await GenesysCloudLogout(page2); 
 
 
  await GenesysCloudLogout(page1); 
 
 
   
 
  // await page1.waitForTimeout(47000); 
   
 
 
   
 });

 test('Genesys Cloud transfer V+D', async () => {

  const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);
 
   await login(page1, 'cacsrcti1', 'install123!');  
       
     await GenesysCloudLogin(page1, 'salavagopi.krishna@in.pega.com', 'Pegacall++2024');
 
   await makeCallthree('917816615965');
 
   await login(page2, 'cacsrcti2', 'install123!');
   
   await GenesysCloudLogin(page2, 'automation@pega.com', 'Automation@123');  
 
   await GenesysCloudMute(page1);
 
   await VerifiedCustomerVerification(page1);
 
   await GCAttachInteraction(page1);
 
   await GenesysCloudTransferCall(page1); 
 
   await GenesysCloudBlind(page1);
 
   await screenPopVerification(page2); 
 
   await GCAcceptScreenpop(page2);
 
   await GenesysCloudDisconnect(page2); 
  
   await WrapUp(page2);
 
   await GenesysCloudLogout(page2);  
 
  await GenesysCloudLogout(page1); 
 
 
 
   
 });

 test('Genesys Cloud callback V+D transfer', async () => {
 
 
   const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);
    
      await login(page1, 'cacsrcti1', 'install123!');  
          
        await GenesysCloudLogin(page1, 'salavagopi.krishna@in.pega.com', 'Pegacall++2024');
 
   await makeCallthree('917816615965');
 
   await login(page2, 'cacsrcti2', 'install123!');
    
    await GenesysCloudLogin(page2, 'automation@pega.com', 'Automation@123');     
 
    await VerifiedCustomerVerification(page1);
 
    await GenesysCloudMute(page1);
   
    await GenesysCloudDisconnect(page1); 
 
  await GenesysCloudCloseExistingInteraction(page1);
 
  await editCallbackNumber(page1, '8578562984');
  
  //await page1.getByLabel('+1 857 856 2984').click(); 

  await page1.getByRole('link', { name: '+1 857 856' }).click();

  //await page1.$x("//*[@label='+18578562984']").then(elements => elements[0].click());

   await GenesysCloudMute(page1); 
   
   await GCAttachInteraction(page1);
   
 await callBackTransfer(page1);
 
 await blindTransfer(page1);
   
   await screenPopVerification(page2); 
  
   await GCAcceptScreenpop(page2);
 
   await GenesysCloudDisconnect(page2); 
   await GenesysCloudLogout(page2);  
  
   await GenesysCloudLogout(page1);   
   
 });

 test('Genesys Cloud callback V+D consult', async () => {
 
 
   const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);
    
      await login(page1, 'cacsrcti1', 'install123!');  
          
        await GenesysCloudLogin(page1, 'salavagopi.krishna@in.pega.com', 'Pegacall++2024');
 
   await makeCallthree('917816615965');
 
   await login(page2, 'cacsrcti2', 'install123!');
    
    await GenesysCloudLogin(page2, 'automation@pega.com', 'Automation@123');     
 
    await VerifiedCustomerVerification(page1);
 
    await GenesysCloudMute(page1);
   
    await GenesysCloudDisconnect(page1); 
 
  await GenesysCloudCloseExistingInteraction(page1);
 
  await editCallbackNumber(page1, '8578562984');
  
  await page1.getByLabel('+').click();  
 
  await GenesysCloudMute(page1); 
   
   await GCAttachInteraction(page1);
   
 await callBackTransfer(page1);
 
 await GenesysCloudConsult(page1);
   
   await screenPopVerification(page2); 
  
   await GCAcceptScreenpop(page2);
 
   await GenesysCloudDisconnect(page2);
   
   await GenesysCloudDisconnect(page1);
   await GenesysCloudLogout(page2);  
  
   await GenesysCloudLogout(page1);   
   
 });

 test('Genesys Cloud Validate the Event Name in alert TEST-192268', async () => {
 
 
   const { browser1, context1, page1, browser2, context2, page2 } = await launchBrowsers(instanceUrl);
       
         await login(page1, 'cacsrcti1', 'install123!');  
             
           
 
 
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
 
 
   await GenesysCloudLogin(page1, 'salavagopi.krishna@in.pega.com', 'Pegacall++2024');
 
   
 
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
 
   await verifyEventName('Connected');
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
  await GenesysCloudLogout(page1);  
 
   
 });

 //await page1.getByRole('link', { name: '+1 857 856' }).click();