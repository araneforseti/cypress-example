import HeaderPage from '../pages/HeaderPage'

export default class InventoryPage {
  constructor() {
    this.headerPage = new HeaderPage();
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
    return this.headerPage.getCartLink()
  }

  goToCart() {
    this.getCartLink().click()
  }
}
