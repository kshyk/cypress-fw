describe('Cookie Policy', () => {
  beforeEach(() => {
    cy.visit('https://teamandpersonal.pl/');
  });

  it('should appear on entry point', () => {
    cy.get('aside#moove_gdpr_cookie_info_bar')
      .should('be.visible')
      .should('contain.text', 'Używamy ciasteczek, aby zapewnić najlepszą jakość korzystania z naszej witryny.')
      .should('contain.text', 'Możesz dowiedzieć się więcej o tym, jakich ciasteczek używamy, lub wyłączyć je w ustawieniach.');
  });

  it('should disappear when dismissed by OK button', () => {
    cy.get('aside#moove_gdpr_cookie_info_bar').as('cookieBar');
    cy.get('.moove-gdpr-infobar-allow-all').trigger('mouseover').click();
    cy.get('@cookieBar').should('not.be.visible');
  });
});
