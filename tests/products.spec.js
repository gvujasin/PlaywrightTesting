import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { shopMainPage } from '../pages/shopMainPage';


test.describe('Products functions', () => {

    test.beforeEach(async ({ page }) => {

        const Login = new LoginPage(page)
        await Login.goToLoginURL();
        await Login.validLogin();

    });

    test('should check if products are loaded', async ({ page }) => {

        const shopPage = new shopMainPage(page)

        await shopPage.checkIfProductsAreLoaded();
    });

    test('should check sidebar interaction', async ({ page }) => {

        const shopPage = new shopMainPage(page)

        await shopPage.openDrawer();
    });

    test('should sort products', async ({ page }) => {

        const shopPage = new shopMainPage(page)

        await shopPage.sortingProducts();
    });

    test('should add first item to cart', async ({ page }) => {

        const shopPage = new shopMainPage(page)

        await shopPage.addItemToCart();
    });

});