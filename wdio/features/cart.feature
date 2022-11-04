Feature: Swag Labs Cart Page

Background: User added a "Sauce Labs Backpack" to the cart and was on the "Cart Page"
    Given I have gone to the "Home Page" URL
        And I have set the "Username Field" to "standard_user"
        And I have set the "Password Field" to "secret_sauce"
        And I have clicked the "Login Button"
        And I have clicked the "Sauce Labs Backpack Add To Cart Button"
        And I have clicked the "Shopping Cart Badge"

Scenario: User clicks the Continue Shopping Button and navigates to the Inventory Page
    When I click the "Continue Shopping Button"
    Then the "Sauce Labs Backpack Image" is "Displayed"

Scenario: User clicks the Remove Button and the Sauce Labs Backpack is removed from the Cart
    When I click the "Remove Button"
    Then the "Sauce Labs Backpack Name" is "Not Displayed"

Scenario: User clicks the Sauce Labs Backpack Name and navigates to the Sauce Labs Backpack Inventory Item Page
    When I click the "Sauce Labs Backpack Name"
    Then the "Inventory Item Name" has the text "Sauce Labs Backpack"

Scenario: User clicks the Checkout Button and navigates to the Checkout Step One Page
    When I click the "Checkout Button"
    Then the "Zip/Postal Code Field" is "Displayed"
