
const Helper = codeceptjs.helper;

class Mobile extends Helper {

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
  sayHelloWorld(msg) {
    return;
  }

}

module.exports = Mobile;
