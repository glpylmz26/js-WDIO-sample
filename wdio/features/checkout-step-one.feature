Feature: Swag Labs Checkout Step One Page

Background: User added a "Sauce Labs Backpack" to the cart and was on the "Cart Page"
    Given I have gone to the "Home Page" URL
        And I have set the "Username Field" to "standard_user"
        And I have set the "Password Field" to "secret_sauce"
        And I have clicked the "Login Button"
        And I have clicked the "Sauce Labs Backpack Add To Cart Button"
        And I have clicked the "Shopping Cart Badge"
        And I have clicked the "Checkout Button"

Scenario: User adds information to the checkout form and continues
    When I set the "First Name Field" to "Joe"
        And I set the "Last Name Field" to "Bloggs"
        And I set the "Zip/Postal Code Field" to "CB25 9PB"
        And I click the "Continue Button"
    Then the "Finish Button" is "Displayed"
