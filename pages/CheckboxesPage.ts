import { expect, Page, Locator} from '@playwright/test';


export default class CheckboxesPage {

    readonly page: Page;
    readonly unchecked : Locator;
    readonly checked: Locator;

    constructor(page: Page){
        this.page = page;
        this.unchecked = page.locator("input[type='checkbox']:first-child");
        this.checked = page.locator("input[type='checkbox']:last-child");
    }

      async clickUnchecked(){
       await this.unchecked.click();
    }


    async verifyUncheckedIsChecked(){
        expect(await this.unchecked.isChecked()).toBe(true);
    }


    async clickChecked(){
        await this.checked.click();
    }

        async verifyCheckedIsUnchecked(){
        expect(await this.unchecked.isChecked()).toBe(false);
    }


}