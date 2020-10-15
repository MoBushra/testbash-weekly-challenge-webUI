import adminCredentials from '../../testdata/credentials/adminCredentials';
import BasePage from './basePage.page';

export default class AdminLoginPage extends BasePage {
    get userLogin () { return $('input#username') }
    get userPassword () { return $('input#password') }
    get btnLogin () { return $('button#doLogin') }

    /**
     * Login as an admin into the panel
     * The credentials are saved 
     * @param {string} username 
     * @param {string} password 
     */
    login (username = adminCredentials.adminAccount.email,
        password = adminCredentials.adminAccount.password) {
        this.userLogin.waitForEnabled();
        this.userLogin.setValue(username);
        this.userPassword.setValue(password);
        this.btnLogin.waitForEnabled();
        this.btnLogin.click();
    }

}

export const adminLoginPage = new AdminLoginPage();