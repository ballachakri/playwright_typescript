import { test, expect, Page, Locator } from "@playwright/test";

let page: Page;

test.beforeAll('Open browser', async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://demowebshop.tricentis.com/");
})

test.beforeEach('User Login ', async()=>{

    await page.locator("a[href='/login']").click();
    await page.locator("input[id='Email']").fill("auto123@email.com");
    await page.locator("input[id='Password']").fill("Password!");
    await page.locator("input[class$='login-button']").click();
    expect(await page.locator("div[class='header-links'] a[href='/customer/info']").innerText()).toBe("auto123@email.com");
})

test('Search item', async () => {
    await page.locator("input[id='small-searchterms']").fill('computer');
    await page.locator("input[class='button-1 search-box-button']").click();
    const item:string = await page.locator("input[id='Q']").inputValue();
    expect(item).toBe("computer");
})

test.afterEach('Log out', async()=>{
    await page.locator("a[class='ico-logout']").click();
    expect(await page.locator("a[href='/login']").innerHTML()).toBe("Log in");
})

test.afterAll('Open browser', async () => {
   await page.close();
})



//     test.beforeAll(' before all ', async () => {
//         console.log('before all tests');
//     });

//     test.beforeEach(' before each', async () => {
//         console.log('before each test');
//     });

//     test(' test 1 ', async () => {
//         console.log('This is test 1');
//     });

//     test(' test 2 ', async () => {
//         console.log('This is test 2');
//     });


//     test.afterEach(' after each ', async () => {
//         console.log('After each test');
//     });

//     test.afterAll('after all ', async () => {
//         console.log('After all tests');
//     });



