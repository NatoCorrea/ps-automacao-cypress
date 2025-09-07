describe('Verificar quando o termos de segurança do site UOL foi atualizado a ultima vez - Versão direta', () => {

    it('Verificar ultima atualização do termos de Segurança', () => {
        // Acessando e validando a página da UOL
        cy.log('Acessando página da UOL')
        cy.visit('https://www.uol.com.br/')
            .then(() => {
                cy.get('h1 > a > div > img')
                    .should('exist')
                    .should('be.visible')
            })

        //Localizando botão de Segurança e privacidade
        cy.log('Localizando o botão e clicando no botão de segurança')
        cy.contains('a[title]', 'Segurança e privacidade').click()

        //Validando página de normas de segurança e privacidade da UOL
        cy.log('Validando página de termos de segurança da UOL')
        cy.get('.maintitle')
            .should('exist')
            .should('be.visible')
            .should('contain', " Normas de Segurança e Privacidade ")
        
        //Localizando data da última atualização do termo de segurança
        cy.log('Buscando data de última atualização do termos de segurança')
        cy.contains('p', 'Atualização:')
            .invoke('text')
            .then(text => {
                const data = text.replace('Atualização:', '').trim()
                cy.log(`A última atualização aconteceu em: ${data}`)
            })

        //Validando resultados
        cy.log('Validando resultados da pesquisa')
            cy.contains('p', 'Atualização:').screenshot('uol-direct-results', {
                    timeout: 10000,
                    overwrite: true    
            })    

    })
})