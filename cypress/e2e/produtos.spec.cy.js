import produtos from '../fixtures/userSeletoresProdutos.json';
import loginPage from '../fixtures/userSeletoresLoginPage.json';

describe('Gerenciamento de Itens no Carrinho', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get(loginPage.username).type('standard_user')
        cy.get(loginPage.password).type('secret_sauce')
        cy.get(loginPage.buttonLogin).click()
        cy.url().should('include', loginPage.dashboardUrl)
    })

    it('Deve adicionar todos os produtos e exibir o contador correto', () => {
        cy.get(produtos.buttonAddToCartBackpack).click()
        cy.get(produtos.buttonAddToCartBike).click()
        cy.get(produtos.buttonAddToCartBoltTShirt).click()
        cy.get(produtos.buttonAddToCartFleeceJacket).click()
        cy.get(produtos.buttonAddToCartOnesie).click()
        cy.get(produtos.buttonAddToCartRedTShirt).click()
    })
    it('Deve ser capaz de remover todos os itens do carrinho', () => {
        cy.get(produtos.buttonAddToCartBackpack).click()
        cy.get(produtos.buttonAddToCartBike).click()
        cy.get(produtos.buttonAddToCartBoltTShirt).click()
        cy.get(produtos.buttonAddToCartFleeceJacket).click()
        cy.get(produtos.buttonAddToCartOnesie).click()
        cy.get(produtos.buttonAddToCartRedTShirt).click()
        cy.get(produtos.carrinhoBadge).should('have.text', '6')
        //Excluir os itens adicionados do carrinho
        cy.get(produtos.carrinhoBadge).click()
        cy.get(produtos.buttonRemoveBackpack).click()
        cy.get(produtos.buttonRemoveBike).click()
        cy.get(produtos.buttonRemoveBoltTShirt).click()
        cy.get(produtos.buttonRemoveFleeceJacket).click()
        cy.get(produtos.buttonRemoveOnesie).click()
        cy.get(produtos.buttonRemoveRedTShirt).click()
        cy.get(produtos.buttonContinueShopping).click()
    })
});