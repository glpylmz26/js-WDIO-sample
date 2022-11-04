import Faker from "@faker-js/faker";

/**
 * Base page containing elements which are global to the application and also methods for supporting the framework
 */
export default class BasePage {

    //#region Step Configuration
    
    /**
    * Returns the step definition configuration
    */
    getStepConfig(){
        return {
            timeout: 10000 //10 seconds
        }
    }
    //#endregion

    //#region Wait & Scroll

    /**
    * Waits for an element to reach a defined state
    * @param selector The selector for the element we want to wait for to reach some state
    * @param state The state we wait for the element to reach
    */
    waitForElement(selector, state){
        switch(state){
            case(`Clickable`): $(selector).waitForClickable({ timeout: 500 });
            break;
            case(`Displayed`): $(selector).waitForDisplayed({ timeout: 500 });
            break;
            case(`Not Clickable`): browser.waitUntil(() => !$(selector).isClickable(), { timeout: 500 });
            break;
            case(`Not Displayed`): browser.waitUntil(() => !$(selector).isDisplayed(), { timeout: 500 });
            break;
            default:
                throw `${BasePage.name}.${this.waitForElement.name}: ${state} was not configured`;
        }
    }

    /**
    * Scrolls the element to the center of the page
    * @param selector The selector for the element we want to scroll to the center
    */
    scrollToElement(selector){
        $(selector).scrollIntoView({
            behaviour: `smooth`,
            block: `center`,
            inline: `center`
        });
    }

    /**
    * Waits for an element to reach a certain state before scrolling it to the center of the page
    * @param selector The selector for the element we would like to wait for and scroll to the center
    * @param state The state we want the element to reach before scrolling
    */
    waitForElementAndScroll(selector, state){
        this.waitForElement(selector, state);
        if(!state.includes(`Not`)){
            this.scrollToElement(selector);
        }
    }
    //#endregion

    //#region Actions

    /**
    * Waits for an element to be clickable before clicking the element
    * @param element The element we want to click
    * @param selector The selector for the element we want to click
    * @example Step: When I click the "Checkout Button"
    */
    clickElement(element, selector){
        try{
            this.waitForElementAndScroll(selector, `Clickable`);
            $(selector).click();
        }
        catch(error){
            throw `${BasePage.name}.${this.clickElement.name}: ${error.message.replace(selector, element)}`;
        }
    }

    /**
    * Waits for an element to be clickable before setting the value of the element
    * @param element The element we want to set the value of
    * @param selector The selector for the element we want to set the value of
    * @param value The value we wish to set the element to
    * @example Step: When I set the "Last Name Field" to "Bloggs"
    */
    setElementValue(element, selector, value){
        try{
            this.waitForElementAndScroll(selector, `Clickable`);
            $(selector).setValue(value);
        }
        catch(error){
            throw `${BasePage.name}.${this.setElementValue.name}: ${error.message.replace(selector, element)}`;
        }
    }

    /**
    * Opens a sub page of the page
    * @param page Path of the sub page (e.g. /path/to/page.html)
    * @example Step: When I open the "Home Page"
    */
    goToPageUrl(page){
        try{
            const baseUrl = `https://www.saucedemo.com`;
            switch (page){
                case(`Home Page`): return browser.url(`${baseUrl}/`);
                default:
                    throw `${BasePage.name}.${this.goToPageUrl.name}: page ("${page}") was not configured`;
            }
        }
        catch(error){
            throw `${BasePage.name}.${this.goToPageUrl.name}: ${error.message}`;
        }
    }
    //#endregion

    //#region Assertions

    /**
    * Gets current page URL with the Base URL not included
    * @example Step: Then the page URL is "cart"
    */
    getCurrentPage(){
        try{
            const pageUrl = browser.getUrl();
            let page = pageUrl.split(`.com/`).pop().split(`.html`).shift();
            return page;
        }
        catch(error){
            throw `${BasePage.name}.${this.getCurrentPage.name}: ${error.message}`;
        }
    }

    /**
    * Returns true if an element is the provided state and false otherwise
    * @param element The element we want to verify if it is the provided state or not
    * @param selector The selector for the element we want to verify if it is the provided state or not
    * @param state The provided state we want to verify that the element is in
    * @example Step: Then the "Checkout Button" is displayed
    */
    isElementState(element, selector, state){
        try{
            this.waitForElementAndScroll(selector, state);
            const stateMethod = state.split(`Not `).pop();
            switch(stateMethod){
                case(`Clickable`): return $(selector).isClickable();
                case(`Displayed`): return $(selector).isDisplayed();
                default:
                    throw `${BasePage.name}.${this.isElementState.name}: state ("${state}") was not configured`;
            }
        }
        catch(error){
            throw `${BasePage.name}.${this.isElementState.name}: ${error.message.replace(selector, element)}`;
        }
    }

    /**
    * Returns the text of an element
    * @param element The element we want to get the text from
    * @param selector The selector for the element we want to get the text from
    * @example Step: Given the "Inventory Item Name" had the text "Sauce Labs Backpack"
    */
    getElementText(element, selector){
        try{
            this.waitForElementAndScroll(selector, `Displayed`);
            return $(selector).getText();
        }
        catch(error){
            throw `${BasePage.name}.${this.getElementText.name}: ${error.message.replace(selector, element)}`;
        }
    }
    //#endregion

    //#region Helpers

    /**
    * Returns false if the state includes 'Not' and true otherwise
    * @param state The state of the element
    * @example Step: Given the "Login Button" was "Not Displayed"
    */
    stateBoolean(state){
        try{
            if(state.includes(`Not`)){
                return false;
            }
            else{
                return true;
            }
        }
        catch(error){
            throw `${BasePage.name}.${this.stateBoolean.name}: ${error.message}`;
        }
    }

    //#endregion

    //#region Generate Data

    /**
    * Generates a random first name (male or female)
    * @example Step: When I set the "First Name Field" to "Generated First Name"
    */
    generateFirstName(){
        try{
            return Faker.name.firstName();
        }
        catch(error){
            throw `${BasePage.name}.${this.generateFirstName.name}: ${error.message}`;
        }
    }

    /**
    * Generates a random last name
    * @example Step: When I set the "Last Name Field" to "Generated Last Name"
    */
    generateLastName(){
        try{
            return Faker.name.lastName();
        }
        catch(error){
            throw `${BasePage.name}.${this.generateLastName.name}: ${error.message}`;
        }
    }

    /**
    * Generates a random zip code
    * @example Step: When I set the "Zip/Postal Code Field" to "Generated Zip Code"
    */
    generateZipCode(){
        try{
            return Faker.address.zipCode();
        }
        catch(error){
            throw `${BasePage.name}.${this.generateZipCode.name}: ${error.message}`;
        }
    }

    /**
    * Returns a generated data value if a generated data type is provided as the element value
    * @param elementValue The element value which is passed into the step
    * @example Step: When I set the "First Name Field" to "Generated First Name"
    */
    getGeneratedData(elementValue){
        try{
            switch(elementValue){
                case(`Generated First Name`): return //Missing code
                case(`Generated Last Name`): return //Missing code
                case(`Generated Zip Code`): return //Missing code
                default:
                    return elementValue;
            }
        }
        catch(error){
            throw `${BasePage.name}.${this.getGeneratedData.name}: ${error.message}`;
        }
    }
    //#endregion
}
