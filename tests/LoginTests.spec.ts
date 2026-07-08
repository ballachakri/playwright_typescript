import { test } from '@playwright/test';
import * as allure from "allure-js-commons";
import LoginPage from '../pages/LoginPage';
import SecurePage from '../pages/SecurePage';


test('Valid user login @regression', async ({ page, baseURL }) => {

    const loginpage = new LoginPage(page);
    const securePage = new SecurePage(page);
    //await loginpage.navigateTo();
await page.goto(`${baseURL}/login`)
    await loginpage.enterUserName('tomsmith')
    await loginpage.enterPassword('SuperSecretPassword!')
    await loginpage.clickSubmit();
    await securePage.verifyUserLoginDetails('You logged into a secure area!')
});


test('Invalid user login @regression', async ({ page, baseURL }) => {

    const loginpage = new LoginPage(page);
    const securePage = new SecurePage(page);
    //await loginpage.navigateTo();
    await page.goto(`${baseURL}/login`)
    await loginpage.enterUserName('invalidUser')
    await loginpage.enterPassword('InvalidPassword')
    await loginpage.clickSubmit();
        await securePage.verifyUserLoginDetails('Your username is invalid!')
});

test.afterEach('Close the browser', async ({ page }) => {
    const src = await page.screenshot();
    await allure.attachment('screenshot', src, 'image/png');
    await page.close();
});
