//class LoginPage {
//  navigate() {
//    cy.visit('/')
//  }
//}
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'

describe('Checkout Flow', () => {
  const login = new LoginPage()
  const inventory = new InventoryPage()
  const cart = new CartPage()

  context('Standard user is able to add items to cart', () => {
    beforeEach(() => {
      login.visit()
      login.signIn('standard_user', 'secret_sauce') //normally never commit secrets, although these aren't terribly secret
      inventory.amIHere()
      inventory.addBikeToCart()
      inventory.canIRemoveBike()
      inventory.getCartLink().should('contain', '1')
      inventory.getCartLink().click()
      cart.amIHere()
    })

    it('Standard user can checkout', () => {
      cy.get('button[name=checkout]').click()
      cy.location('pathname', {timeout:60000}).should('include', '/checkout-step-one.html')
      cy.get('input[name=firstName]').type('Tester')
      cy.get('input[name=lastName]').type('McTesty')
      cy.get('input[name=postalCode]').type('12345')
      cy.get('input[name=continue]').click()
      cy.location('pathname', {timeout:60000}).should('include', '/checkout-step-two.html')
      cy.get('button[name=finish]').click()
      cy.location('pathname', {timeout:60000}).should('include', '/checkout-complete.html')
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
    })

    it('Standard user can remove items from cart', () => {
      cy.get('button[name=remove-sauce-labs-bike-light]').click()
      cy.get('.shopping_cart_link').should('not.contain', '1')
      cy.get('.cart_item').should('not.exist')
    })
  })
})
