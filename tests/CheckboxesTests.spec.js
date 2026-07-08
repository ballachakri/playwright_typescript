import { test } from '@playwright/test';
import * as allure from "allure-js-commons";
import CheckboxesPage from '../pages/CheckboxesPage';

test('Check -> Unchecked @regression', async ({ page, baseURL }) => {

    const checkboxpage = new CheckboxesPage(page)
    await page.goto(`${baseURL}/checkboxes`);
    await checkboxpage.clickUnchecked();
    await checkboxpage.verifyUncheckedIsChecked();
});


test('Uncheck -> Checked @regression', async ({ page, baseURL }) => {

    const checkboxpage = new CheckboxesPage(page);
    await page.goto(`${baseURL}/checkboxes`);
    await checkboxpage.clickChecked();
    await checkboxpage.verifyCheckedIsUnchecked();
});

test.afterEach('Close the browser', async ({ page }) => {
    const src = await page.screenshot();
    await allure.attachment('screenshot', src, 'image/png');
    await page.close();
});