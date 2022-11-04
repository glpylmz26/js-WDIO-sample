import BasePage from './base.page.js';

/**
 * Page-object containing elements for the Home Page
 */
class HomePage extends BasePage {

    /**
    * Returns a selector for an element which is local to the Home Page
    * @param element User-friendly name of the element we would like to identify (e.g `Login Button`)
    * @example Step: When I click the "Login Button"
    */
    getSelector(element){
        switch(element){
            case(`Swag Labs Logo`): return `//*[contains(@class, 'logo')]`;
            case(`Username Field`): return `#user-name`;
            case(`Password Field`): return `#password`;
            case(`Login Button`): return `#login-button`;
            default:
                throw `${HomePage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }
}

export default new HomePage();
