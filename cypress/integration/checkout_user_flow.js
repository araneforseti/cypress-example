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
      expect(inventory.amIHere(), 'on inventory page').to.equal(true)
      inventory.addBikeToCart()
      expect(inventory.canIRemoveBike(), 'able to remove bike').to.equal(true)
      inventory.getCartLink().should('contain', '1')
      inventory.goToCart()
      expect(cart.amIHere(), 'On cart page').to.equal(true)
    })

    it('Standard user can checkout', () => {
      cart.checkout()
      expect(checkoutInfo.amIHere()).to.equal(true)
      checkoutInfo.enterFirstName('Tester')
      checkoutInfo.enterLastName('McTesty')
      checkoutInfo.enterPostalCode('12345')
      checkoutInfo.submit()
      expect(checkoutOverview.amIHere(), 'on checkout overview').to.equal(true)
      checkoutOverview.finish()
      expect(checkoutComplete.amIHere(), 'on checkout complete').to.equal(true)
      checkoutComplete.checkCheckoutCompleteMessage()
    })

    it('Standard user can remove items from cart', () => {
      cart.removeBike()
      cart.getCartLink().should('not.contain', '1')
      cart.getCartItems().should('not.exist')
    })
  })
})
