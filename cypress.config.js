const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: "8199cm",
  defaultCommandTimeout: 40000,
  reporter: 'cypress-mochawesome-reporter',
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on);
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalRunAllSpecs: true,
    experimentalWebKitSupport: true,
  },
});
