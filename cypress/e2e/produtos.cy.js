/// <reference types="cypress" />

describe('Testes de API em produtos', () => {
    it('Cadastrar produto - POST', () => {
        cy.loginAndGetToken('fulano@qa.com', 'teste').then((token) => {
            let produto = 'produto teste' + Math.floor(Math.random() * 10000000000000);

            cy.request({
                method: 'POST',
                url: 'produtos',
                headers: { authorization: token },
                body: {
                    "nome": produto,
                    "preco": 370,
                    "descricao": "Mouse",
                    "quantidade": 381
                }
            }).then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body.message).to.equal('Cadastro realizado com sucesso');
            });
        });
    });

    it('Listar produtos', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).then((response) =>{
            // Validação
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('produtos');
        });
    });

});




