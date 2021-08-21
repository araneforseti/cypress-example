export default class CartPage {
  constructor() {}

  amIHere() {
    cy.get('.title').should('contain', 'Your Cart')
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
