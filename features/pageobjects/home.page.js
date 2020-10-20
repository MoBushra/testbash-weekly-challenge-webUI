import BasePage from './basePage.page';
import * as faker from 'faker';

export default class HomePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get firstName () { return $('input#name') }
    get userEmail () { return $('input#email') }
    get userPhoneNumber () { return $('input#phone') }
    get subjectElem () { return $('input#subject') }
    get messageFieldElem () { return $('textarea#description') }
    get btnSubmit () { return $('button#submitContact') }
    get successMessage() { return $('.contact.row h2') }
    get adminPanelLnk() { return $('=Admin panel')}
    get welcomeBanner() { return $('div#collapseBanner > .jumbotron')}
    get btnLetMeHack() { return $('.col-2.text-center > .btn.btn-primary')}

    /**
     * submit a message on the contact us form
     * @param {string} name of the visitor 
     */
    submitMessage (name) {
        this.firstName.scrollIntoView();
        this.firstName.setValue(name);
        this.userEmail.setValue(faker.internet.email());
        this.userPhoneNumber.setValue(faker.phone.phoneNumber());
        this.subjectElem.setValue(faker.lorem.words(3));
        this.messageFieldElem.setValue(faker.lorem.paragraph(3));
        this.btnSubmit.click();
    }

    openHomePage () {
        super.open('/');
        if (this.welcomeBanner.isDisplayed() === true) {
            this.btnLetMeHack.click();
        }
    }

    openAdminLoginPage() {
        this.openHomePage();
        this.adminPanelLnk.scrollIntoView();
        this.adminPanelLnk.click();
    }

}

export const homePage = new HomePage();
