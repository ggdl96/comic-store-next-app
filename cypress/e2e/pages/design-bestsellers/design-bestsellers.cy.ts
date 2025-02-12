import { Header } from '../../../support/helpers/Header';

const header = new Header();

const url = '/design-bestsellers';

describe(`go to ${url} renders correctly`, () => {
  it('displays the Comic Store logo and Bestsellers title', () => {
    cy.visit(`http://localhost:3000${url}`);
    header.verifyLogo();

    cy.contains('Bestsellers');
  });

  it('contains sections', () => {
    cy.visit(`http://localhost:3000/${url}`);
    cy.contains('All Time');
    cy.contains('Past Year');
    cy.contains('Past Month');
  });
});
