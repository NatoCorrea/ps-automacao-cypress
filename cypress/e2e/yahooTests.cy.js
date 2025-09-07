
describe('Busca por Pacto Soluções no Yahoo - Versão direta', () => {

     it('Buscar por "Pacto Soluções" no Yahoo e validar os resultados', () => {
        // Acessando e valindando a página do yahoo 
        cy.log('Acessando página do Yahoo')
        cy.visit('https://www.yahoo.com')
            .then(() => {
                cy.log('Página do Yahoo carregada com sucesso!')
        })

        //Escrevendo texto e buscando
        cy.log('Digitando texto...')
        cy.get('#yschsp')
            .should('be.visible')
            .clear()
            .type('Pacto Soluções')
            .then(() => {
        cy.log('Iniciando a pesquisa')
        cy.get('#yschsp').type('{enter}')
        })

        // Validando resultados
        cy.url().should('include', 'search')
        cy.get('#web')
            .should('exist')
            .should('be.visible')
            .should('contain.text', 'Pacto Soluções')
            .then(() => {
                cy.log('Validando resultados da pesquisa')
                cy.screenshot('yahoo-direct-search-results', {
                    capture: 'viewport',
                    timeout: 10000,
                    overwrite: true    
                })
            })

     })
})