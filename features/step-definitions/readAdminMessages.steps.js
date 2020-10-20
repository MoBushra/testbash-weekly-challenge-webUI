import { Given, When, Then } from 'cucumber';
import { adminLoginPage } from '../pageobjects/adminLogin.page';
import { adminMessagesPage } from '../pageobjects/adminMessages.page';
import { adminPanelPage } from '../pageobjects/adminPanel.page';
import { homePage } from '../pageobjects/home.page';

Given(/^User (.*) sends a message$/, (name) => {
    homePage.openHomePage();
    homePage.submitMessage(name);
});

When(/^I log in as an admin using my admin credentials$/, () => {
    homePage.openAdminLoginPage();
    adminLoginPage.login();
});

When(/^I open the specific message send by (.*)$/, (name) => {
    adminPanelPage.clickInbox();
    adminMessagesPage.openSenderEmail(name);
});

Then(/^I should see the content of the message by (.*)$/, (name) => {
    expect(adminMessagesPage.fromSenderElement).toBeExisting();
    expect(adminMessagesPage.fromSenderElement).toHaveTextContaining(name);
});
