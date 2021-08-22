import HeaderPage from '../pages/HeaderPage'

export default class CartPage {

  constructor() {
    this.headerPage = new HeaderPage();
  }

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
    return this.headerPage.getCartLink()
  }

  getCartItems() {
    return cy.get('.cart_item')
  }
}
