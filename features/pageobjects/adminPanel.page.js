import BasePage from './basePage.page';

export default class AdminPanelPage extends BasePage {
    get inboxElement() { return $('.ml-auto.navbar-nav > li:nth-of-type(1)') }

    clickInbox() {
        this.inboxElement.waitForEnabled();
        this.inboxElement.click();
    }

}

export const adminPanelPage = new AdminPanelPage();