# interview-exercises

## Introduction

Welcome to the AQA Technical Test!

You will be given 4 exercises, each increasing in difficulty, where you will have an opportunity to demonstrate your automation knowledge.

Feel free to use Google if you want to, but everything you should need to complete the exercises can be found within the framework.

There is more than one solution to each exercise and you are welcome to answer these however you like.

Asking questions during the Technical Test is encouraged so don't be afraid to ask for help.

Please ensure that you have followed the installation instructions beforehand so that the exercises can be completed during the interview.

Good luck!

Tips:
- The Base URL for the Technical Test is https://www.saucedemo.com
- The state of the website will automatically reset after each scenario
- There are hints to assist you during the exercises


## Installation

Please complete the following installation instructions before starting the Technical Test:

**Step 1.** Ensure you have the following software installed on your machine:

- Git: https://git-scm.com/download/win
- Node Version 14.16.1: https://nodejs.org/dist/v14.16.1/node-v14.16.1-x64.msi
- VS Code: https://code.visualstudio.com/docs/setup/windows

Notes:
- You may need to restart your machine after installing
- You can use the following commands to make sure everything installed correctly
  - git version
  - node -v
  - npm -v

**Step 2.** Clone the git repository using the following command:

git clone https://github.com/RobbieDixonSMS/interview-exercises.git

**Step 3.** Install the required node packages:

In VS Code, open a New Terminal (Ctrl+Shift+`), and execute the following command:

- npm install


## Exercise One - Swag Labs Home Page [home.feature]

Terminal Command: npx wdio wdio.conf.js --spec home

The "Home Page" feature uses examples to define scenarios that log in as different users.

These scenarios all pass currently and some of them should fail.

a) Identify the examples which define scenarios that should fail.

b) Change the InventoryPage element in the "Then" step to another InventoryPage element which will trigger some of the failures.

c) Edit the "getStepConfig" method on the BasePage to trigger the remaining failure.

Required Files:
- home.feature
    - Then the "Swag Labs Logo" is "Displayed" [write]
- inventory.page.js
    - getSelector(element); [read-only]
- base.page.js
    - getStepConfig(); [write]


## Exercise Two - Swag Labs Inventory Page [inventory.feature]

Terminal Command: npx wdio wdio.conf.js --spec inventory

The "Inventory Page" feature has 1 complete scenario and 1 incomplete scenario.

Finish the incomplete scenario and inspect the website to add a selector for the new element.

Required Files:
- inventory.feature [write]
- inventory.page.js [write]


## Exercise Three - Swag Labs Cart Page [cart.feature]

Terminal Command: npx wdio wdio.conf.js --spec cart

The "Cart Page" feature has a background but no scenarios.

Use any of the available elements to add 2 scenarios to the feature.

Required Files:
- cart.feature [write]
- cart.page.js [read-only]
- inventory-item.page.js [read-only]
- inventory.page.js [read-only]
- checkout-step-one.page.js [read-only]


## Exercise Four (Bonus Round) - Swag Labs Checkout Step One Page [checkout-step-one.feature]

Terminal Command: npx wdio wdio.conf.js --spec checkout-step-one

The "Checkout Step One Page" feature has a scenario that populates a checkout form with hardcoded values.

To increase our test coverage, we would like to change these values to be randomly generated ones.

a) Finish off the missing code in the "getGeneratedData" method on the BasePage.

b) Use the "getGeneratedData" method in the "When I set the {string} to {string}" step in the BaseSteps file.

c) Update the "Checkout Step One Page" feature with the generated data types.

Required Files:
- base.page.js
    - generateFirstName(); [read-only]
    - generateLastName(); [read-only]
    - generateZipCode(); [read-only]
    - getGeneratedData(elementValue) [write]
- base.steps.js
    - When("I set the {string} to {string}" [write]
- checkout-step-one.feature
    - When I set the "First Name Field" to "Joe" [write]
    - And I set the "Last Name Field" to "Bloggs" [write]
    - And I set the "Zip/Postal Code Field" to "CB25 9PB" [write]
