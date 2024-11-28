import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.getByPlaceholder('User name').click();
  await page.getByPlaceholder('User name').fill('casysadminc11n');
  await page.getByPlaceholder('User name').press('Tab');
  await page.getByPlaceholder('Password').fill('install12345!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('//a[@title="Configure Dev Studio"]').click();
  await page.locator('//span[text()="Channel Services"]').hover();
  await page.locator('//span[text()="Pega Call"]').hover();
  await page.locator('//span[text()="Administration & Configuration"]').click();   
await page.locator('iframe[name="PegaGadget0Ifr"]').contentFrame().locator('[data-test-id="\\32 015102805255605123934"]').getByRole('button', { name: 'Add CTI Link' }).click();
await page.locator('iframe[name="PegaGadget0Ifr"]').contentFrame().getByRole('menuitem', { name: 'GenesysCloud' }).click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('(//*[text()="ChannelServices-Admin-CTILink-OpenCTIDesktop-EmbeddedUI  short description"] //following::input)[1]').click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('(//*[text()="ChannelServices-Admin-CTILink-OpenCTIDesktop-EmbeddedUI  short description"] //following::input)[1]').fill('GenesysCloudTestAutomation');
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('(//*[text()="ChannelServices-Admin-CTILink-OpenCTIDesktop-EmbeddedUI  short description"] //following::input)[1]').press('Tab');
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByLabel('Link Definition Name').fill('GenesysCloudTestAutomation');
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('//div[text()="Create and open"]').click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('//input[@name="$PpyNewResults$pcontactCenterInstanceURL"]').fill('https://apps.mypurecloud.com/crm/embeddableFramework.html');





await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="text-configure-cti-props"]')).toContainText('Configure optional properties');




await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="text-configure-cti-props-desc"]')).toContainText('Optional property values overwrite the default values at runtime');

await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByLabel('Property')).toContainText('Property');
await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByLabel('Value')).toContainText('Value');
await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="test-field-id"]')).toContainText('Custom attributes');



await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('(//div[@data-lg-id="LGLayoutGroupRuleFormLayoutS11"])')).toContainText('Logging');
await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('(//div[@data-lg-id="LGLayoutGroupRuleFormLayoutS11"])')).toContainText('History');
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByText('Logging').click();


await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('//*[text()="Log Level"]')).toContainText('Log Level');
await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('//*[text()="Server side Logs :"]')).toContainText('Server side Logs :');
await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('//*[@name="$PpyNewResults$ppyLogging$ppyEnableServerLogs" and @value="true"]')).toBeChecked();




await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('//*[@name="$PpyNewResults$ppyLogging$ppyLogLevel"]').click();











await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 0180627093543020241481"]')).toContainText('AllDebugInfoWarnErrorFatalOff');
await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 0180627093543020241481"]')).toHaveValue('40000');
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 0180627093543020241481"]').selectOption('-2147483648');


await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().getByText('Link configuration').click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 0150811020031078455502"]').click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="CTIOptionalPropertiesTable-R2"] [data-test-id="test-field-id"]').click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="CTIOptionalPropertiesTable-R2"] [data-test-id="CTIOptionalPropertyValue"]').dblclick();
await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 0150811020031078349975"]')).toBeVisible();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 0150811020031078455502"]').click();
await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="CTIOptionalPropertiesTable-R3"] [data-test-id="test-field-id"]')).toBeVisible();
await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="CTIOptionalPropertiesTable-R3"] [data-test-id="CTIOptionalPropertyValue"]')).toBeVisible();
await expect(page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="CTIOptionalPropertiesTable-R3"] [data-test-id="\\32 0150811020031078349975"]')).toBeVisible();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="CTIOptionalPropertiesTable-R2"] [data-test-id="\\32 0150811020031078349975"]').click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 0150811020031078349975"]').click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 01805050354190319333"] [data-test-id="\\32 014102117201604205631"]').click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 014121212082709891165"]').click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 014123004505205103497"]').click();
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 014123004505205103497"]').fill('qa');
await page.locator('iframe[name="PegaGadget1Ifr"]').contentFrame().locator('[data-test-id="\\32 02008200356040102443"]').getByRole('button', { name: 'Delete' }).click();
await page.getByLabel('GENESYSCLOUDTESTAUTOMATION').getByLabel('Close this tab').click();
await page.locator('[data-test-id="px-opr-image-ctrl"]').click();
await page.getByRole('menuitem', { name: 'Log off' }).click();
await page.goto('https://lab-04141-bos.lab-internal.pega.com/prweb/app/PegaCallC11nSample/2mCjkZJmJzIb2YFZHOYfCw*/!STANDARD?pzuiactionrrr=CXtpbn1xd3FyYnRFalRrK0tTRFUzRjU4QUprc0ZyTmNEa2dWejBGVkFka3pUT2FjWVFKK1hWMFVjY0xzdnNySkpHL2dhWDMrOXNyVkVxckRJRVI4d2dTOUUrdz09*');
});