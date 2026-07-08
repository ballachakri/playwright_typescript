import { test, expect, Page, chromium } from "@playwright/test";

test('Browser and Context', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demowebshop.tricentis.com");
});