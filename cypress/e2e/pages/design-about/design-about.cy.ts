import { Header } from '../../../support/helpers/Header';

const header = new Header();

const url = '/design-about';

describe(`go to ${url} renders correctly`, () => {
  it('contains the comics title and tech stack', () => {
    cy.visit(`http://localhost:3000${url}`);
    header.verifyLogo();
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
