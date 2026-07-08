import { test, expect } from "@playwright/test";


test('User Login ', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("a[href='/login']").click();
    await page.locator("input[id='Email']").fill("auto123@email.com");
    await page.locator("input[id='Password']").fill("Password!");
    await page.locator("input[class$='login-button']").click();
    expect(await page.locator("div[class='header-links'] a[href='/customer/info']").innerText()).toBe("auto123@email.com");
})

test('Search item', async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("input[id='small-searchterms']").fill('computer');
    await page.locator("input[class='button-1 search-box-button']").click();
    const item:string = await page.locator("input[id='Q']").inputValue();
    expect(item).toBe("computer");
})





