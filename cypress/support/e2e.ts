import './commands';
// Cypress real events support
import 'cypress-real-events/support';

Cypress.on('uncaught:exception', (error, runnable) => {
  return false;
});
