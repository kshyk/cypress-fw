describe("Okruszek", () => {
    it("should donate after bread click", () => {
        cy.visit("www.okruszek.org.pl/");
        cy.get(".click-crumb").trigger('mouseover').click();
        cy.get("section#thanks", { timeout: 10000 }).should("be.visible");
    });
});