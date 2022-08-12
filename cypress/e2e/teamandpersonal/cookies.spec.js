describe("Cookie Policy", () => {
    beforeEach(() => {
        cy.visit("https://teamandpersonal.pl/")
    });

    it("should appear on entry point", () => {
        cy.get("div#catapult-cookie-bar")
          .should("be.visible")
          .should("contain.text", "Serwis wykorzystuje pliki cookies. Korzystając ze strony wyrażasz zgodę na wykorzystywanie plików cookies. dowiedz się więcej.");
    });

    it("should disappear when dismissed by OK button", () => {
        cy.get("button[id=catapultCookie]").trigger('mouseover').click();
        cy.get("div#catapult-cookie-bar").should("not.be.visible");
    });
});
