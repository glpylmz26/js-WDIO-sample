//#region Imports
import { Given, When, Then } from "@cucumber/cucumber";
import BasePage from "../pages/home.page";
import HomePage from "../pages/home.page";
import InventoryPage from "../pages/inventory.page";
import CartPage from "../pages/cart.page";
import InventoryItemPage from "../pages/inventory-item.page";
import CheckoutStepOnePage from "../pages/checkout-step-one.page";
import CheckoutStepTwoPage from "../pages/checkout-step-two.page";
//#endregion

//#region Pages
const pages = {
    "": HomePage,
    "inventory": InventoryPage,
    "cart": CartPage,
    "inventory-item": InventoryItemPage,
    "checkout-step-one": CheckoutStepOnePage,
    "checkout-step-two": CheckoutStepTwoPage
}
//#endregion

//#region Actions
Given("I have gone to the {string} URL", BasePage.getStepConfig(), (page) => {
    BasePage.goToPageUrl(page);
});

Given("I have clicked the {string}", BasePage.getStepConfig(), (element) => {
    BasePage.clickElement(element, pages[BasePage.getCurrentPage()].getSelector(element));
});
When("I click the {string}", BasePage.getStepConfig(), (element) => {
    BasePage.clickElement(element, pages[BasePage.getCurrentPage()].getSelector(element));
});

Given("I have set the {string} to {string}", BasePage.getStepConfig(), (element, elementValue) => {
    BasePage.setElementValue(element, pages[BasePage.getCurrentPage()].getSelector(element), elementValue);
});
When("I set the {string} to {string}", BasePage.getStepConfig(), (element, elementValue) => {
    BasePage.setElementValue(element, pages[BasePage.getCurrentPage()].getSelector(element), elementValue);
});
//#endregion

//#region Assertions
Then("the {string} is {string}", BasePage.getStepConfig(), (element, state) => {
    expect(BasePage.isElementState(element, pages[BasePage.getCurrentPage()].getSelector(element), state)).toBe(BasePage.stateBoolean(state));
});

Given("the {string} had the text {string}", BasePage.getStepConfig(), (element, elementText) => {
    expect(BasePage.getElementText(element, pages[BasePage.getCurrentPage()].getSelector(element))).toBe(elementText);
});
Then("the {string} has the text {string}", BasePage.getStepConfig(), (element, elementText) => {
    expect(BasePage.getElementText(element, pages[BasePage.getCurrentPage()].getSelector(element))).toBe(elementText);
});
//#endregion
