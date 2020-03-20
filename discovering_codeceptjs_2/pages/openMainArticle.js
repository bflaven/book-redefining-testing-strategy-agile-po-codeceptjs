// openMainArticle.js
const { I } = inject();

module.exports = {

/*
  // setting locators
  container: "//div[@class = 'numbers']",
  mainItem: {
    number: ".//div[contains(@class, 'numbers__main-number')]",
    title: ".//div[contains(@class, 'numbers__main-title-block')]"
  },
*/



  // setting locators
  container: '//*[@id="posts-filter"]/table',
  

  async openMainArticle() {
    I.waitForVisible(this.container)
    let _this = this
    let title;
    await within(this.container, async () => {
      title = await I.grabTextFrom(_this.mainItem.number);
      // let subtitle = await I.grabTextFrom(_this.mainItem.title);
      // title = title + " " + subtitle.charAt(0).toLowerCase() + subtitle.slice(1);
      // await I.click(_this.mainItem.title)
    })
    return title;
  }


/*
  async openMainArticle() {
    I.waitForVisible(this.container)
    let _this = this
    let title;
    await within(this.container, async () => {
      title = await I.grabTextFrom(_this.mainItem.number);
      let subtitle = await I.grabTextFrom(_this.mainItem.title);
      title = title + " " + subtitle.charAt(0).toLowerCase() + subtitle.slice(1);
      await I.click(_this.mainItem.title)
    })
    return title;
  }
*/

/*

//*[@id="post-876"]
*/


}


