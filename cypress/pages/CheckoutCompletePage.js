export default class CheckoutCompletePage {
  constructor() {}

  amIHere() {
    return (String(cy.url).includes('/checkout-complete.html') != null)
  }
  
  checkCheckoutCompleteMessage() {
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
  }
}
