const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '3b8kd4',

  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 30000,

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quiet: true,
      overwrite: false,
      html: false,
      json: true,
    }
  },

  e2e: {
    experimentalStudio: true,
    baseUrl: 'https://dps-admin-ui.k8.isw.la',
    supportFile: 'cypress/support/e2e.js',

    setupNodeEvents(on, config) {
      // Properly require the external plugin file
      return require('./cypress/plugins/index.js')(on, config);
    }
  }
});
