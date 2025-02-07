import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';




test.describe('Login scenarios', () => {

    test('should login with valid creds', async ({ page }) => {

        const Login = new LoginPage(page)

        await Login.goToLoginURL();
        await Login.validLogin();


    });

    test('should try to login with locked user', async ({ page }) => {

        const Login = new LoginPage(page)

        await Login.goToLoginURL();
        await Login.lockedUserLogin();
    });

    test('should try to login with problematic user & verify product image loading', async ({ page }) => {

        const Login = new LoginPage(page)

        await Login.goToLoginURL();
        await Login.problemUserLogin();
        await Login.checkBrokenImages();
    });

});

