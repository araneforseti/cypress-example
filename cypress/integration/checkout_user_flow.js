//class LoginPage {
//  navigate() {
//    cy.visit('/')
//  }
//}
import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutInfoPage from '../pages/CheckoutInfoPage'
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage'
import CheckoutCompletePage from '../pages/CheckoutCompletePage'

describe('Checkout Flow', () => {
  const login = new LoginPage()
  const inventory = new InventoryPage()
  const cart = new CartPage()
  const checkoutInfo = new CheckoutInfoPage()
  const checkoutOverview = new CheckoutOverviewPage()
  const checkoutComplete = new CheckoutCompletePage()

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
      cart.checkout()
      checkoutInfo.amIHere()
      checkoutInfo.enterFirstName('Tester')
      checkoutInfo.enterLastName('McTesty')
      checkoutInfo.enterPostalCode('12345')
      checkoutInfo.submit()
      checkoutOverview.amIHere()
      checkoutOverview.finish()
      checkoutComplete.amIHere()
      checkoutComplete.checkCheckoutCompleteMessage()
    })

    it('Standard user can remove items from cart', () => {
      cart.removeBike()
      cart.getCartLink().should('not.contain', '1')
      cart.getCartItems().should('not.exist')
    })
  })
})
