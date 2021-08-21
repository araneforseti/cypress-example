export default class CartPage {
  constructor() {}

  amIHere() {
    cy.get('.title').should('contain', 'Your Cart')
  }
}
