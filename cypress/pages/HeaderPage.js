export default class HeaderPage {
  constructor() {}

  getCartLink() {
    return cy.get('.shopping_cart_link')
  }
}
