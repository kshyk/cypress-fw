import { defineConfig } from 'cypress';
import fs = require('fs');

export = defineConfig({
  video: false,
  projectId: 'xd2d1c',
  retries: {
    'runMode': 1,
    'openMode': 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' || browser.family === 'chromium') {
          launchOptions.args.push('--disable-infobars')
          launchOptions.args.push('--disable-gpu')
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--disable-web-security')
        }
        return launchOptions;
      });
      on('after:spec', (spec, results) => {
        if (results?.video) {
          const failures = results.tests.some((test) => test.attempts.some((attempt) => attempt.state === 'failed'));
          if (!failures) {
            fs.unlinkSync(results.video);
          }
        }
      });
    },
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.[jt]s'
  }
});
