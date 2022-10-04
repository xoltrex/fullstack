const frontendUrl = 'http://localhost:3000'
const resetUrl = 'http://localhost:3003/api/testing/reset'
const loginUrl = 'http://localhost:3003/api/users/'
const user = {name: 'root', username: 'root', password: 'root'}

describe('e2e testing', function() {
  beforeEach(function() {
    cy.request('POST', resetUrl)
    cy.request('POST', loginUrl, user)
    cy.visit(frontendUrl)
  })

  it('Login form is shown', function() {
    cy.contains('login')
    cy.contains('username')
    cy.contains('password')
    cy.get('#username')
    cy.get('#password')
    cy.contains('login')
  })

  it('login works', function() {
    cy.contains('login').click()
    cy.get('#username').type('root')
    cy.get('#password').type('root')
    cy.get('#loginButton').click()
    cy.contains('root logged in')
  })
})