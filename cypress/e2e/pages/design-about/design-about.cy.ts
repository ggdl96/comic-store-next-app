const url = '/design-about';

describe(`go to ${url} renders correctly`, () => {
  it('contains the comics title', () => {
    cy.visit(`http://localhost:3000${url}`);
    cy.contains('comics');
    cy.contains('Comic Store is a website build with NextJS');
    cy.contains('Techs');
    cy.contains('NextJS');
    cy.contains('TailwindCSS');
    cy.contains('Jest, Testing Library');
    cy.contains('Cypress');
    cy.contains('Redux');
    cy.contains('Sagas');
  });
});
