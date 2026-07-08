import { test, expect, Locator } from "@playwright/test";

test('Tables ', async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com");
    const products: Locator[] = await page.locator("h2[class='product-title']").all();

    for (let i = 0; i < products.length; i++) {
        console.log(await products[i].innerText());
           }

    await page.waitForTimeout(1500);
});

