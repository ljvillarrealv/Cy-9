describe('Home de www.freerangetester,com', () => {
    beforeEach(() =>{
        cy.visit('https://demoqa.com/')
    })

    it('Tener un titulo', () => {
        cy.title().should('include', 'DEMOQA')
        
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        
        
    })

   

})