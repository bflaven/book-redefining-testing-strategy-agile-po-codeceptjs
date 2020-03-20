exports.config = {
  tests: '../tests/*_test.js',
  output: '../output',
  helpers: {
    tablet: {
      require: '../helpers/tablet_helper.js',
    },
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    }
  },
  include: {
    I: '../steps_file/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'better_testing_management_4'
}