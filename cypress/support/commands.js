// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// -- Este será o novo comando Cypress para fazer login e obter token de autorização --
Cypress.Commands.add('loginAndGetToken', (email, senha) => {
    cy.request({
        method: 'POST', 
        url: 'login',
        body: {
            "email": email,
            "password": senha
        }
    }).then((response) => {
        // Validando a resposta
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('authorization');

        // Retornando o token de autorização para uso em outros testes
        return response.body.authorization;
    });
})
Cypress.Commands.add('cadastrarProduto' , (token, produto, preco, descricao, quantidade) =>{
    cy.request({
        method: 'POST',
        url: 'produtos',
        headers: { authorization: token },
        body: {
            "nome": produto,
            "preco": 370,
            "descricao": descricao, // A descrição e o nome do produto devem ser iguais para este teste
            "quantidade": quantidade
        },
        failOnStatusCode: false 
})

})



