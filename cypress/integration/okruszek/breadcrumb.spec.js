describe('Okruszek', () => {
    it('should donate after bread click', () => {
        cy.visit('http://www.okruszek.org.pl/');
        cy.get('.click-crumb').click();
        cy.get('section#thanks').should('be.visible');
    });
});