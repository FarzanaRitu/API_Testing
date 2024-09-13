console.log("Cypress Config Loaded");

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'test/**/*.cy.{js,jsx,ts,tsx}', // matches the "test" directory
    baseUrl: 'https://petstore.swagger.io/v2', 
    supportFile: false, // disable support if not required
  },
});
