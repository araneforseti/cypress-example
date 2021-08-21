export default class CheckoutInfoPage {
  constructor() {}

  amIHere() {
    cy.location('pathname', {timeout:60000}).should('include', '/checkout-step-one.html')
  }

  enterFirstName(value) {
    cy.get('input[name=firstName]').type(value)
  }

  enterLastName(value) {
    cy.get('input[name=lastName]').type(value)
  }

  enterPostalCode(value) {
    cy.get('input[name=postalCode]').type(value)
  }

  submit() {
    cy.get('input[name=continue]').click()
  }
}
