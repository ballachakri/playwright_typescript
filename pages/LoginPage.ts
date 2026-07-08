import { Page, Locator } from '@playwright/test';

export default class LoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator("input[id='username']");
        this.password = page.locator("input[id='password']");
        this.submitButton = page.locator("button[type='submit']");
    }

    async enterUserName(username: string) {
        await this.username.fill(username);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async clickSubmit() {
        await this.submitButton.click();
    }

}


