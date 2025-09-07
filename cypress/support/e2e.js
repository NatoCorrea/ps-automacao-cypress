Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Script error.')) {
    return false
  }
  // outros erros ainda vão quebrar os testes
})
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora apenas o erro "geoip is not defined"
  if (err.message.includes('geoip is not defined')) {
    return false
  }

  // outros erros ainda vão falhar normalmente
})
