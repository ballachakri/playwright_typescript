import { expect, Page, Locator } from '@playwright/test';

export default class SecurePage {

    readonly page: Page;
    readonly result: Locator;

    constructor(page: Page) {
        this.page = page;
        this.result = page.locator("div[id='flash']");
    }

    async verifyUserLoginDetails(result: string) {
      expect(await this.result.textContent()).toContain(result);
    }
}