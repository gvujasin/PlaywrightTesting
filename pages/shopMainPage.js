import { expect } from "@playwright/test"

exports.shopMainPage = class shopMainPage {
  constructor(page) {

    //locators

    this.page = page
    this.productsHeader = page.locator('.header_secondary_container')
    this.drawerSideBar = page.locator('.bm-burger-button')
    this.errorButton = page.locator('.error-button')
    this.openSideBar = page.getByRole('button', { name: 'Open Menu' })
    this.closeSideBar = page.getByRole('button', { name: 'Close Menu' })
    this.shoppingCart = page.locator('#shopping_cart_container').getByRole('link')
    this.listOfProducts = page.locator('#inventory_container').nth(1)
    this.footerPrivacy = page.getByText('© 2020 Sauce Labs. All Rights')
    this.dropdownList = page.locator('.product_sort_container')
    this.inventoryContainer = '.inventory_container';
    this.firstItem = page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button')
    this.firstItemAdded = page.getByRole('button', { name: 'REMOVE' })



  }

  //actions

  async checkIfProductsAreLoaded() {

    await expect(this.listOfProducts).toBeVisible();
  }

  async openDrawer() {

    await expect(this.drawerSideBar).toBeVisible();
    await this.drawerSideBar.click();
    await expect(this.openSideBar).toBeVisible();
    await expect(this.closeSideBar).toBeVisible();
    await this.closeSideBar.click();
  }

  async sortingProducts() {

    await expect(this.dropdownList).toBeVisible();
    await this.dropdownList.selectOption({ label: 'Price (low to high)' });
    await this.dropdownList.selectOption({ label: 'Price (high to low)' });
    await this.dropdownList.selectOption({ label: 'Name (A to Z)' });
    await this.dropdownList.selectOption({ label: 'Name (Z to A)' });

  }

  async addItemToCart() {
    
    await expect(this.firstItem).toBeVisible();
    await this.firstItem.click();
    await expect (this.firstItemAdded).toContainText('REMOVE');

  }
}

