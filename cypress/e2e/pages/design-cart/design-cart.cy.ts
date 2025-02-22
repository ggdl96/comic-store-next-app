import { Header } from '../../../support/helpers/Header';

const header = new Header();

const url = '/design-cart';

describe(`Navigating to ${url} renders correctly`, () => {
  it('displays the Comic Store logo', () => {
    cy.visit(`http://localhost:3000${url}`);
    header.verifyLogo();
  });

  it('displays empty cart when no items added', () => {
    cy.visit(`http://localhost:3000${url}`);

    cy.get('.label-cart-empty').contains('Empty Cart');
  });
});
