export default class LoginPage {
  visit() {
    cy.visit('/')
  }

  signIn(username,password) {
    this.fillEmail(username)
    this.fillPassword(password)
    this.submit()
  }

  fillEmail(value) {
    const usernameInput = cy.get(`[data-test=username]`)
    usernameInput.clear()
    usernameInput.type(value)
  }

  fillPassword(value) {
    const passwordInput = cy.get(`[data-test=password]`)
    passwordInput.clear()
    passwordInput.type(value)
  }

  submit() {
    const button = cy.get(`[data-test=login-button]`)
    button.click()
  }
}
