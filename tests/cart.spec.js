import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { shopMainPage } from '../pages/shopMainPage';


test.beforeEach(async ({ page }) => {

    const Login = new LoginPage(page)
    await Login.goToLoginURL();
    await Login.validLogin();

});

test('should add first item to cart', async ({ page }) => {

    const shopPage = new shopMainPage(page)

    await shopPage.addItemToCart();
});

