module.exports = {
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 30000,
  e2e: {
    experimentalStudio: true,
    baseUrl: 'https://dps-admin-ui.qa.interswitchng.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3b8kd4', // Your Cypress Dashboard project ID
  "reporter": "cypress-multi-reporters",
  "reporterOptions":{
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions":{
      "reportDir":"cypress/reports/mocha",
      "quiet": true,
      "overwrite": false,
      "html":false,
      "json": true

    }
  },

  e2e: {
    // Setup Node events (plugins)
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },

    // Path to your custom support file
    supportFile: "cypress/support/e2e.js",
  },
});
