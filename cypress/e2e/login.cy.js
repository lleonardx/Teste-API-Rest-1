/// <reference types ="cypress" />

describe('Login - Testes da API ServeRest', () => {

    it('Deve fazer login com Sucesso', () => {
        cy.request({
            method: 'POST', 
            url:'login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
              }
        }).then((response) => {  //Validando a resposta
            return response.body.authorization

            cy.log(response.body.authorization)
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
           
                

        })
    });
    
});