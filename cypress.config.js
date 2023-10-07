const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/*.js', 
    // specPattern: 'cypress/integration/cyCourseCode/*js'
    specPattern:'cypress/**/*.js'
  },
  
});
