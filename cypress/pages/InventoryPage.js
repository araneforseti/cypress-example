//import HeaderComponent from 'HeaderComponent'

export default class InventoryPage {
  constructor() {
 //   this.header = new HeaderComponent()
  }

  amIHere() {
    cy.location('pathname', {timeout:60000}).should('include', '/inventory.html')
  }

  addBikeToCart() {
    cy.get('button[name=add-to-cart-sauce-labs-bike-light]').click()
  }

  canIRemoveBike() {
    cy.get('button[name=remove-sauce-labs-bike-light]').should('contain', 'Remove')
  }
  
  getCartLink() {
    return cy.get('.shopping_cart_link')
  }
}
