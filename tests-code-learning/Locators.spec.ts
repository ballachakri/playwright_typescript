import { test, expect } from "@playwright/test";

test(`Locate elements`, async ({ page }) => {

    await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    await expect(page).toHaveTitle("Dummy ticket for applying visa - Verifiable flight reservation for embassy");
    await page.locator("input[id='travname']").fill("Chakra");
    await page.waitForTimeout(5000);

});