describe('Home de www.freerangetester,com', () => {
    beforeEach(() =>{
        cy.visit('https://www.freerangetesters.com')
    })

    it('Tener un titulo', () => {
        cy.title().should('include', 'Free Range Testers')           
    })

    it('hay 10 cursos con el Ver Producto', () => {
        cy.xpath('//*[@id="page_header"]/div/section/div/header/nav/ul/li[1]/a').click()
        cy.wait(4000)
        cy.get('.sc-UblHX > .sc-fufdwm > .sc-eDHQDy > .sc-giBObj > .sc-epnzzT').should('have.length', 10)
    })

    it('El campo Nombre del Formulario, posse una Clase (sc-iwXfZk hBtjeN)', () =>{
        cy.get('#email-form-name').should('have.class','sc-iwXfZk hBtjeN')
    })

    it('Hay un Link llamado Blog en la barra de Navegacion', () =>{
        cy.contains('Blog').should('have.text','Blog')
    })

    it('Existe un boton de "Agendar Mentoria"', () => {
        cy.contains('Agendar mentoría').should('be.visible')  //.should('not.be.visible')
    })

    it('Existe un boton de "Crear Usuario"', () => {
        cy.contains('Crear usuario').should('exist')  //.should('not.be.visible')
    })

    
})