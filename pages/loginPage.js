import { expect } from "@playwright/test";
const fs = require('fs');

exports.LoginPage = class LoginPage {
    constructor(page) {

        //locators

        this.page = page
        this.baseURL = 'https://www.saucedemo.com'
        this.webLogo = page.locator('.login_logo')
        this.usernameField = page.getByTestId('username')
        this.passwordField = page.getByTestId('password')
        this.loginButton = page.locator('#login-button')
        this.productsHeader = page.locator('.header_secondary_container')
        this.errorButton = page.locator('.error-button')
        this.productImages = '.inventory_item img';

    }

    //actions

    async goToLoginURL() {

        await this.page.goto('https://www.saucedemo.com/v1/index.html')
    }

    async validLogin() {

        await expect(this.webLogo).toBeVisible()
        await this.usernameField.click()
        await this.usernameField.fill('standard_user')
        await this.passwordField.click()
        await this.passwordField.fill('secret_sauce')
        await this.loginButton.click()
        await expect(this.productsHeader).toBeVisible()
    }

    async lockedUserLogin() {

        await expect(this.webLogo).toBeVisible()
        await this.usernameField.click()
        await this.usernameField.fill('locked_out_user')
        await this.passwordField.click()
        await this.passwordField.fill('secret_sauce')
        await this.loginButton.click()
        await expect(this.errorButton).toBeVisible()
    }

    async problemUserLogin() {

        await expect(this.webLogo).toBeVisible()
        await this.usernameField.click()
        await this.usernameField.fill('problem_user')
        await this.passwordField.click()
        await this.passwordField.fill('secret_sauce')
        await this.loginButton.click()

    }

    async checkBrokenImages() {
        console.log(`🔎 Checking images using locator: '${this.productImages}'`);

        await this.page.waitForSelector(this.productImages, { state: "attached" });

        const images = await this.page.locator(this.productImages).elementHandles();
        console.log(`📸 Total images found: ${images.length}`);

        if (fs.existsSync('screenshots')) {

            fs.rmSync('screenshots', { recursive: true, force: true });
            console.log('♻️  Removed existing screenshots directory');
        }

        fs.mkdirSync('screenshots');
        console.log('📁 Created new screenshots directory');

        for (let i = 0; i < images.length; i++) {
            let imageSrc = await images[i].getAttribute('src');
            if (!imageSrc.startsWith('http')) imageSrc = this.baseURL + imageSrc;


            const response = await this.page.request.get(imageSrc);
            if (response.status() !== 200) {
                console.log(`❌ Broken Image: ${imageSrc}`);
                await this.page.screenshot({ path: `screenshots/broken_image_${i + 1}.png` });
            } else {
                console.log(`✅ Image Loaded: ${imageSrc}`);
            }
        }

    }

}