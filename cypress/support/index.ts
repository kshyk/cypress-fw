export {};

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
    }
  }
}
