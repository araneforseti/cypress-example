export default class CartPage {
  constructor() {}

  amIHere() {
    return (cy.get('.title').contains('Your Cart') != null)
  }

  checkout() {
    cy.get('button[name=checkout]').click()
  }

  removeBike() {
    cy.get('button[name=remove-sauce-labs-bike-light]').click()
  }
 
  getCartLink() {
    return cy.get('.shopping_cart_link')
  }

  getCartItems() {
    return cy.get('.cart_item')
  }
}
