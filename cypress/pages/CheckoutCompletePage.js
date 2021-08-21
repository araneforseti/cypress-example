export default class CheckoutCompletePage {
  constructor() {}

  amIHere() {
    cy.location('pathname', {timeout:60000}).should('include', '/checkout-complete.html')
  }
  
  checkCheckoutCompleteMessage() {
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
  }
}
