import { Given, When, Then } from 'cucumber';

import { homePage } from '../pageobjects/home.page';

Given(/^I am on the home page$/, () => {
    homePage.openHomePage();
});

When(/^I sumbit a message as (.*)$/, (name) => {
    homePage.submitMessage(name);
});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(homePage.successMessage).toBeExisting();
    expect(homePage.successMessage).toHaveTextContaining(message);
});