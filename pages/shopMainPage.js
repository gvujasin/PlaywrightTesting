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


  }
}

