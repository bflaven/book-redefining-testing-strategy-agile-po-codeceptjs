
const pageLoaded = browser =>
  browser.waitUntil(
    async () => {
      const state = await browser.execute('return document.readyState');
      return state === 'complete';
    },
    100000, // timeout
    'timeout', // timeoutMsg
    500, // interval
  );

  
const Helper = codeceptjs.helper;

class Tablet extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }
  
  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']


  anotherGiveMessage(msg) {
    return;
  }
  /*
  async anotherAmOnPage(url) {
    const { page } = this.helpers.Puppeteer;
    await page.goto(url, { timeout: 170000 });
  }
  */

  async isPageLoaded() {
    const { browser } = this.helpers.WebDriver;
    await pageLoaded(browser);
  }

}

module.exports = Tablet;
