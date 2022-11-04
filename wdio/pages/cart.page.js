import BasePage from './base.page.js';

/**
 * Page-object containing elements for the Cart Page
 */
class CartPage extends BasePage {

    /**
    * Returns a selector for an element which is local to the Cart Page
    * @param element User-friendly name of the element we would like to identify (e.g `Checkout Button`)
    * @example Step: When I click the "Checkout Button"
    */
    getSelector(element){
        switch(element){
            case(`Sauce Labs Backpack Name`): return `//*[@id='item_4_title_link']/*`;
            case(`Remove Button`): return `#remove-sauce-labs-backpack`;
            case(`Continue Shopping Button`): return `#continue-shopping`;
            case(`Checkout Button`): return `#checkout`;
            default:
                throw `${CartPage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }
}

export default new CartPage();
