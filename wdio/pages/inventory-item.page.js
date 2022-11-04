import BasePage from './base.page.js';

/**
 * Page-object containing elements for the Inventory Item Page
 */
class InventoryItemPage extends BasePage {

    /**
    * Returns a selector for an element which is local to the Inventory Item Page
    * @param element User-friendly name of the element we would like to identify (e.g `Inventory Item Name`)
    * @example Step: Then the "Inventory Item Name" has the text "Sauce Labs Backpack"
    */
    getSelector(element){
        switch(element){
            case(`Inventory Item Name`): return `.inventory_details_name`;
            case(`Inventory Item Description`): return `.inventory_details_desc`;
            case(`Inventory Item Price`): return `.inventory_details_price`;
            default:
                throw `${InventoryItemPage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }
}

export default new InventoryItemPage();
