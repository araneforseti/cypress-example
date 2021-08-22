export default class InventoryPage {
  constructor() {
  }

  amIHere() {
    return (String(cy.url).includes('/inventory.html') != null)
  }

  addBikeToCart() {
    cy.get('button[name=add-to-cart-sauce-labs-bike-light]').click()
  }

  canIRemoveBike() {
    return (cy.get('button[name=remove-sauce-labs-bike-light]').contains('Remove') != null)
  }
  
  getCartLink() {
    return cy.get('.shopping_cart_link')
  }

  goToCart() {
    this.getCartLink().click()
  }
}
