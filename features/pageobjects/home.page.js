import BasePage from './basePage.page';
import * as faker from 'faker';

export default class HomePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get userName () { return $('input#name') }
    get userEmail () { return $('input#email') }
    get userPhoneNumber () { return $('input#phone') }
    get subjectElem () { return $('input#subject') }
    get messageFieldElem () { return $('textarea#description') }
    get btnSubmit () { return $('button#submitContact') }
    get successMessage() { return $('.contact.row h2') }

    /**
     * submit a message on the contact us form
     * @param {string} name of the visitor 
     */
    submitMessage (name) {
        this.userName.scrollIntoView();
        this.userName.setValue(name);
        this.userEmail.setValue(faker.internet.email());
        this.userPhoneNumber.setValue(faker.phone.phoneNumber()); 
        this.subjectElem.setValue(faker.lorem.words(3)); 
        this.messageFieldElem.setValue(faker.lorem.paragraph(3)); 
        this.btnSubmit.click(); 
    }

    openHomePage () {
        return super.open('/');
    }
}

export const homePage = new HomePage();
