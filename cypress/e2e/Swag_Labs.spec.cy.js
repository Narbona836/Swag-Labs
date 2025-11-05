
import loginSelectors from '../fixtures/userSeletoresLoginPage.json'


describe('Login Page', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(loginSelectors.username).type("standard_user")
    cy.get(loginSelectors.password).type("secret_sauce")
    cy.get(loginSelectors.buttonLogin).click()
    cy.url().should('include', loginSelectors.dashboardUrl)
  })

  it('Deve exibir mensagem de erro ao inserir credenciais inválidas', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(loginSelectors.username).type("ilocked_out_userr")
    cy.get(loginSelectors.password).type("secret_sauce")
    cy.get(loginSelectors.buttonLogin).click()
    cy.get('.error-message-container').should('be.visible')
  })

  it('Deve fazer login com usuario com problemas', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(loginSelectors.username).type("problem_user")
    cy.get(loginSelectors.password).type("secret_sauce")
    cy.get(loginSelectors.buttonLogin).click()
    cy.url().should('include', loginSelectors.dashboardUrl)
  })

  it('Deve fazer login com usuario com desempenho lento', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(loginSelectors.username).type("performance_glitch_user")
    cy.get(loginSelectors.password).type("secret_sauce")
    cy.get(loginSelectors.buttonLogin).click()
    cy.url().should('include', loginSelectors.dashboardUrl)
  })

  it('Deve fazer login com usuario com erro ', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(loginSelectors.username).type("error_user")
    cy.get(loginSelectors.password).type("secret_sauce")
    cy.get(loginSelectors.buttonLogin).click()
    cy.url().should('include', loginSelectors.dashboardUrl)
  })

  it('Deve fazer login com usuario visual', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(loginSelectors.username).type("visual_user")
    cy.get(loginSelectors.password).type("secret_sauce")
    cy.get(loginSelectors.buttonLogin).click()
    cy.url().should('include', loginSelectors.dashboardUrl)
  })
})
