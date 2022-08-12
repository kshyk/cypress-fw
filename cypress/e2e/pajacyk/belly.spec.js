describe("Pajacyk", () => {
    it("should donate after belly click", () => {
        cy.visit("https://www.pajacyk.pl/#index");
        cy.get(".pajacyk__clickbox").trigger('mouseover').click({force: true});
        cy.get(".pajacyk__thankyou").should("be.visible");
    });
});