/// <reference types="cypress" />

describe('Testes da Funcionalidade Produtos', () => {

    it('Listar produtos', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).then((response) => {
            // Validação
            expect(response.body.produtos[0].nome).equal('Logitech MX Vertical')
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('produtos')
            
        })
    });

    it.only('Cadastrar produto', () => {
        cy.request({
            method: 'POST',
            url: 'produtos',
            body: {
                "nome": "Produto de teste",
                "preco": 370,
                "descricao": "Mouse",
                "quantidade": 381
            }
        });
    });
})