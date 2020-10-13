import { Given, When, Then } from 'cucumber';

import { loginPage } from '../pageobjects/login.page';
import { securePage } from '../pageobjects/secure.page';

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    loginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(securePage.flashAlert).toBeExisting();
    expect(securePage.flashAlert).toHaveTextContaining(message);
});

