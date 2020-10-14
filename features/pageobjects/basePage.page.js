/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        try {
            browser.url(`${path}`);
          } catch (err) {
            throw new Error(err);
          }
    }
}
