class UolSegurancaPage{
    // Selectors
    elements = {
        title: () => cy.get('.maintitle'),
        updateDate: () => cy.contains('p', 'Atualização:')
    }

    //Methods

    validateUolSegurancaPage(){
        cy.log('Validando página de termos de segurança da UOL')
        cy.get('.maintitle')
            .should('exist')
            .should('be.visible')
            .should('contain', " Normas de Segurança e Privacidade ")
    }

    validateLastUpdateDate(){
        cy.log('Buscando data de última atualização do termos de segurança')
        return cy.contains('p', 'Atualização:')
            .invoke('text')
            .then(text => {
                const data = text.replace('Atualização:', '').trim()
                cy.log(`A última atualização aconteceu em: ${data}`)
            })
        
    }
}
export default UolSegurancaPage;