const frontendUrl = 'http://localhost:3000'
const resetUrl = 'http://localhost:3003/api/testing/reset'
const loginUrl = 'http://localhost:3003/api/users/'

describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', resetUrl)
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

})