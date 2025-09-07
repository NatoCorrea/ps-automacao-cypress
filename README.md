# Automação de Testes com Cypress

Este projeto contém testes automatizados usando Cypress com duas abordagens diferentes (Page Object Model e Direta) para realizar buscas no Yahoo, e fazer uma verificação no site da UOL.

## 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) (v22.14.0 ou superior)

- NPM (geralmente instalado com Node.js)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone git@github.com:NatoCorrea/automacao-cypress.git
```

2. Instale as dependências:
```bash
npm install cypress --save-dev
```

## 📁 Estrutura do Projeto

```
automacao-cypress/
├── cypress/
│   ├── e2e/                    # Arquivos de teste
|   |   ├── uolTests.cy.js      # Testes sem POM
|   |   ├── uolTestsPOM.cy.js   # Testes usando POM
│   │   ├── yahooTests.cy.js    # Testes sem POM
│   │   └── yahooTestsPOM.cy.js # Testes usando POM
│   ├── pages/                  # Page Objects
│   │   ├── UolPage.js          # Page Object da página SobreNósUOL
│   │   ├── UolSegurancaPage.js # Page Object da página SobreNósUOL
│   │   └── YahooPage.js        # Page Object do Yahoo
│   └── support/                # Arquivos de suporte
└── package.json
```

## 🎯 Funcionalidades Testadas

- **Busca no Yahoo (Duas Versões)**
  1. **Com Page Object Model (yahooTestsPOM.cy.js)**
     - Implementa o padrão POM para melhor organização
     - Captura screenshots após validação dos resultados
     - Inclui logs detalhados das ações
  
  2. **Versão Direta (yahooTests.cy.js)**
     - Implementação mais simples e direta
     - Também inclui captura de screenshots
     - Logs detalhados de cada ação

- **Verificação na UOL(Duas Versões)**
  3. **Com Page Object Model (uolTestsPOM.cy.js)**
     - Implementa o padrão POM para melhor organização
     - Captura screenshots após validação dos resultados
     - Inclui logs detalhados das ações
  
  4. **Versão Direta (uolTestsPOM.cy.js)**
     - Implementação mais simples e direta
     - Também inclui captura de screenshots
     - Logs detalhados de cada ação

## ⚡ Executando os Testes

### Modo Headless (sem interface gráfica)
```bash
npx cypress run
```

### Modo Interativo (com navegador visível)
```bash
npx cypress run --headed --browser chrome

```

## 🔍 Page Objects

O projeto utiliza o padrão Page Object Model (POM) para melhor organização e manutenibilidade dos testes. Os page objects estão localizados em `cypress/pages/` e encapsulam os seletores e ações específicas de cada página.

## 📷 Screenshots

Os screenshots são capturados automaticamente durante a execução dos testes:
- **yahooTests.cy.js**: Salva como 'yahoo-direct-search-results'
- **yahooTestsPOM.cy.js**: Salva como 'yahoo-search-results'
- **uolTests.cy.js**: Salva como 'uol-direct-search-results'
- **uolTestsPOM.cy.js**: Salva como 'uol-search-results'

Localização dos screenshots:
- `cypress/screenshots/` (após execução dos testes)


## 🔍 Implementações Específicas

### Page Object Model (YahooPage.js | UolPage.js | UolSegurancaPage.js)
- Implementa métodos reutilizáveis para navegação
- Inclui validações robustas
- Logs detalhados de cada ação

### Testes Diretos (yahooTestsDirect.cy.js | uolTests.cy.js
- Mantém as mesmas validações de qualidade
- Inclui logs detalhados para melhor visibilidade na interface do Cypress

## 📌 Versões

- Cypress: 15.1.0
