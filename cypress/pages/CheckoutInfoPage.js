export default class CheckoutInfoPage {
  constructor() {}

  amIHere() {
    return (String(cy.url).includes('/checkout-step-one.html') != null)
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
