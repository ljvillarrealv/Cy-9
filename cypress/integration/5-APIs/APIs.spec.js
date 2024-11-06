describe('Pruebas API´s con Cypress', () =>{


    //https://jsonplaceholder.typicode.com

    it('El endpoint POST responde con status 200', () => {
        cy.request({

            url:'https://jsonplaceholder.typicode.com/posts'
        }).then((resp)=>{
            expect(resp.status).to.eq(200)
        })
        
        
    })

    it('El endopoint "POST" tiene 100 entradas', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts')
        .its('body')
        .should('have.length',100)
    })

    it('Validar un atributo(titulo) del Response 1',() =>{
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts/1')
        .its('body')
        .should('have.property','title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')

    })
})