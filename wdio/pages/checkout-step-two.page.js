import BasePage from './base.page.js';

/**
 * Page-object containing elements for the Checkout Step Two Page
 */
class CheckoutStepTwoPage extends BasePage {

    /**
    * Returns a selector for an element which is local to the Checkout Step Two Page
    * @param element User-friendly name of the element we would like to identify (e.g `First Name Field`)
    * @example Step: When I set the "First Name Field" to "Robbie"
    */
    getSelector(element){
        switch(element){
            case(`Finish Button`): return `#finish`;
            default:
                throw `${CheckoutStepTwoPage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }
}

export default new CheckoutStepTwoPage();
