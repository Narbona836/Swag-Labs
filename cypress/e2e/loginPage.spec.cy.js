
import loginPage from '../fixtures/userSeletoresLoginPage.json'


describe('Login Page', () => {
  it('Deve fazer login com sucesso', () => {
    cy.visit('/')
    cy.get(loginPage.username).type("standard_user")
    cy.get(loginPage.password).type("secret_sauce")
    cy.get(loginPage.buttonLogin).click()
    cy.url().should('include', loginPage.dashboardUrl)
  })

  it('Deve exibir mensagem de erro ao inserir credenciais inválidas', () => {
    cy.visit('/')
    cy.get(loginPage.username).type("ilocked_out_userr")
    cy.get(loginPage.password).type("secret_sauce")
    cy.get(loginPage.buttonLogin).click()
    cy.get('.error-message-container').should('be.visible')
  })

  it('Deve fazer login com usuario com problemas', () => {
    cy.visit('/')
    cy.get(loginPage.username).type("problem_user")
    cy.get(loginPage.password).type("secret_sauce")
    cy.get(loginPage.buttonLogin).click()
    cy.url().should('include', loginPage.dashboardUrl)
  })

  it('Deve fazer login com usuario com desempenho lento', () => {
    cy.visit('/')
    cy.get(loginPage.username).type("performance_glitch_user")
    cy.get(loginPage.password).type("secret_sauce")
    cy.get(loginPage.buttonLogin).click()
    cy.url().should('include', loginPage.dashboardUrl)
  })

  it('Deve fazer login com usuario com erro ', () => {
    cy.visit('/')
    cy.get(loginPage.username).type("error_user")
    cy.get(loginPage.password).type("secret_sauce")
    cy.get(loginPage.buttonLogin).click()
    cy.url().should('include', loginPage.dashboardUrl)
  })

  it('Deve fazer login com usuario visual', () => {
    cy.visit('/')
    cy.get(loginPage.username).type("visual_user")
    cy.get(loginPage.password).type("secret_sauce")
    cy.get(loginPage.buttonLogin).click()
    cy.url().should('include', loginPage.dashboardUrl)
  })
})
