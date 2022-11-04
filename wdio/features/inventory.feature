Feature: Swag Labs Inventory Page

Background: User added a "Sauce Labs Backpack" to the cart and was on the "Inventory Page"
    Given I have gone to the "Home Page" URL
        And I have set the "Username Field" to "standard_user"
        And I have set the "Password Field" to "secret_sauce"
        And I have clicked the "Login Button"
        And I have clicked the "Sauce Labs Backpack Add To Cart Button"
        And the "Shopping Cart Badge" had the text "1"

Scenario: User removes a "Sauce Labs Backpack" from the cart
    When I click the "Sauce Labs Backpack Remove Button"
    Then the "Shopping Cart Badge" is "Not Displayed"

Scenario: User adds a "Sauce Labs Bike Light" to the cart
