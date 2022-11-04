Feature: Swag Labs Home Page

Background: User was on the "Home Page"
    Given I have gone to the "Home Page" URL

Scenario Outline: Users log into the website
    When I set the "Username Field" to <Username>
        And I set the "Password Field" to <Password>
        And I click the "Login Button"
    Then the "Swag Labs Logo" is "Displayed"

Examples:
    |  Username                 |  Password      | *Hint*                                                               |
    | "standard_user"           | "secret_sauce" |  This user can log in                                                |
    | "locked_out_user"         | "secret_sauce" |  This user cannot log in                                             |
    | "problem_user"            | "secret_sauce" |  This user can log in, but experiences a problem with the UI         |
    | "performance_glitch_user" | "secret_sauce" |  This user can log in, but experiences a 6 second performance glitch |
