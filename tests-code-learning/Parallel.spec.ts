import { test, expect } from "@playwright/test";

const products: string[] = ['laptop', 'Giftcard', 'smartphone'];
// for loop
// for (const product of products) {
//     test(`Search test for ${product}`, async ({ page }) => {
//         await page.goto("https://demowebshop.tricentis.com/");
//         await page.locator("input[id='small-searchterms']").fill(product);
//         await page.locator("input[class='button-1 search-box-button']").click();
//         const item: string = await page.locator("input[id='Q']").inputValue();
//         expect(item).toBe(product);
//     })
// }


// foreach
products.forEach((product)=>{
    test(`Search test for ${product}`, async ({ page }) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator("input[id='small-searchterms']").fill(product);
        await page.locator("input[class='button-1 search-box-button']").click();
        const item: string = await page.locator("input[id='Q']").inputValue();
        expect(item).toBe(product);
    });
})
