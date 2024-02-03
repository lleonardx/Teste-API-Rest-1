/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    etupNodeEvents(on, config) {
      implement node event listeners here
    },
  },
 });
*/

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
  },
})