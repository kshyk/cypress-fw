describe('Cookie Policy', () => {
  it('check cookie bar content and dismiss it afterwards', () => {
    cy.origin('https://teamandpersonal.pl', ()=> {
      cy.visit('/');
      cy.get('aside#moove_gdpr_cookie_info_bar')
        .should('be.visible')
        .as('cookieBar')
        .should('contain.text', 'Używamy ciasteczek, aby zapewnić najlepszą jakość korzystania z naszej witryny.')
        .should('contain.text', 'Możesz dowiedzieć się więcej o tym, jakich ciasteczek używamy, lub wyłączyć je w ustawieniach.');
      cy.get('.moove-gdpr-infobar-allow-all').trigger('mouseover').click();
      cy.get('@cookieBar').should('not.be.visible');
    });
  });
});
