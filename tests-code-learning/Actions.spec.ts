import {expect, test} from "@playwright/test"

test("Action on elements" , async({page}) =>{

  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("a[id='cookieChoiceDismiss']").click();
  await page.waitForTimeout(30000);
})


