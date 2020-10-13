import BasePage from './basePage.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export default class SecurePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
}

export const securePage = new SecurePage();
