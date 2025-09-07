class YahooPage {
    // Selectors
    elements = {
        logo: () => cy.get('#logo'),
        searchBox: () => cy.get('#yschsp'),
        searchButton: () => cy.get('#yschsp').type('{enter}'),
        searchResults: () => cy.get('#web')
    }

    // Methods
    visit(){
        cy.log('Acessando a página Yahoo')
        return cy.visit('https://www.yahoo.com')
    }

    validateYahooPage(){
        cy.log('Validando página do Yahoo')
        cy.get('#logo')
            .should('exist')
            .should('be.visible')
        return cy.get('#logo')
    }

    search(text){
        cy.log(`Digitando o texto: ${text}`)
        cy.get('#yschsp').should('be.visible').clear().type(text)
        cy.log('Apertando Enter para procurar')
        return cy.get('#yschsp').type('{enter}')
    }

    validateSearchResults(text){
        cy.log('Validando busca')
        return cy.get('#web')
            .should('exist')
            .should('be.visible')
            .should('contain.text', text)
    }

}

export default YahooPage;