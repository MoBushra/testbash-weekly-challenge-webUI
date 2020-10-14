import BasePage from './basePage.page';

export default class BookRoomPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
}

export const bookRoomPage = new BookRoomPage();
