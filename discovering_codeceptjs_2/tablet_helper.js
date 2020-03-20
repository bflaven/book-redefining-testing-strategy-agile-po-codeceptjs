
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


  TheMessage(msg) {
    return;
  }
  
  async AnotherMeOnPage(url) {
    const { page } = this.helpers.Puppeteer;
    await page.goto(url, { timeout: 170000 });
  }


}

module.exports = Tablet;
