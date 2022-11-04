import BasePage from './base.page.js';

/**
 * Page-object containing elements for the Inventory Page
 */
class InventoryPage extends BasePage {

    /**
    * Returns a selector for an element which is local to the Inventory Page
    * @param element User-friendly name of the element we would like to identify (e.g `Sauce Labs Backpack Image`)
    * @example Step: Then the "Sauce Labs Backpack Image" is displayed
    */
    getSelector(element){
        switch(element){
            case(`Swag Labs Logo`): return `//*[contains(@class, 'logo')]`;
            case(`Sauce Labs Backpack Image`): return `//*[contains(@src, 'sauce-backpack')]`;
            case(`Sauce Labs Backpack Add To Cart Button`): return `#add-to-cart-sauce-labs-backpack`;
            case(`Sauce Labs Backpack Remove Button`): return `#remove-sauce-labs-backpack`;
            case(`Shopping Cart Badge`): return `.shopping_cart_badge`;
            default:
                throw `${InventoryPage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }
}

export default new InventoryPage();
