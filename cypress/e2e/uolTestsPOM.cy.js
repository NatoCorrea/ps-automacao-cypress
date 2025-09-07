import UolPage from "../pages/UolPage";
import UolSegurancaPage from "../pages/UolSegurancaPage";

describe('Verificar quando o termos de segurança do site UOL foi atualizado a ultima vez - Versão POM', () => {
    const uolPage = new UolPage()
    const uolSegurancaPage = new UolSegurancaPage()

    it('Verificar ultima atualização do termos de Segurança', () => {

        uolPage.visit()

        uolPage.validateUolPage()

        uolPage.click()
   
        uolSegurancaPage.validateUolSegurancaPage()

        uolSegurancaPage.validateLastUpdateDate()
            .then(() => {
            cy.log('Validando resultados da pesquisa')
            cy.contains('p', 'Atualização:').screenshot('uol-results', {
                    timeout: 10000,
                    overwrite: true    
                })    
            })
    })
})