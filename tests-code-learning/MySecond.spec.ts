import {test,expect} from "@playwright/test"

test('Verify URL' , async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/")
    await expect(page).toHaveURL("https://tutorialsninja.com/demo/");
})