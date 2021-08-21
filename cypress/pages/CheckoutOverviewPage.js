export default class CheckoutOverviewPage {
  constructor() {}

  amIHere() {
    cy.location('pathname', {timeout:60000}).should('include', '/checkout-step-two.html')
  }

  finish() {
    cy.get('button[name=finish]').click()
  }
}
