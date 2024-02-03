/// <reference types ="cypress" />

describe('Login - Testes da API ServeRest', () => {

    it.only('Deve fazer login com Sucesso', () => {
        cy.request({
            method: 'Post', 
            url:'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
              }
        }).then((response) => {  //Validando a resposta
           
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
            cy.log('Response.body.authorization');
                

        })
    });
    
});