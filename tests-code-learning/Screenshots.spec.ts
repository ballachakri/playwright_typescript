import { test, expect, Locator } from "@playwright/test";

test('Screen shots', async ({ page }) => {
    // let timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    await page.goto("https://demowebshop.tricentis.com");
    // // page screenshot
    // await page.screenshot({ path: 'tests/screenshots/homepage_' + timestamp + '.png' });
    // // full page screenshot
    // await page.screenshot({ path: 'tests/screenshots/homepage_' + timestamp + '.png', fullPage: true });
    // // locator screenshot
    const search = page.locator("input[id='small-searchterms11']").inputValue();
    console.log(search);
    // // logo.screenshot({ path: 'tests/screenshots/logo_' + timestamp + '.png' });
    // await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({ path: 'tests/screenshots/logo_' + timestamp + '.png' });
})