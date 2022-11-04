import BasePage from './base.page.js';

/**
 * Page-object containing elements for the Checkout Step One Page
 */
class CheckoutStepOnePage extends BasePage {

    /**
    * Returns a selector for an element which is local to the Checkout Step One Page
    * @param element User-friendly name of the element we would like to identify (e.g `First Name Field`)
    * @example Step: When I set the "First Name Field" to "Robbie"
    */
    getSelector(element){
        switch(element){
            case(`First Name Field`): return `#first-name`;
            case(`Last Name Field`): return `#last-name`;
            case(`Zip/Postal Code Field`): return `#postal-code`;
            case(`Continue Button`): return `#continue`;
            default:
                throw `${CheckoutStepOnePage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }
}

export default new CheckoutStepOnePage();
