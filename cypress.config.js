import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  chromeWebSecurity: false,
  experimentalStudio: true,
  projectId: 'xd2d1c',
  retries: 2,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
