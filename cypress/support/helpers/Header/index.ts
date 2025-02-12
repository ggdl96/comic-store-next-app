export class Header {
  verifyLogo() {
    cy.get('#headerComicStoreLogo').should('be.visible');
  }
}
