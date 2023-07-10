const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
    },
  baseUrl:"https://www.booking.com/",
  viewportWidth: 1440,
  viewportHeight: 900
  }
})