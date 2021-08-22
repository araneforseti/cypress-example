export default class CheckoutOverviewPage {
  constructor() {}

  amIHere() {
    return (String(cy.url).includes('/checkout-step-two.html') != null)
  }

  finish() {
    cy.get('button[name=finish]').click()
  }
}
