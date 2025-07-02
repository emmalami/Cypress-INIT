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
