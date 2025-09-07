class UolPage {
    // Selectors
    elements = {
        logo: () => cy.get('h1 > a > div > img'),
        segurancaButton: () => cy.get('[title*="Segurança"]')
    }
    // Methods
    visit(){
        cy.log('Acessando a página Yahoo')
        return cy.visit('https://www.uol.com.br/')
    }

    validateUolPage(){
        cy.log('Validando página da UOL')
        cy.get('h1 > a > div > img')
            .should('exist')
            .should('be.visible')
    }

    click(){
        cy.log('Localizando botão de Segurança e Privacidade')
        cy.log('Clicando no botão Segurança e Privacidade')
        cy.contains('a[title]', 'Segurança e privacidade').click()
        cy.origin('https://sobreuol.noticias.uol.com.br', () => {
            cy.contains('h1', ' Normas de Segurança e Privacidade ')
                .should('exist')
                .should('be.visible')
        })
    }
}
export default UolPage;