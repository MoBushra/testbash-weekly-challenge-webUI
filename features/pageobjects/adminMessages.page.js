import BasePage from './basePage.page';

export default class AdminMessagesPage extends BasePage {
    get messageModal() { return $('div[role="dialog"]')}
    get fromSenderElement() { return $('.col-10 > p')}
    get btnCloseMessage() { return $('.btn.btn-outline-primary')}
    
    /**
     * The element contains the sender name, since the name is preset we can send it
     * into this method to click on the specific message
     * @param {string} name of sender
     */
    senderName(name) { return $(`/html//div[@id='root']/div/div[@class='container']//div[@class='messages']/div[3]/div[@class='col-sm-2']/p[.='${name}']`) }

    openSenderEmail(name) {
        this.senderName(name).isExisting();
        this.senderName(name).click();
    }

}

export const adminMessagesPage = new AdminMessagesPage();