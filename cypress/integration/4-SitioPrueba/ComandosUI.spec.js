describe("Pruebas Comandos sobre UI", () =>{
    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/")
    } )

    it("Ejemplo de Click", () =>{
        cy.contains('Add/Remove Elements').click()
        cy.contains('Add Ele').click()
        cy.get('.added-manually').click()

    })


    it('Tipeo de escritura validando Login',() =>{
        cy.contains("Form Authentication").click()
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.radius').click()
        cy.get('#flash').should('have.text', '\n            You logged into a secure area!\n            ×\n          ')
        cy.get('.button').click()
        
    })

    it('Tipeo de escritura validando Logout',() =>{
        cy.contains("Form Authentication").click()
        cy.get('#username').type("tomsmith")
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.radius').click()
        cy.get('.button').click()
        cy.get('#flash').should('have.text', '\n            You logged out of the secure area!\n            ×\n          ')
    })


    it('Ejemplo de Checkboxes', () => {
        cy.contains('Checkbox').click()
        cy.get('#checkboxes > :nth-child(1)').check()
        cy.get('#checkboxes > :nth-child(3)').uncheck()
    })

    it('usar un Dropdown', () =>{
        cy.contains('Dropdown').click()
        cy.get('#dropdown').select(1)
    })


    it('Tipeo de escritura limpiando campo',() =>{
        cy.contains("Form Authentication").click()
        cy.get('#username').clear()
        cy.get('#username').type("tomsmith")
        cy.get('#password').clear()
        cy.get('#password').type("SuperSecretPassword!")
        cy.get('.radius').click()
        
        
    })

    it('Hoover sobre elementos', () => {
        cy.contains("Hovers").click()
        cy.get("#content > div > div:nth-child(4) > div > a").click({force:true})
    })

    it('Validar exista Hoover sobre elementos', () => {
        cy.contains("Hovers").click()
        cy.get("#content > div > div:nth-child(4) > div > a").invoke('show').should
    })

    it('Right click', () => {
        cy.contains('Context Menu').click()
        cy.get('#hot-spot').rightclick()
        cy.on("window:alert", (alert)=>{
            expect(alert).to.equal("You selected a context menu")
        })
    })
})