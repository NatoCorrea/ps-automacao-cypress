
// testes utilizando page object model
import YahooPage from '../pages/YahooPage'

describe('Busca por Pacto Soluções no Yahoo - Versão POM', () => {

    it('Buscar por "Pacto Soluções" no Yahoo e validar os resultados', () => {
        const yahooPage = new YahooPage()
        
        // Acessar a página do yahoo
        yahooPage.visit()
        yahooPage.validateYahooPage()
  
        //Escrevendo texto e buscando
        yahooPage.search('Pacto Soluções')
            .then(() => {
                cy.log('Busca executada com sucesso')
            })

        yahooPage.validateSearchResults('Pacto Soluções')
            .then(() => {
                cy.log('Validando resultados da pesquisa')
                cy.screenshot('yahoo-search-results', {
                    capture: 'viewport',
                    timeout: 10000,
                    overwrite: true    
                })
            })
    });
});